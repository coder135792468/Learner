const code_coach = [
	//Even Number Code coach challenge
	{
		title: 'Even Number',
		level: 'Easy',
		description: `A Number Which is Divisble By 2 is Even Number`,
		input_format: `A Number which is odd or Even`,
		task: `Show that A Number is Even`,
		output_format: `If a Number is Even then it show "Even" OtherWise It show "Not Even"`,
		input_demo: 3,
		output_demo: 'Not Even',
		isSolved: false,
		code: `function isEven(input){
        // your code goes here
       
        
    }`,
		testCases: [
			{ run: 'isEven(2)', expected: 'Even', hidden: false },
			{ run: 'isEven(3)', expected: 'Not Even', hidden: false },
			{ run: 'isEven(6)', expected: 'Even', hidden: true },
		],
	},

	//Odd Number Code Coach Challenge

	{
		title: 'Odd Number',
		level: 'Easy',
		description: `A Number Which is not Divisble By 2 is Odd Number`,
		task: `Show that the number is Odd`,
		input_format: `A Number which is odd or Even`,
		output_format: `If a Number is Odd then it show "Odd" OtherWise It show "Not Odd"`,
		input_demo: 7,
		output_demo: 'Odd',
		isSolved: false,
		code: `function isOdd(input){
        // your code goes here
          
        
    }`,
		testCases: [
			{ run: 'isOdd(3)', expected: 'Odd', hidden: false },
			{ run: 'isOdd(8)', expected: 'Not Odd', hidden: false },
			{ run: 'isOdd(9)', expected: 'Odd', hidden: true },
		],
	},

	//Pig Latin Code Coach Challenge

	{
		title: 'Pig Latin',
		level: 'Medium',
		description: `You have two friends who are speaking Pig Latin to each other! Pig Latin is the same words in the same order except that you take the first letter of each word and put it on the end, then you add 'ay' to the end of that.`,
		task: `Your task is to take a sentence in English and turn it into the same sentence in Pig Latin! `,
		input_format: `A string of the sentence in English that you need to translate into Pig Latin. (no punctuation or capitalization)`,
		output_format: `A string of the same sentence in Pig Latin.`,
		input_demo: 'wow',
		output_demo: 'owway',
		isSolved: false,
		code: `function pigLatin(input){
        // your code goes here
        
    }`,
		testCases: [
			{
				run: "pigLatin('how are you')",
				expected: 'owhay reaay ouyay',
				hidden: false,
			},
			{
				run: "pigLatin('go to home')",
				expected: 'ogay otay omehay',
				hidden: false,
			},
			{
				run: "pigLatin('ive got it')",
				expected: 'veiay otgay tiay',
				hidden: true,
			},
			{ run: "pigLatin('cool')", expected: 'oolay', hidden: true },
		],
	},

	//Gotham City Code coach Problem

	{
		title: 'Gotham City',
		level: 'Easy',
		description: `You are a police officer, and you get a report of criminal activity! Should you go on your own, or should you call a superhero to help you fight the crime? If there are less than 5, you can handle this on your own, if there are 5-10, you will want to go with Batman for backup, and if there are more than 10, you should stay where it is safe and let Batman handle this on his own.`,
		task: `Determine whether you need to call backup based on the total number of criminals being reported.`,
		input_format: `An integer that represents the total number of criminals present at the scene.`,
		output_format: `A string that says 'I got this!', 'Help me Batman', or 'Good Luck out there!' depending on the scenario`,
		input_demo: '7',
		output_demo: 'Help me Batman',
		isSolved: false,
		code: `function gothamCity(input){
        // your code goes here
        
    }`,
		testCases: [
			{ run: 'gothamCity(1)', expected: 'I got this!', hidden: false },
			{ run: 'gothamCity(5)', expected: 'Help me Batman', hidden: false },
			{ run: 'gothamCity(2)', expected: 'I got this!', hidden: true },
			{ run: 'gothamCity(6)', expected: 'Help me Batman', hidden: true },
		],
	},

	//Secret Message Code coach Problem
	{
		title: 'Secret Message',
		level: 'Medium',
		description: `You are trying to send a secret message, and you've decided to encode it by replacing every letter in your message with its corresponding letter in a backwards version of the alphabet.`,
		task: `Create a program that replaces each letter in a message with its corresponding letter in a backwards version of the English alphabet.`,
		input_format: `A string of your message in its normal form.`,
		output_format: `A string of your message once you have encoded it (all lower case).`,
		input_demo: 'Hello World',
		output_demo: 'svool dliow',
		isSolved: false,
		code: `function secretMsg(input){
        // your code goes here
        
    }`,
		testCases: [
			{ run: "secretMsg('Sololearn')", expected: 'hlolovzim', hidden: false },
			{
				run: "secretMsg('Vegetable Pizza')",
				expected: 'evtvgzyov kraaz',
				hidden: false,
			},
			{ run: "secretMsg('World')", expected: 'dliow', hidden: true },
			{ run: "secretMsg('Hello')", expected: 'svool', hidden: true },
			{ run: "secretMsg('Pizza')", expected: 'kraaz', hidden: true },
		],
	},

	//Hallowen Candy Code Coach Problem

	{
		title: 'Hallowen Candy',
		level: 'Easy',
		description: `You go trick or treating with a friend and all but three of the houses that you visit are giving out candy. One house that you visit is giving out toothbrushes and two houses are giving out dollar bills. `,
		task: ``,
		input_format: `An integer (>=3) representing the total number of houses that you visited.`,
		output_format: `A percentage value rounded up to the nearest whole number.`,
		input_demo: '4',
		output_demo: '50',
		isSolved: false,
		code: `function hallowenCandy(input){
        // your code goes here
        
    }`,
		testCases: [
			{ run: 'hallowenCandy(3)', expected: '67', hidden: false },
			{ run: 'hallowenCandy(10)', expected: '20', hidden: true },
			{ run: 'hallowenCandy(4)', expected: '50', hidden: true },
		],
	},

	//Dega Vu Js Code coach Problem

	{
		title: 'Dega Vu',
		level: 'Hard',
		description: `You aren't paying attention and you accidentally type a bunch of random letters on your keyboard. You want to know if you ever typed the same letter twice, or if they are all unique letters.`,
		task: `If you are given a string of random letters, your task is to evaluate whether any letter is repeated in the string or if you only hit unique keys while you typing.`,
		input_format: `A string of random letter characters (no numbers or other buttons were pressed).`,
		output_format: `A string that says 'Deja Vu' if any letter is repeated in the input string, or a string that says 'Unique' if there are no repeats.
    `,
		input_demo: 'cooddddeeee',
		output_demo: 'Deja Vu',
		isSolved: false,
		code: `function degaVu(input){
        // your code goes here
        
    }`,
		testCases: [
			{ run: "degaVu('bbllam')", expected: 'Deja Vu', hidden: false },
			{ run: "degaVu('coder')", expected: 'Unique', hidden: false },
			{ run: "degaVu('booootttt')", expected: 'Deja Vu', hidden: true },
			{ run: "degaVu('got')", expected: 'Unique', hidden: true },
			{ run: "degaVu('gooootttt')", expected: 'Deja Vu', hidden: true },
		],
	},

	//Extra Trestial Js Code Coach Problem

	{
		title: 'Extra-Terrestrials',
		level: 'Easy',
		description: `You meet a group of aliens, and their language is just like English except that they say every word backwards. 
    How will you learn to communicate with them?`,
		task: `Take a word in English that you would like to say, and turn it into language that these aliens will understand.`,
		input_format: `A string of a word in English.`,
		output_format: `A string of the reversed word that represents the original word translated into alien language.`,
		input_demo: 'code',
		output_demo: 'edoc',
		isSolved: false,
		code: `function rverse(input){
        // your code goes here
        
    }`,
		testCases: [
			{ run: "rverse('ballon')", expected: 'nollab', hidden: false },
			{ run: "rverse('coder')", expected: 'redor', hidden: false },
			{ run: "rverse('sololearn')", expected: 'nraelolos', hidden: true },
			{ run: "rverse('got')", expected: 'log', hidden: true },
			{ run: "rverse('eatttt')", expected: 'ttttae', hidden: true },
		],
	},

	//Password Validator Js code Coach Problem

	{
		title: 'Password Validator',
		level: 'Hard',
		description: `You're interviewing to join a security team. They want to see you build a password evaluator for your technical interview to validate the input.`,

		task: `Write a program that takes in a string as input and evaluates it as a valid password. The password is valid if it has at a minimum 2 numbers, 2 of the following special characters ('!', '@', '#', '$', '%', '&', '*'), and a length of at least 7 characters.
    If the password passes the check, output 'Strong', else output 'Weak'.`,

		input_format: `A string representing the password to evaluate.
    `,

		output_format: `A string that says 'Strong' if the input meets the requirements, or 'Weak', if not.`,

		input_demo: 'Hello@$World19',
		output_demo: 'Strong',
		isSolved: false,
		code: `function validate(input){
        // your code goes here
        
    }`,
		testCases: [
			{ run: "validate('hello')", expected: 'Weak', hidden: false },
			{ run: "validate('coderCode$@89')", expected: 'Strong', hidden: false },
			{ run: "validate('12345678')", expected: 'Weak', hidden: true },
			{
				run: "validate('Sololearn&@&@&@&@12345678')",
				expected: 'Strong',
				hidden: true,
			},
		],
	},

	//Jungle Camping Js code Coach Problem

	{
		title: 'Jungle Camping',
		level: 'Easy',
		description: `You are camping alone out in the jungle and you hear some animals in the dark nearby. Based on the noise they make, determine which animals they are.`,

		task: `You are given the noises made by different animals that you can hear in the dark, evaluate each noise to determine which animal it belongs to. Lions say 'Grr', Tigers say 'Rawr', Snakes say 'Ssss', and Birds say 'Chirp'.`,
		input_format: `A string that represent the noises that you hear with a space between them.`,
		output_format: `A string that includes each animal that you hear with a space after each one. (animals can repeat)
    `,
		input_demo: 'Rawr Chirp Ssss',
		output_demo: 'Tiger Bird Snake',
		isSolved: false,
		code: `function jungle(input){
        // your code goes here
        
    }`,
		testCases: [
			{
				run: "jungle('Chirp Ssss Rawr')",
				expected: 'Bird Snake Tiger',
				hidden: false,
			},
			{ run: "jungle('Ssss')", expected: 'Snake', hidden: false },
			{ run: "jungle('Rawr Ssss')", expected: 'Tiger Snake', hidden: true },
		],
	},

	//Vowel Counter Js Code Coach Problem

	{
		title: 'Vowel Counter',
		level: 'Easy',
		description: `You are in an English class, your teacher tells the class that vowels are the glue that hold words and sentences together. 
    They want to make sure you understand the importance of vowels in a sentence.  
    You are given example sentences and are to give a total amount of vowels that are in each sentence.
    `,

		task: `Write a program that takes in a string as input, counts and outputs the number of vowels (A, E, I, O, U).`,

		input_format: `A string (letters can be both uppercase or lowercase).`,

		output_format: `A number which represents the total number of vowels in the string.
    `,
		input_demo: 'this is a sentence',
		output_demo: '6',
		isSolved: false,
		code: `function vowelCounter(input){
        // your code goes here
        
    }`,
		testCases: [
			{ run: "vowelCounter('coder')", expected: '2', hidden: false },
			{
				run: "vowelCounter('Sololearn is best')",
				expected: '6',
				hidden: false,
			},
			{ run: "vowelCounter('tiger')", expected: '2', hidden: true },
		],
	},

	//Fruit Bowl Js code Coach Problem

	{
		title: 'Fruit Bowl',
		level: 'Easy',
		description: `You have a bowl on your counter with an even number of pieces of fruit in it. Half of them are bananas, and the other half are apples. You need 3 apples to make a pie.`,

		task: `Your task is to evaluate the total number of pies that you can make with the apples that are in your bowl given to total amount of fruit in the bowl.
    `,

		input_format: `An integer that represents the total amount of fruit in the bowl.`,

		output_format: `An integer representing the total number of whole apple pies that you can make.
    `,
		input_demo: '26',
		output_demo: '4',
		isSolved: false,
		code: `function fruitBowl(input){
        // your code goes here
        
    }`,
		testCases: [
			{ run: 'fruitBowl(4)', expected: '0', hidden: false },
			{ run: 'fruitBowl(12)', expected: '2', hidden: false },
			{ run: 'fruitBowl(6)', expected: '1', hidden: true },
		],
	},

	//Security Js Code coach Problem

	{
		title: 'Security',
		level: 'Hard',
		description: `You are in an English class, your teacher tells the class that vowels are the glue that hold words and sentences together. 
    They want to make sure you understand the importance of vowels in a sentence.  
    You are given example sentences and are to give a total amount of vowels that are in each sentence.
    `,

		task: `Evaluate a given floor of the casino to determine if there is a guard between the money and the thief, if there is not, you will sound an alarm.`,

		input_format: `A string of characters that includes $ (money), T (thief), and G (guard), that represents the layout of the casino floor.  
    Space on the casino floor that is not occupied by either money, the thief, or a guard is represented by the character x.`,

		output_format: `A string that says 'ALARM' if the money is in danger or 'quiet' if the money is safe.
    `,
		input_demo: 'xxxxxGxx$xxxT',
		output_demo: 'ALARM',
		isSolved: false,
		code: `function security(input){
        // your code goes here
        
    }`,
		testCases: [
			{ run: "security('xxxxxGxx$xGxT')", expected: 'quiet', hidden: false },
			{ run: "security('xxxxxTxx$xxxG')", expected: 'ALARM', hidden: false },
			{ run: "security('Gxxxxxxx$xxxT')", expected: 'ALARM', hidden: true },
			{ run: "security('Gxxxxxxx$xGxT')", expected: 'quiet', hidden: true },
			{ run: "security('GxxxxGxx$xxxT')", expected: 'ALARM', hidden: true },
		],
	},

	//Land Ho! Js Code coach Problem

	{
		title: 'Land Ho!',
		level: 'Easy',
		description: `You are on a large ship and you put down anchor near a beautiful beach. There is a small boat ferrying passengers back and forth, and you get in line for it. How long will you have to wait to get to the beach? You know that 20 people can fit on the boat and each trip to shore takes 10 minutes each way.
    `,

		task: `Determine your wait time if you know the total number of people ahead of you in line.`,
		input_format: `An integer that represents the total number of people ahead of you in line.`,
		output_format: `An integer that represents the number of minutes that you will have to wait until you are standing on the beach.`,
		input_demo: '15',
		output_demo: '10',
		isSolved: false,
		code: `function landHo(input){
        // your code goes here
        
    }`,
		testCases: [
			{ run: 'landHo(1)', expected: '10', hidden: false },
			{ run: 'landHo(80)', expected: '90', hidden: false },
			{ run: 'landHo(15)', expected: '10', hidden: true },
		],
	},

	//Izzy The lgauna Js Code Coach Problem

	{
		title: 'Izzy lgauna',
		level: 'Easy',
		description: `Your pet Iguana has run away, and you found it up in a tree! It will come down right away if you brought the right snacks, but if you don't have enough, you will have to wait. You need 10 total snack points to bring it down. Lettuce is worth 5, Carrot is worth 4, Mango is worth 9, and Cheeseburger is worth 0.
    `,

		task: `Evaluate whether or not you have enough snack points to convince your iguana to come down.`,
		input_format: `Your input is a string that represents the snacks that you have. Snacks are separated by spaces, you can have any number of snacks, and they can repeat.
    `,
		output_format: `A string that says 'Come on Down!' if you have enough points, or 'Time to wait' if you do not.`,
		input_demo: 'Mango Cheeseburger Carrot',
		output_demo: 'Come on Down!',
		isSolved: false,
		code: `function izzy(input){
        // your code goes here
        
    }`,
		testCases: [
			{ run: "izzy('Cheeseburger')", expected: 'Time to wait', hidden: false },
			{
				run: "izzy('Carrot Carrot Carrot')",
				expected: 'Come on Down!',
				hidden: false,
			},
			{ run: "izzy('Mango')", expected: 'Time to wait', hidden: true },
		],
	},

	//Road Runner Js Code Coach Problem

	{
		title: 'Road Runner',
		level: 'Medium',
		description: `A coyote is chasing a roadrunner and they start out 50 feet apart. If you know how fast they are both traveling, and how far the roadrunner is from safety, determine whether or not the coyote is able to catch the roadrunner. 
    Both animals and the roadrunner's safe place are on a straight line.
    `,

		task: `Determine whether or not the roadrunner made it to safety.`,
		input_format: `Three integer values, the first value represents the distance the roadrunner is from safety, then the roadrunner's speed (feet/second) and then the coyote's speed (feet/second).
    `,
		output_format: `A string that says 'Meep Meep' if the roadrunner made it, or 'Yum' if the coyote caught up to the roadrunner.`,
		input_demo: '10 5 20',
		output_demo: 'Meep Meep',
		isSolved: false,
		code: `function run(input){
        // your code goes here
        
    }`,
		testCases: [
			{ run: "run('100 5 20')", expected: 'Yum', hidden: false },
			{ run: "run('10 5 20')", expected: 'Meep Meep', hidden: false },
			{ run: "run('5 5 20')", expected: 'Yum', hidden: true },
		],
	},

	//How Far? Js code coach Problem

	{
		title: 'How Far?',
		level: 'Medium',
		description: `You are walking from your house to a pond that is down your street. 
    How many blocks over will you have to walk until you get to the pond?
    `,

		task: `Evaluate how many blocks you will have to walk if you are given a representation of your street where H represents your house, P represents the pond, and every B represents a block in between the two.`,
		input_format: `A string of letters representing your house, the pond, and blocks on your street.
    `,
		output_format: `An integer value that represents the number of blocks between your house and the pond.`,
		input_demo: 'BBHBBBBPBBB',
		output_demo: '4',
		isSolved: false,
		code: `function far(input){
        // your code goes here
        
    }`,
		testCases: [
			{ run: "far('BBBBHBBPBB')", expected: '2', hidden: false },
			{ run: "far('BBHBBBBPBBB')", expected: '4', hidden: false },
			{ run: "far('HBBBBBPB')", expected: '5', hidden: true },
		],
	},
];

export default code_coach;
