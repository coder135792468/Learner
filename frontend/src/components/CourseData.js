import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import SwiperCore, { Pagination, Navigation } from 'swiper/core';
SwiperCore.use([Pagination, Navigation]);

const useStyles = makeStyles((theme) => ({
	page_con: {
		width: '100%',
		height: 'calc(100vh - 80px)',
		background: '#fff',
		borderRadius: '0 0 10px 10px',
		display: 'flex',
		justifyContent: 'center',
	},
	pages: {
		width: '100%',
		height: '100vh',
		color: '#000',
		overflow: 'auto',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	header: {
		textAlign: 'center',
	},
	content: {
		padding: '30px',
		background: '#efefef',
		borderRadius: '50px',
	},
	footer: {
		fontSize: '12px',
		background: 'rgb(220, 250, 0)',
		margin: '20px 0 40px 0',
		padding: '10px 20px',
		fontWeight: 'bold',
	},
	code: {
		position: 'relative',
		background: '#223',
		color: '#fff',
		borderRadius: '20px',
		margin: '20px',
		wordWrap: 'break-word',
		padding: '10px',
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
	return (
		<Swiper
			spaceBetween={50}
			navigation={pages.length > 1 ? true : false}
			className={classes.page_con}
			onSlideChange={(e) => setIndex(e.activeIndex + 1)}
		>
			{pages.map((page) => (
				<SwiperSlide className={classes.pages}>
					<h4 className={classes.header}>{page.heading}</h4>
					<main className={classes.content}>{page.data}</main>
					{page?.code && (
						<code>
							<pre className={classes.code}>
								<span className={classes.tag}>JS</span>
								{page.code}
							</pre>
						</code>
					)}
					<footer className={classes.footer}>{page.info}</footer>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default CourseData;
