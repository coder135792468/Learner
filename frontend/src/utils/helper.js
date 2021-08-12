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

export { ValidateEmail, randomCompliment };
