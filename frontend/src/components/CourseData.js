import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core';

import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import SwiperCore, { Pagination, Navigation } from 'swiper/core';
SwiperCore.use([Pagination, Navigation]);
SyntaxHighlighter.registerLanguage('javascript', js);
const useStyles = makeStyles((theme) => ({
	page_con: {
		width: '100%',
		height: 'calc(100vh - 80px)',
		background: '#fff',
		borderRadius: '0 0 10px 10px',
		display: 'flex',
		justifyContent: 'center',
		overflow: 'auto',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	pages: {
		width: '100%',
		height: '100vh',
		color: '#000',
		overflow: 'auto',
		whiteSpace: 'pre-wrap',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	header: {
		textAlign: 'center',
		whiteSpace: 'pre-wrap',
	},
	content: {
		padding: '30px',
		background: '#efefef',
		borderRadius: '50px',
		whiteSpace: 'pre-wrap',
	},
	footer: {
		fontSize: '12px',
		background: 'rgb(220, 250, 0)',
		padding: '10px 20px',
		fontWeight: 'bold',
		whiteSpace: 'pre-wrap',
		margin: '40px 0',
	},
	code: {
		position: 'relative',
		background: '#223',
		color: '#fff',
		borderRadius: '10px',
		margin: '20px',
		wordWrap: 'break-word',
		padding: '10px',
		overflow: 'auto',
		'&::-webkit-scrollbar': {
			width: '20px',
		},

		'&::-webkit-scrollbar-thumb': {
			backgroundColor: 'darkgrey',
			borderRadius: '50px',
		},
	},
	tag: {
		position: 'absolute',
		right: '10px',
		top: '8px',
		background: 'tomato',
		padding: '3px 10px',
		borderRadius: '10px',
	},
}));

const CourseData = ({ pages, setIndex }) => {
	const classes = useStyles();
	const infoCon = useRef(null);
	const codeCon = useRef(null);

	useEffect(() => {
		infoCon.current.scrollTop = 0;
		// codeCon.current.initHighlightingOnLoad();
	}, []);

	return (
		<Swiper
			spaceBetween={50}
			pagination={{
				dynamicBullets: true,
			}}
			navigation={pages.length > 1 ? true : false}
			className={classes.page_con}
			ref={infoCon}
			onSlideChange={(e) => setIndex(e.activeIndex + 1)}
		>
			{pages.map((page) => (
				<SwiperSlide className={classes.pages}>
					<h4 className={classes.header}>{page.heading}</h4>
					<main className={classes.content}>{page.data}</main>
					{page?.code && (
						<pre className={classes.code}>
							<span className={classes.tag}>JS</span>
							<code ref={codeCon}>
								<SyntaxHighlighter
									className={classes.code}
									showLineNumbers={true}
									wrapLongLines={true}
									language='javascript'
									style={docco}
								>
									{page.code}
								</SyntaxHighlighter>
							</code>
						</pre>
					)}
					<footer className={classes.footer}>{page.info}</footer>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default CourseData;
