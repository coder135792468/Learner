const quiz_data = [
	//OverView Quiz Data For Js Course
	{
		name: 'OverView Quiz',
		totalQuiz: 5,
		solvedQuiz: [],
		quizzes: [
			{
				question_data: {
					question: 'Chose the Correct Option',
					options: [
						{ data: 'JavaScript Is Server-Side Language Only' },
						{ data: 'JavaScript Is Used to Create Web Apps Only' },
						{ data: 'JavaScript Is Used to Create Intractive Web Elements' },
						{ data: 'None of these' },
					],
					answer: 2,
				},
			},
			{
				question_data: {
					question: 'Which Tag Contain the JavaScript Code?',
					options: [
						{ data: 'script' },
						{ data: 'style' },
						{ data: 'code' },
						{ data: 'design' },
					],
					answer: 0,
				},
			},

			{
				question_data: {
					question: 'Where the script tag typically placed?',
					options: [
						{ data: 'Before Creating Html Tag' },
						{ data: 'After Closing Html Tag' },
						{ data: 'In Both Body And Head Tag' },
						{ data: 'None of these' },
					],
					answer: 2,
				},
			},

			{
				question_data: {
					question: 'How Single Line Comment Looks Like?',
					options: [
						{ data: '**This is an Comment' },
						{ data: '//This is an Comment' },
						{ data: '<!--This is and Comment-->' },
						{ data: '##None of these' },
					],
					answer: 1,
				},
			},
			{
				question_data: {
					question:
						'Why Does the script tag is mostly Placed Before Closing the body tag?',
					options: [
						{ data: 'To make the Web Code Fully Loaded in Browser Window' },
						{ data: 'To Run with Standard' },
						{ data: 'This is only a Possible Way' },
						{ data: 'None of these' },
					],
					answer: 0,
				},
			},
		],
	},

	//Basic Quiz Data For Js Course

	{
		name: 'Basic Quiz',
		totalQuiz: 5,
		solvedQuiz: [],
		quizzes: [
			{
				question_data: {
					question: 'Which Character cannot be used in variable name?',
					options: [
						{ data: 'Special Symbols' },
						{ data: 'Letters' },
						{ data: 'Underscore Sign' },
						{ data: 'Numbers' },
					],
					answer: 0,
				},
			},
			{
				question_data: {
					question: 'A floating point number:',
					options: [
						{ data: 'is always smaller then 0' },
						{ data: 'is always positive' },
						{ data: 'is allowed to have a decimal place' },
						{ data: 'None of these' },
					],
					answer: 2,
				},
			},
			{
				question_data: {
					question: 'Increament and decrement are used for:',
					options: [
						{ data: 'to get the remainder of the division of two numbers' },
						{ data: 'Addung or Subtracting from a number' },
						{ data: "to change the sign of the number to'+' or '_'" },
						{ data: 'All of these' },
					],
					answer: 1,
				},
			},

			{
				question_data: {
					question: 'Logical AND(&&) returns true if:',
					options: [
						{ data: 'one of operands is true,but not both' },
						{ data: 'both operands are true' },
						{ data: 'if only one of the operands is true' },
						{ data: 'None of these' },
					],
					answer: 1,
				},
			},

			{
				question_data: {
					question: 'Logical NOT return true if',
					options: [
						{ data: 'the operand is true' },
						{ data: 'the operand is false' },
						{ data: 'none of these' },
						{ data: 'All of these' },
					],
					answer: 1,
				},
			},
		],
	},

	//Loop and Conditonal Statement Quizzes
	{
		name: 'Loop And Conditional Statement Quiz',
		totalQuiz: 7,
		solvedQuiz: [],
		quizzes: [
			{
				question_data: {
					question: 'What happens if the tested condition is false?',
					options: [
						{ data: 'Code in the braces is executed any way' },
						{ data: 'Code does nothing and moves to the next section' },
						{ data: 'Code execution will be stopped' },
						{ data: 'None of these' },
					],
					answer: 1,
				},
			},

			{
				question_data: {
					question: "The 'else' statement is created to :",
					options: [
						{
							data: 'Tells JavaScript To do something if the condition is false',
						},
						{ data: 'Test a new condition for true or false' },
						{ data: 'Ignore the condition testing' },
						{ data: 'None of these' },
					],
					answer: 0,
				},
			},

			{
				question_data: {
					question: 'Which keyword is used to end the else if statement?',
					options: [
						{ data: 'else' },
						{ data: 'stop' },
						{ data: 'end' },
						{ data: 'None of these' },
					],
					answer: 0,
				},
			},

			{
				question_data: {
					question: 'The Switch statement can be used to replace :',
					options: [
						{ data: 'comments' },
						{ data: 'multiple if else statements' },
						{ data: 'varible declaration' },
						{ data: 'None of these' },
					],
					answer: 1,
				},
			},

			{
				question_data: {
					question: "Classic 'for' loop consist of how many components",
					options: [{ data: '1' }, { data: '2' }, { data: '3' }, { data: '4' }],
					answer: 2,
				},
			},

			{
				question_data: {
					question: 'The result of condition statement is always:',
					options: [
						{ data: 'A String Value' },
						{ data: 'A Boolean Value' },
						{ data: 'A Numerical Value' },
						{ data: 'None of these' },
					],
					answer: 1,
				},
			},

			{
				question_data: {
					question: 'The Break Statement:',
					options: [
						{ data: 'Ends the Execution Of Loop' },
						{ data: 'Stops the whole script' },
						{ data: 'Ignores the current iteration and passes to the text' },
						{ data: 'Break the whole Code' },
					],
					answer: 0,
				},
			},
		],
	},

	//Js function Quizzes
	{
		name: 'Js Function Quiz',
		totalQuiz: 5,
		solvedQuiz: [],
		quizzes: [
			{
				question_data: {
					question: 'What is Function?',
					options: [
						{ data: 'Prefessions' },
						{ data: 'A reused code that can use again and agian' },
						{ data: 'Operators' },
						{ data: 'None of these' },
					],
					answer: 1,
				},
			},
			{
				question_data: {
					question: 'What do you need to create a Function Parameters?',
					options: [
						{ data: "Use 'var' keyword" },
						{ data: "Use 'params' keyword" },
						{ data: 'Write A Variable name in Parantheses' },
						{ data: 'None of these' },
					],
					answer: 2,
				},
			},
			{
				question_data: {
					question:
						'Which Parameter is used to separate function from each other?',
					options: [{ data: ';' }, { data: ',' }, { data: '#' }, { data: '&' }],
					answer: 1,
				},
			},
			{
				question_data: {
					question: "Where is 'return' statement placed?",
					options: [
						{ data: 'In End of function' },
						{ data: 'Out side the function' },
						{ data: 'In the starting of function' },
						{ data: 'No need to place it' },
					],
					answer: 0,
				},
			},
			{
				question_data: {
					question: 'How many parameters can be accepted by alert box?',
					options: [
						{ data: '3' },
						{ data: '1' },
						{ data: '4' },
						{ data: 'No Parameters' },
					],
					answer: 1,
				},
			},
		],
	},

	//Js Object Quizzes
	{
		name: 'Js Object Quiz',
		totalQuiz: 5,
		solvedQuiz: [],
		quizzes: [
			{
				question_data: {
					question:
						'In reference to an object , color, height , weight and name are all examples of :',
					options: [
						{ data: 'Variables' },
						{ data: 'Nouns' },
						{ data: 'Properties' },
						{ data: 'Methods' },
					],
					answer: 2,
				},
			},
			{
				question_data: {
					question:
						'What keyword is used for creating a instance of an object?',
					options: [
						{ data: 'make' },
						{ data: 'new' },
						{ data: 'var' },
						{ data: 'int' },
					],
					answer: 1,
				},
			},
			{
				question_data: {
					question:
						'What built-in property is used to count the number of characters in an object is property?',
					options: [
						{ data: 'write' },
						{ data: 'size' },
						{ data: 'width' },
						{ data: 'length' },
					],
					answer: 3,
				},
			},
			{
				question_data: {
					question: "The 'this' keyword in the method means :",
					options: [
						{ data: 'The name of webpage' },
						{ data: 'The current object' },
						{ data: 'The name of the given method' },
						{ data: 'None of these' },
					],
					answer: 1,
				},
			},
			{
				question_data: {
					question:
						'In order to use the objects  properties with a function, we use :',
					options: [
						{ data: 'The function name' },
						{ data: 'Just the name of Property' },
						{ data: "The 'this' keyword" },
						{ data: "The 'var' keyword" },
					],
					answer: 2,
				},
			},
		],
	},

	//Js Core-Object Quizzes
	{
		name: 'Js Core-Object Quiz',
		totalQuiz: 6,
		solvedQuiz: [],
		quizzes: [
			{
				question_data: {
					question:
						'What is the result of trying to reference an array member which does not exits ?',
					options: [
						{ data: 'null' },
						{ data: '0' },
						{ data: 'false' },
						{ data: 'undefined' },
					],
					answer: 3,
				},
			},
			{
				question_data: {
					question:
						'By entering var example = new Array(); we create an empty array which can be filled :',
					options: [
						{ data: 'anytime later' },
						{ data: 'never more' },
						{ data: 'just after it' },
						{ data: 'all of these' },
					],
					answer: 0,
				},
			},
			{
				question_data: {
					question: "'concat' method takes two arrays and ",
					options: [
						{ data: 'combines them in one new array' },
						{ data: 'compares their members' },
						{ data: 'output them to the screen' },
						{ data: 'It does nothings' },
					],
					answer: 0,
				},
			},
			{
				question_data: {
					question: 'In associative arrays , index numbers are replaced with :',
					options: [
						{ data: 'constants' },
						{ data: 'strings' },
						{ data: 'variables' },
						{ data: 'functions' },
					],
					answer: 1,
				},
			},
			{
				question_data: {
					question:
						'In Math Object , Which of the following constants does not exist ?',
					options: [
						{ data: 'Math.ABC' },
						{ data: 'Math.E' },
						{ data: 'Math.PI' },
						{ data: 'Math.ceil' },
					],
					answer: 0,
				},
			},
			{
				question_data: {
					question: 'What information results from creating a Date Object ?',
					options: [
						{ data: 'The date when the web page was hosted' },
						{ data: 'No empty String' },
						{ data: 'The current time and date' },
						{ data: 'All of these' },
					],
					answer: 2,
				},
			},
		],
	},

	//Js Dom Event Quizzes
	{
		name: 'Js Dom Event Quiz',
		totalQuiz: 5,
		solvedQuiz: [],
		quizzes: [
			{
				question_data: {
					question: 'What is DOM ?',
					options: [
						{ data: 'Document Object Model' },
						{ data: 'Document Orientation Model' },
						{ data: 'Definitive Object Model' },
						{ data: 'Disk Operating Model' },
					],
					answer: 0,
				},
			},
			{
				question_data: {
					question:
						'The type of function that executes when an event occurs is called ?',
					options: [
						{ data: 'Event Description' },
						{ data: 'Event Handler' },
						{ data: 'Event Function' },
						{ data: 'Event Name' },
					],
					answer: 1,
				},
			},
			{
				question_data: {
					question:
						'To create an animation relative to a container the position of attribute for the container should be set to :',
					options: [
						{ data: 'box' },
						{ data: 'absolute' },
						{ data: 'relative' },
						{ data: 'fixed' },
					],
					answer: 2,
				},
			},
			{
				question_data: {
					question:
						'For making paragraph click event first event to be handled first done by using :',
					options: [
						{ data: 'Handling' },
						{ data: 'Capturing' },
						{ data: 'Nothing' },
						{ data: 'Bubbling' },
					],
					answer: 3,
				},
			},
			{
				question_data: {
					question: 'Which function is used to stop setInterval ?',
					options: [
						{ data: 'StopTimer' },
						{ data: 'StopInterval' },
						{ data: 'ClearInterval' },
						{ data: 'ClearTimer' },
					],
					answer: 2,
				},
			},
		],
	},

	//Js ES6 Quizzes
	{
		name: 'ECMAScript 6 Quiz',
		totalQuiz: 3,
		solvedQuiz: [],
		quizzes: [
			{
				question_data: {
					question: 'Which of these are js variables ?',
					options: [
						{ data: 'let' },
						{ data: 'var' },
						{ data: 'const' },
						{ data: 'All of these' },
					],
					answer: 3,
				},
			},
			{
				question_data: {
					question:
						'Which of the following is not one of the new ES6 features?',
					options: [
						{ data: 'Hoisting' },
						{ data: 'Modules' },
						{ data: 'Template Literals' },
						{ data: 'Object Destructing' },
					],
					answer: 0,
				},
			},
			{
				question_data: {
					question: 'Which of these is not an ES6 variable ?',
					options: [
						{ data: 'let' },
						{ data: 'var' },
						{ data: 'const' },
						{ data: 'All of these' },
					],
					answer: 1,
				},
			},
		],
	},
];

export default quiz_data;
