import axios from 'axios';

const ValidateEmail = (mail) => /\S+@\S+\.\S+/.test(mail);

const randomCompliment = () => {
	const complimentArr = [
		'Congratulations',
		'You are wonderful',
		'You are great',
		'You are on fire',
		'Wonderful',
		'Great',
		'Excellent',
		'Very good',
		'Genius',
	];
	const randomWord =
		complimentArr[Math.floor(Math.random() * complimentArr.length)];
	return randomWord;
};

const userByID = async (id) => {
	const { data } = await axios.get(`/api/user/${id}`);
	return data;
};

export { ValidateEmail, randomCompliment, userByID };
