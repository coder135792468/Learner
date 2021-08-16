import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import path from 'path';
import connectDB from './utils/db.js';
import userRouter from './routes/userRoute.js';
import codeRouter from './routes/codeRoute.js';
import challengeRoute from './routes/challengeRoute.js';
import UploadRoute from './routes/UploadRoute.js';
// import cors from 'cors';
import { notFound, errorHandler } from './middlerwares/errors.js';
dotenv.config();

const app = express();
connectDB();

const PORT = process.env.PORT || 5000;

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/challenges/', challengeRoute);
app.use('/api/upload', UploadRoute);
app.use('/api/user/', userRouter);
app.use('/api/code/', codeRouter);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/frontend/build')));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
	);
} else {
	app.get('/', (req, res) => {
		res.send('API is running....');
	});
}

app.use(notFound);
app.use(errorHandler);

app.listen(
	PORT,
	console.log(`Server is running on ${PORT}`.yellow.bold.underline)
);
