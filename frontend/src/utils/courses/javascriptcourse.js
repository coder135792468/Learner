var js_intro_course = [
	{
		name: 'Introduction to Javascript',
		pages: [
			{
				heading: 'Introduction to Javascript',
				data: `JavaScript is one of the most popular programming languages on earth and is used to add interactivity to webpages, process data, as well as create various applications (mobile apps, desktop apps, games, and more)`,
				info: `Learning the fundamentals of a language will enable you to create the program you desire, whether client-side or server-side.`,
			},
		],
	},

	{
		name: 'Create Your First Javascript',
		pages: [
			{
				heading: 'Your First Javascript',
				data: `JavaScript Code can be placed in the HTML page's <body> and <head> sections.
    In the example below, we placed it within the <body> tag using script tag `,
				info: `Remember that the script, which is placed in the head section, will be executed before the <body> is rendered. If you want to get elements in the body, it's a good idea to place your script at the end of the body tag.`,
			},
			{
				heading: 'Formatting Text',
				data: `We Need to use document.write() for formatting text on webpage. The document.write() function writes a string into our HTML document. This function can be used to write text, HTML, or both`,
				info: `The document.write() method should be used only for testing. Other output mechanisms appear in the upcoming lessons.`,
				code: `document.write("Hello World")
         //Hello World  
         `,
			},
		],
	},

	{
		name: 'Adding Javascript to Web Page',
		pages: [
			{
				heading: 'Javascript in Head Tag',
				data: `You can place any number of scripts in an HTML document.
    Typically, the script tag is placed in the head of the HTML document`,
				info: `There is also a noscript tag. Its content will be shown if the client's browser doesn't support JS scripts.`,
			},
			{
				heading: 'Javascript in Body Tag',
				data: `Alternatively, include the JavaScript in the <body> tag.`,
				info: `It's a good idea to place scripts at the bottom of the <body> element.
    This can improve page load, because HTML display is not blocked by scripts loading.`,
			},
		],
	},

	{
		name: 'External Javascript',
		pages: [
			{
				heading: 'External Javascript',
				data: `External scripts are useful and practical when the same code is used in a number of different web pages.
    JavaScript files have the file extension .js.
    Below, we've created a new text file, and called it demo.js. `,
				info: `Using External Javascript make your code more readable and easy`,
			},
		],
	},

	{
		name: 'Comments In Javascript',
		pages: [
			{
				heading: 'Adding Comments',
				data: `Not all JavaScript statements are "executed".
          Code after a double slash //, or between /* and */, is treated as a comment.
    Comments are ignored, and are not executed.
    Single line comments use double slashes.`,
				info: `It's a good idea to make a comment about the logic of large functions to make your code more readable for others`,
				code: `//This is single Line Comment
        <br>/*This is Multiple Line comment*/`,
			},
		],
	},
	{
		name: 'Variables',
		pages: [
			{
				heading: 'Variable in Javascript',
				data: `Variables are containers for storing data values. The value of a variable can change throughout the program.
    Use the var keyword to declare a variable.
    There are some other rules to follow when naming your JavaScript variables:
    - You must not use any special symbols, like my#num, num%, etc.
    - Be sure that you do not use any of the following JavaScript reserved words.
    `,
				info: `JavaScript is case sensitive. For example, the variables lastName and lastname, are two different variables.`,
				code: `var x = 10;`,
			},
		],
	},
	{
		name: 'Data Types',
		pages: [
			{
				heading: 'Data Types in Javascript',
				data: `The term data type refers to the types of values with which a program can work. JavaScript variables can hold many data types, such as numbers, strings, arrays, and more.
    Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point, etc.
    `,
				info: `This variable can be easily changed to other types by assigning to it any other data type value, like num = 'some random string'.`,
			},
			{
				heading: 'String In Javascript',
				// eslint-disable-next-line
				data: `As strings must be written within quotes, quotes inside the string must be handled. The backslash (\) escape character turns special characters into string characters.
       The escape character   can also be used to insert other special characters into a string.
    These special characters can be added to a text string using the backslash sign. `,
				// eslint-disable-next-line

				info: `If you begin a string with a single quote, then you should also end it with a single quote. The same rule applies to double quotes. Otherwise, JavaScript will become confused.`,
				code: `var name = "Hello "+"Roni"<br>
         document.write(name); //Hello Roni`,
			},
		],
	},
	{
		name: 'Math Operators',
		pages: [
			{
				heading: `Arithmetic operators`,
				data: `Arithmetic operators perform arithmetic functions on numbers (literals or variables).`,
				info: `You can get the result of a string expression using the eval() function, which takes a string expression argument like eval("10 * 20 + 8") and returns the result. If the argument is empty, it returns undefined.`,
				code: `var x = 7 + 8; //15`,
			},
			{
				heading: `Division and Multiplication Operators`,
				data: `The / operator is used to perform division operations.
           The * operator is used to perform multiplication operators `,
				info: `Remember to handle cases where there could be a division by 0.`,
				code: `
            var x = 10 / 5;
             //2
             <br>
            var y = 10 * 3;
            //30
            `,
			},

			{
				heading: `Module Operators`,
				data: `Module Operators is used to return the reminder of the division(what is left over) `,
				info: `In JavaScript, the modulus operator is used not only on integers, but also on floating point numbers.`,
				code: `
            var x = 10 % 3;
             //1
             
            `,
			},

			{
				heading: `Increment and Decrement Operators`,
				data: `Increment++  
    The increment operator increments the numeric value of its operand by one. If placed before the operand, it returns the incremented value. If placed after the operand, it returns the original value and then increments the operand.
    Decrement -- 
    The decrement operator decrements the numeric value of its operand by one. If placed before the operand, it returns the decremented value. If placed after the operand, it returns the original value and then decrements the operand. `,
				info: `As in school mathematics, you can change the order of the arithmetic operations by using parentheses.
    Example: var x = (100 + 50) * 3;`,
				code: `
            var x = 10;<br>
            x++;//11
             <br>
            var y = 10;<br>
            y--;//9
            `,
			},
		],
	},

	{
		name: 'Assignment Operators',
		pages: [
			{
				heading: 'Assignment Operators',
				data: `Assignment operators assign values to JavaScript variables. `,
				info: `You can use multiple assignment operators in one line, such as x -= y += 9.`,
				code: `var x = 1;<br>
          x+=2;//x = 3
          `,
			},
		],
	},
	{
		name: 'Comparison Operators',
		pages: [
			{
				heading: 'Comparison Operators',
				data: `Comparison operators are used in logical statements to determine equality or difference between variables or values. They return true or false. 
    The equal to (==) operator checks whether the operands' values are equal. `,

				info: `You can check all types of data; comparison operators always return true or false.`,
				code: `var x = 10;<br>
          x==2;//false
          `,
			},
		],
	},
	{
		name: 'Logical Or Boolean Operators',
		pages: [
			{
				heading: 'Logical Operators',
				data: `Logical Operators, also known as Boolean Operators, evaluate the expression and return true or false.
    The table below explains the logical operators (AND, OR, NOT).
    1. && = return true if both value are true
    2. || = return true if one value is true
    3. ! = return true if value is false
     `,
				info: `You can check all types of data; comparison operators always return true or false.`,
			},

			{
				heading: 'Logical and Conditonal Operators',
				data: `For this expression to be true, both conditions must be true.
    - The first condition determines whether 4 is greater than 2, which is true. 
    - The second condition determines whether 10 is less than 15, which is also true. 
    Based on these results, the whole expression is found to be true.
    Conditional Operators
    Another JavaScript conditional operator assigns a value to a variable, based on some condition.
    `,
				info: `It allows you to connect as much conditions as you want`,
				code: `
            /*Logical Operators*/
            <br>
       document.write((4 > 2) && (10 < 15));
       <br>//true
       <br>
      /*Conditional Operators*/<br>
       document.write(4>2?"True":"False");
       <br>//True     
            
            `,
			},
		],
	},
	{
		name: 'String Operators',
		pages: [
			{
				heading: 'String Operators',
				data: `The most useful operator for strings is concatenation, represented by the + sign. 
    Concatenation can be used to build strings by joining together multiple strings, or by joining strings with other types: 
     `,
				info: `Numbers in quotes are treated as strings: "42" is not the number 42, it is a string that includes two characters, 4 and 2.`,
				code: `var msg = "Hello "+"World";<br>
         document.write(msg) //Hello World
          `,
			},
		],
	},

	{
		name: 'The If Statement',
		pages: [
			{
				heading: 'The If Statement',
				data: `It perform different actions based on different conditions.
    You can do this by using conditional statements in your code.
    Use if to specify a block of code that will be executed if a specified condition is true.`,
				info: `You can skip curly braces if your code under the condition contains only one command.`,
				code: `
         if(condition){<br>
              statements <br>    
         }<br>
          `,
			},
		],
	},
	{
		name: 'The else if else statement ',
		pages: [
			{
				heading: 'The else if statement',
				data: `The Below code says:
    - if course is equal to 1, output "HTML Tutorial";
    - else, if course is equal to 2, output "CSS Tutorial";
    - if none of the above condition is true, then output "JavaScript Tutorial";
    `,
				info: `Learning the fundamentals of a language will enable you to create the program you desire, whether client-side or server-side.`,
				code: `
          var course = 1<br>
    if (course == 1) {<br>
        document.write("HTML Tutorial");<br>
    } else if (course == 2) {<br>
        document.write("CSS Tutorial");
    <br>} else {<br>
        document.write("JavaScript Tutorial");<br>
    }<br>
    //Output : HTML Tutorial
          `,
			},
		],
	},
	{
		name: 'The if else if else statement',
		pages: [
			{
				heading: 'If else if else statement',
				data: `The final else block will be executed when none of the conditions is true.            
    Let's take the value of the course variable in our previous example. `,
				info: `The final else statement "ends" the else if statement and should be always written after the if and else if statements.`,
				code: `      
          var course = 3;<br>
    if (course == 1) {<br>
        document.write("HTML Tutorial");<br>
    } else if (course == 2) {<br>
        document.write("CSS Tutorial");<br>
    } else {<br>
        document.write("JavaScript Tutorial");<br>
    }<br>
          //Output : JavaScript Tutorial
          
          `,
			},
		],
	},
	{
		name: 'Switch statement',
		pages: [
			{
				heading: 'Switch Statement',
				data: `In cases when you need to test for multiple conditions, writing if else statements for each condition might not be the best solution. 
    The switch statement is used to perform different actions based on different conditions.
    The switch expression is evaluated once. The value of the expression is compared with the values of each case. If there is a match, the associated block of code is executed.
          `,
				info: `You can achieve the same result with multiple if...else statements, but the switch statement is more effective in such situations.`,
				code: `
     switch (expression) { <br>
      case n1: <br>
         statements<br>
         break;<br>
      case n2: <br>
         statements<br>
         break;<br>
      default: <br>
         statements<br>
    }<br>
          
          `,
			},
			{
				heading: `The Break Keyword`,
				data: `When JavaScript code reaches a break keyword, it breaks out of the switch block.
    This will stop the execution of more code and case testing inside the block.`,
				info: `Usually, a break should be put in each case statement.`,
			},
			{
				heading: `The default Keyword`,
				data: `The default keyword specifies the code to run if there is no case match.`,
				info: `The default block can be omitted, if there is no need to handle the case when no match is found.`,
				code: `
          var color ="yellow";<br>
    switch(color) {<br>
        case "blue": <br>
            document.write("This is blue.");<br>
            break;<br>
        case "red": <br>    
            document.write("This is red.");<br>
            break;<br>
        case "green": <br>
            document.write("This is green."); <br>   
            break;<br>
        case "orange": <br> 
            document.write("This is orange.");<br>    
            break;<br>
        default: <br>
            document.write("Color not found.");<br>
    }  <br>
    //Output : Color not found.
            
            
            `,
			},
		],
	},

	{
		name: 'For loop',
		pages: [
			{
				heading: 'Loop',
				data: `Loops can execute a block of code a number of times. They are handy in cases in which you want to run the same code repeatedly, adding a different value each time.
    JavaScript has three types of loops: for, while, and do while. 
    The for loop is commonly used when creating a loop.
    Statement 1 is executed before the loop (the code block) starts.
    Statement 2 defines the condition for running the loop (the code block).
    Statement 3 is executed each time after the loop (the code block) has been executed.
    `,
				info: `As you can see, the classic for loop has three components, or statements.`,
				code: `
          for (statement 1; statement 2; statement 3) {<br>
       code block to be executed<br>
    }<br>
          
          `,
			},
			{
				heading: `For Loop Part-1`,
				data: `
    The First example below creates a for loop that prints numbers 1 through 5.         
            In first Example, Statement 1 sets a variable before the loop starts (var i = 1).
    Statement 2 defines the condition for the loop to run (i must be less than or equal to 5).
    Statement 3 increases a value (i++) each time the code block in the loop has been executed
            `,
				info: `ES6 introduces other for loop types; you can learn about them in the ES6 course later.`,
				code: `
     //First Example Goes from here<br>
       for (var i=1; i<=5; i++) {<br>
        document.write(i + " ");<br>
    }   <br>
    //OutPut : 1 2 3 4 5  
            
            `,
			},
			{
				heading: `For Loop Part-2`,
				data: `If statement 2 returns true, the loop will start over again, if it returns false, the loop will end.
    Statement 2 is also optional.
    Statement 3 is used to change the initial variable. It can do anything, including negative increment (i--), positive increment (i = i + 15), or anything else.
    Statement 3 is also optional, and it can be omitted if you increment your values inside the loop. `,
				info: `If you omit statement 2, you must provide a break inside the loop. Otherwise, the loop will never end.`,
				code: `
     var i = 0;<br>
    for (; i < 10; ) {<br>
        document.write(i);<br>
        i++;<br>
    }<br>
            `,
			},
		],
	},

	{
		name: 'While loop',
		pages: [
			{
				heading: 'While Loop Part-1',
				data: `The while loop repeats through a block of code, as long as a specified condition is true.
    `,
				info: `The condition can be any conditional statement that returns true or false.`,
				code: `
          while(condition){<br>
              code block<br>
          }<br>
          `,
			},
			{
				heading: `While Loop Part-2`,
				data: `The loop will continue to run as long as i is less than, or equal to, 10. Each time the loop runs, it will increase by 1.
    This will output the values from 0 to 10. `,
				info: `Be careful writing conditions. If a condition is always true, the loop will run forever.`,
				code: `
    var i=0;<br>
    while (i<=10) {<br>
        document.write(i + " ");<br>
        i++;<br>
    }<br>
            `,
			},
			{
				heading: `While Loop Part-3`,
				data: `If you forget to increase the variable used in the condition, the loop will never end. 
    `,
				info: `Make sure that the condition in a while loop eventually becomes false.`,
			},
		],
	},

	{
		name: 'do while loop',
		pages: [
			{
				heading: 'Do While Statement',
				data: `The do...while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, and then it will repeat the loop as long as the condition is true.
    `,
				info: `The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested.`,
				code: `
         //Syntax <br>
         do {<br>
       code block<br>
    }<br>
    while (condition);<br><br>
         
         //Example<br> 
    var i=20;<br>
    do {  <br>
        document.write(i + " ");<br>
        i++;  <br>
    }<br>
    while (i<=25); <br>     
          `,
			},
		],
	},

	{
		name: 'Break and continue',
		pages: [
			{
				heading: 'Break Statement',
				data: `The break statement "jumps out" of a loop and continues executing the code after the loop.`,
				info: `You can use the return keyword to return some value immediately from the loop inside of a function. This will also break the loop.`,
				code: `
          for (i = 0; i <= 10; i++) {<br>
        if (i == 5) {<br>
            break; <br>
        }<br>
        document.write(i + " ");<br>
    }<br>
          `,
			},
			{
				heading: `Continue Statement`,
				data: `The continue statement breaks only one iteration in the loop, and continues with the next iteration.`,
				info: `The value 5 is not printed, because continue skips that iteration of the loop.`,
				code: `
     for (i = 0; i <= 10; i++) {<br>
        if (i == 5) {<br>
            continue;<br>
        }<br>
        document.write(i + " ");<br>
    }<br>
            `,
			},
		],
	},

	{
		name: 'User Defined Function',
		pages: [
			{
				heading: 'Javascript Function',
				data: `A JavaScript function is a block of code designed to perform a particular task.
    The main advantages of using functions:
    Code reuse: Define the code once, and use it many times.
    Use the same code many times with different arguments, to produce different results.`,
				info: `A JavaScript function is executed when "something" invokes, or calls, it.`,
			},
			{
				heading: `Defining a Function`,
				data: `To define a JavaScript function, use the function keyword, followed by a name, followed by a set of parentheses ().
    The code to be executed by the function is placed inside curly brackets {}.`,
				info: `Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).`,
				code: `
            function name() {   <br> 
      //code to be executed<br>
    }<br>
            `,
			},
			{
				heading: `Calling a Function`,
				data: `To execute the function, you need to call it.
    To call a function, start with the name of the function, then follow it with the arguments in parentheses.
    `,
				info: `Always remember to end the statement with a semicolon after calling the function.You can also call a function using this syntax: myFunction.call(). The difference is that when calling in this way, you're passing the 'this' keyword to a function. You'll learn about it later.`,
				code: `
         function myName() {   <br> 
      //code to be executed<br>
    }<br>
       myName();//Function is called 
            `,
			},
		],
	},

	{
		name: 'Function Parameters',
		pages: [
			{
				heading: 'Function Parameters Part-1',
				data: `Functions can take parameters. 
    Function parameters are the names listed in the function's definition.
    `,
				info: `As with variables, parameters should be given names, which are separated by commas within the parentheses.`,
				code: `
          //Syntax <br>
         functionName(param1,param2,param3){<br>
             //some code<br>
         }<br>
          `,
			},
			{
				heading: `Using Parameters`,
				data: `This function takes in one parameter, which is called name. When calling the function, provide the parameter's value (argument) inside the parentheses. 
    `,
				info: `Function arguments are the real values passed to (and received by) the function.`,
				code: `
            function sayHello(name) {<br>
        alert("Hi, " + name);<br>
    }<br><br>
    sayHello("David");<br>
            `,
			},
			{
				heading: `Function Parameters Part-2`,
				data: `You can define a single function, and pass different parameter values (arguments) to it.`,
				info: `This will execute the function's code each time for the provided argument.`,
				code: `
    function sayHello(name) {<br>
        alert("Hi, " + name);<br>
    }<br>
    sayHello("David");<br>
    sayHello("Sarah");<br>
    sayHello("John");<br> 
            `,
			},
		],
	},

	{
		name: 'User Multiple Parameters and Functions',
		pages: [
			{
				heading: 'Multiple Parameters Part-1',
				data: `You can define multiple parameters for a function by comma-separating them. `,
				info: `The example above defines the function mult to take two parameters.`,
				code: `
         function mult(x,y){<br>
          //some code<br>   
         } <br>
          `,
			},
			{
				heading: `Multiple Parameters Part-2`,
				data: `The parameters are used within the function's definition.`,
				info: `Function parameters are the names listed in the function definition`,
				code: `
            function sayHello(name, age) {<br>
      document.write( name + " is " + age + " years old.");<br>
    }<br>
            `,
			},
			{
				heading: `Multiple Parameters Part-3`,
				data: `When calling the function, provide the arguments in the same order in which you defined them.`,
				info: `If you pass more arguments than are defined, they will be assigned to an array called arguments. They can be used like this: arguments[0], arguments[1], etc.`,
				code: `
            function sayHello(name, age) {<br>
        document.write( name + " is " + age + " years old.");<br>
    }<br>
    <br>
    sayHello("John", 20)<br>
            `,
			},
			{
				heading: `Multiple Parameters Part-4`,
				data: `After defining the function, you can call it as many times as needed. 
    JavaScript functions do not check the number of arguments received.`,
				info: `If a function is called with missing arguments (fewer than declared), the missing values are set to undefined, which indicates that a variable has not been assigned a value.`,
			},
		],
	},

	{
		name: 'The Return Statement',
		pages: [
			{
				heading: 'Function Return Part-1',
				data: `A function can have an optional return statement. It is used to return a value from the function. 
    This statement is useful when making calculations that require a result.
    `,
				info: `When JavaScript reaches a return statement, the function stops executing.`,
			},
			{
				heading: `Function Return Part-2`,
				data: `Use the return statement to return a value.
    For example, let's calculate the product of two numbers, and return the result.`,
				info: `If you do not return anything from a function, it will return undefined.`,
				code: `
         function myFunction(a, b) {<br>
        return a * b;<br>
    }<br>
    var x = myFunction(5, 6);<br> 
    document.write(x);<br>
         `,
			},
			{
				heading: `Function Return Part-3`,
				data: `Another Example :-`,
				info: `The document.write command outputs the value returned by the function, which is the sum of the two parameters.`,
				code: `
         function addNumbers(a, b) {<br>
        var c = a+b;<br>
        return c;<br>
    }<br>
    document.write( addNumbers(40, 2) );<br>
         `,
			},
		],
	},

	{
		name: 'Alert,Prompt and Confirm',
		pages: [
			{
				heading: 'Alert Box',
				data: `JavaScript offers three types of popup boxes, the Alert, Prompt, and Confirm boxes.
    Alert Box
    An alert box is used when you want to ensure that information gets through to the user.
    When an alert box pops up, the user must click OK to proceed.
    The alert function takes a single parameter, which is the text displayed in the popup box.`,
				info: `Be careful when using alert boxes, as the user can continue using the page only after clicking OK.`,
				code: `
       alert("Hello World"); 
         `,
			},
			{
				heading: `Prompt Box`,
				data: `A prompt box is often used to have the user input a value before entering a page.
    When a prompt box pops up, the user will have to click either OK or Cancel to proceed after entering the input value.
    If the user clicks OK, the box returns the input value. If the user clicks Cancel, the box returns null.
    The prompt() method takes two parameters. 
    - The first is the label, which you want to display in the text box.
    - The second is a default string to display in the text box (optional).`,
				info: `When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value. Do not overuse this method, because it prevents the user from accessing other parts of the page until the box is closed`,
				code: `
       var name = prompt("Enter your name");<br>
       alert(name);
            `,
			},
			{
				heading: `Confirm Box`,
				data: `A confirm box is often used to have the user verify or accept something.
    When a confirm box pops up, the user must click either OK or Cancel to proceed.
    If the user clicks OK, the box returns true. If the user clicks Cancel, the box returns false.`,
				info: `Do not overuse this method, because it also prevents the user from accessing other parts of the page until the box is closed.`,
				code: `
           var result = confirm("Do you really want to leave this page?");<br>
    if (result == true) {<br>
        alert("Thanks for visiting");<br>
    }<br>
    else {<br>
        alert("Thanks for staying with us");<br>
    }<br> 
            `,
			},
		],
	},

	{
		name: 'Introducing Object',
		pages: [
			{
				heading: 'Javascript Object',
				data: `JavaScript variables are containers for data values. Objects are variables too, but they can contain many values.
    Think of an object as a list of values that are written as name:value pairs, with the names and the values separated by colons.`,
				info: `JavaScript objects are containers for named values.`,
				code: `
         var person = {<br>
     name: "John", age: 31, <br>
     favColor: "green", height: 183<br>
    }; <br>
          `,
			},
			{
				heading: `Object properties`,
				data: `You can access object properties in two ways.
      This example demonstrates how to access the age of our person object.
     JavaScript's built-in length property is used to count the number of characters in a property or string.`,
				info: `Objects are one of the core concepts in JavaScript.`,
				code: `
           objectName.propertyName<br>
    //or<br>
    objectName['propertyName']<br><br><br>
    //First <br>
    var person = {<br>
        name: "John", age: 31,<br> 
        favColor: "green", height: 183<br>
    };<br>
    var x = person.age;<br>
    var y = person['age'];<br>
    document.write(x);<br>
    document.write(y);<br><br><br>
    //Second<br>
    var course = {name: "JS", lessons: 41};<br>
    document.write(course.name.length);<br>
           `,
			},
			{
				heading: `Object Methods`,
				data: `An object method is a property that contains a function definition.
    Use the following syntax to access an object method.
    As you already know, document.write() outputs data. The write() function is actually a method of the document object. 
    `,
				info: `Methods are functions that are stored as object properties.`,
				code: `
           //Syntax<br>
    objectName.methodName()<br><br>
    //Code<br>
    document.write("This is some text");<br>
           `,
			},
		],
	},

	{
		name: 'Create Your Own Object',
		pages: [
			{
				heading: 'The Object Constructor',
				data: `In the previous lesson, we created an object using the object literal (or initializer) syntax.
    This allows you to create only a single object.
    Sometimes, we need to set an "object type" that can be used to create a number of objects of a single type.
    The standard way to create an "object type" is to use an object constructor function. 
    The above function (person) is an object constructor, which takes parameters and assigns them to the object properties.       
          `,
				info: `The this keyword refers to the current object.
    Note that this is not a variable. It is a keyword, and its value cannot be changed.`,
				code: `
         //Initilize Syntax
        var person = {<br>
    name: "John", age: 42, favColor: "green"<br>
    };<br>
    <br>
    //Constructor <br>
    function person(name, age, color) {<br>
      this.name = name;<br>
      this.age = age;<br>
      this.favColor = color;<br>
    }<br>
         `,
			},
			{
				heading: `Creating Objects Part-1`,
				data: `Once you have an object constructor, you can use the new keyword to create new objects of the same type.`,
				info: `p1 and p2 are now objects of the person type. Their properties are assigned to the corresponding values.`,
				code: `
    function person(name, age, color) {<br>
        this.name = name;<br>
        this.age = age;<br>
        this.favColor = color;<br>
    }<br>
    <br>
    var p1 = new person("John", 42, "green");<br>
    var p2 = new person("Amy", 21, "red");<br>
    <br>
    document.write(p1.age); <br>
    document.write(p2.name);<br>
           `,
			},
			{
				heading: `Creating Objects Part-2`,
				data: `
     Consider the Following Example:- 
    Access the object's properties by using the dot syntax, as you did before. 
    `,

				info: `Understanding the creating of Objects in essential`,
				code: `
           function person (name, age) {<br>
        this.name = name;<br>
        this.age = age;<br>
    }<br>
    var John = new person("John", 25);<br>
    var James = new person("James", 21);<br>
    <br>
    document.write(John.age);<br>
           `,
			},
		],
	},

	{
		name: 'Object Initialization',
		pages: [
			{
				heading: 'Object Initialization',
				data: `Use the object literal or initializer syntax to create single objects.`,
				info: `Objects consist of properties, which are used to describe an object. Values of object properties can either contain primitive data types or other objects.`,
				code: `
          var John = {name: "John", age: 25};<br>
    var James = {name: "James", age: 21};<br>
          `,
			},
			{
				heading: `Using Object initializer`,
				data: `Spaces and line breaks are not important. An object definition can span multiple lines.
    No matter how the object is created, the syntax for accessing the properties and methods does not change.       
           `,
				info: `Don't forget about the second accessing syntax: John['age'].`,
				code: `
          var John = {<br>
        name: "John",<br>
        age: 25<br>
    };<br>
    var James = {<br>
        name: "James",<br>
        age: 21
    };<br>
    <br>
    document.write(John.age);<br> 
           `,
			},
		],
	},

	{
		name: 'Adding Object Methods',
		pages: [
			{
				heading: 'Methods Part-1',
				data: `Methods are functions that are stored as object properties. 
    Use the following syntax to create an object method.
    A method is a function, belonging to an object. It can be referenced using the this keyword.
    The this keyword is used as a reference to the current object, meaning that you can access the objects properties and methods using it.
    Defining methods is done inside the constructor function.
    In the example above, we have defined a method named changeName for our person, which is a function, that takes a parameter name and assigns it to the name property of the object. 
    this.name refers to the name property of the object.
    `,
				info: `The changeName method changes the object's name property to its argument.`,
				code: `
          //Syntax<br>
    methodName = function() { code lines }<br>
    <br>
    <br>
    //Example<br>
    function person(name, age) {<br>
        this.name = name; <br> 
        this.age = age;<br>
        this.changeName = function (name) {<br>
            this.name = name;<br>
        }<br>
    }<br>
    <br>
    var p = new person("David", 21);<br>
    p.changeName("John");<br>
    <br>
    document.write(p.name);<br>      
          `,
			},
			{
				heading: `Methods Part-2`,
				data: `You can also define the function outside of the constructor function and associate it with the object.
    As you can see, we have assigned the object's yearOfBirth property to the bornYear function.
    The this keyword is used to access the age property of the object, which is going to call the method.
    `,
				info: `Note that it's not necessary to write the function's parentheses when assigning it to an object.`,
				code: `
       function person(name, age) {<br>
      this.name= name; <br> 
      this.age = age;<br>
      this.yearOfBirth = bornYear;<br>
    }<br>
    function bornYear() {<br>
      return 2016 - this.age;<br>
    }    <br>
           `,
			},
			{
				heading: `Methods Part-3`,
				data: `Call method as usual`,
				info: `Call the method by the property name you specified in the constructor function, rather than the function name.`,
				code: `
        function person(name, age) {<br>
        this.name= name;<br>
        this.age = age;<br>
        this.yearOfBirth = bornYear;<br>
    }<br>
    function bornYear() {<br>
        return 2016 - this.age;<br>
    }<br>
    <br>
    var p = new person("A", 22);<br>
    <br>
    document.write(p.yearOfBirth());<br>         
           `,
			},
		],
	},

	{
		name: 'Array',
		pages: [
			{
				heading: 'Arrays in Javascript',
				data: `Arrays store multiple values in a single variable. 
    To store three course names, you need three variables.
    But what if you had 500 courses? The solution is an array.
    `,
				info: `This syntax declares an array named courses, which stores three values, or elements.`,
				code: `
         var courses = new Array("HTML", "CSS", "JS"); 
          `,
			},
			{
				heading: `Accessing in arrays Part-1`,
				data: `You refer to an array element by referring to the index number written in square brackets.
    This statement accesses the value of the first element in courses and changes the value of the second element. `,
				info: `[0] is the first element in an array. [1] is the second. Array indexes start with 0.`,
				code: `var courses = new Array("HTML", "CSS", "JS"); <br>
    var course = courses[0]; // HTML<br>
    courses[1] = "C++"; //Changes the second element
    <br>
    `,
			},
			{
				heading: `Accessing in arrays Part-2`,
				data: `Attempting to access an index outside of the array, returns the value undefined.`,
				info: `Our courses array has just 3 elements, so the 10th index, which is the 11th element, does not exist (is undefined).`,
				code: `
         var courses = new Array("HTML", "CSS", "JS");<br>
    document.write(courses[10]);<br>
         `,
			},
		],
	},

	{
		name: 'Other Ways to create Arrays',
		pages: [
			{
				heading: 'Creating Arrays Part-1',
				data: `You can also declare an array, tell it the number of elements it will store, and add the elements later.`,
				info: `An array is a special type of object.
    An array uses numbers to access its elements, and an object uses names to access its members.`,
				code: `
    var courses = new Array(3);<br>
    courses[0] = "HTML";<br>
    courses[1] = "CSS";<br>
    courses[2] = "JS";<br><br>
    document.write(courses[2]);<br> 
          `,
			},
			{
				heading: `Creating Arrays Part-2`,
				data: `
    JavaScript arrays are dynamic, so you can declare an array and not pass any arguments with the Array() constructor. You can then add the elements dynamically.
    Array literal:-
    For greater simplicity, readability, and execution speed, you can also declare arrays using the array literal syntax.
    `,
				info: `You can access and modify the elements of the array using the index number, as you did before.
    The array literal syntax is the recommended way to declare arrays.`,
				code: `
    var courses = new Array();<br>
    courses[0] = "HTML";<br>
    courses[1] = "CSS";<br>
    courses[2] = "JS";<br>
    courses[3] = "C++";<br>
    document.write(courses[2]);<br>        
    <br>//Array literal<br>
    var courses = ["HTML", "CSS", "JS"];<br> 
    document.write(courses[2]);<br>
            `,
			},
		],
	},

	{
		name: 'Array Methods and Properties',
		pages: [
			{
				heading: 'The length Property',
				data: `JavaScript arrays have useful built-in properties and methods.
    An array's length property returns the number of it's elements.`,
				info: `The length property is always one more than the highest array index.
    If the array is empty, the length property returns 0.`,
				code: `
          var courses = ["HTML", "CSS", "JS"];<br>
    document.write(courses.length);<br>
          `,
			},
			{
				heading: `Combining Property`,
				data: `JavaScript's concat() method allows you to join arrays and create an entirely new array.
    The courses array that results contains 4 elements (HTML, CSS, JS, C++).
            `,
				info: `
    The concat operation does not affect the c1 and c2 arrays - it returns the resulting concatenation as a new array.`,
				code: `
            var c1 = ["HTML", "CSS"];<br>
    var c2 = ["JS", "C++"];<br>
    var courses = c1.concat(c2);<br>
    document.write(courses[2]);<br>
            `,
			},
		],
	},

	{
		name: 'Associative Array',
		pages: [
			{
				heading: 'Associative arrays Part-1',
				data: `While many programming languages support arrays with named indexes (text instead of numbers), called associative arrays, JavaScript does not.
    However, you still can use the named array syntax, which will produce an object.
    Now, person is treated as an object, instead of being an array.
    The named indexes "name" and "age" become properties of the person object.
    `,
				info: `As the person array is treated as an object, the standard array methods and properties will produce incorrect results. For example, person.length will return 0.`,
				code: `
          var person = []; //empty array<br>
    person["name"] = "John";<br>
    person["age"] = 46;<br>
    document.write(person["age"]);<br>
          `,
			},
			{
				heading: `Associative arrays Part-2`,
				data: `Remember that JavaScript does not support arrays with named indexes.
    In JavaScript, arrays always use numbered indexes.
    It is better to use an object when you want the index to be a string (text).
    Use an array when you want the index to be a number.
    `,
				info: `If you use a named index, JavaScript will redefine the array to a standard object.`,
			},
		],
	},

	{
		name: 'The Math Object',
		pages: [
			{
				heading: 'Math Object Part-1',
				data: `The Math object allows you to perform mathematical tasks, and includes several properties. `,
				info: `Math has no constructor. There's no need to create a Math object first.`,
				code: `
        document.write(Math.PI);<br>
    //Outputs 3.141592653589793 <br> 
          `,
			},
			{
				heading: `Math Object Methods`,
				data: `The Math object contains a number of methods that are used for calculations.
            
    For example, the following will calculate the square root of a number.
    `,
				info: `To get a random number between 1-10, use Math.random(), which gives you a number between 0-1. Then multiply the number by 10, and then take Math.ceil() from it:  Math.ceil(Math.random() * 10).`,
				code: `
           var number = Math.sqrt(4);<br> 
    document.write(number);<br>
    //Outputs 2 <br>
            `,
			},
			{
				heading: `Math Object Part-2`,
				data: `Let's create a program that will ask the user to input a number and alert its square root.`,
				info: `Math is a handy object. You can save a lot of time using Math, instead of writing your own functions every time.`,
				code: `
            var n = prompt("Enter a number", "");<br>
    var answer = Math.sqrt(n);<br>
    alert("The square root of " + n + " is " + answer);<br>
            `,
			},
		],
	},

	{
		name: 'The Date Object',
		pages: [
			{
				heading: 'Set Interval',
				data: `The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
    It will continue calling the function until clearInterval() is called or the window is closed.
    This will call the myAlert function every 3 seconds (1000 ms = 1 second).
    `,
				info: `Write the name of the function without parentheses when passing it into the setInterval method. `,
				code: `
          function myAlert() {<br>
        alert("Hi");<br>
    }<br>
    setInterval(myAlert, 3000);<br>
    `,
			},
			{
				heading: `Date Object`,
				data: `The Date object enables us to work with dates.
    A date consists of a year, a month, a day, an hour, a minute, a second, and milliseconds.
    Using new Date(), create a new date object with the current date and time.
    The other ways to initialize dates allow for the creation of new date objects from the specified date and time.
    `,
				info: `JavaScript counts months from 0 to 11. January is 0, and December is 11.
    Date objects are static, rather than dynamic. The computer time is ticking, but date objects don't change, once created.`,
				code: `
        //Syntax <br>
         var d = new Date();<br>
    //d stores the current date and time<br>
    new Date(milliseconds)<br>
    new Date(dateString)<br>
    new Date(year, month, day, hours, minutes, seconds, milliseconds)<br>
    <br>
    //Example <br>
    var d1 = new Date(86400000); 
    <br>
    //Fri Jan 02 2015 10:42:00<br>
    var d2 = new Date("January 2, 2015 10:42:00");
    <br>
    //Sat Jun 11 1988 11:42:00<br>
    var d3 = new Date(88,5,11,11,42,0,0);<br>
         `,
			},
			{
				heading: `Date Methods`,
				data: `When a Date object is created, a number of methods make it possible to perform operations on it.
    We declared a function printTime(), which gets the current time from the date object, and prints it to the screen.
    We then called the function once every second, using the setInterval method.  
    Lets create a program that print Current time every second   
         `,
				info: `The innerHTML property sets or returns the HTML content of an element.
    In our case, we are changing the HTML content of our document's body. This overwrites the content every second, instead of printing it repeatedly to the screen.`,
				code: `
         function printTime() {<br>
        var d = new Date();<br>
        var hours = d.getHours();<br>
        var mins = d.getMinutes();<br>
        var secs = d.getSeconds();<br>
        document.body.innerHTML = hours+":"+mins+":"+secs;<br>
    }<br>
    setInterval(printTime, 1000);<br>
         
         `,
			},
		],
	},
	{
		name: 'What is DOM?',
		pages: [
			{
				heading: 'The DOM',
				data: `When you open any webpage in a browser, the HTML of the page is loaded and rendered visually on the screen.
    To accomplish that, the browser builds the Document Object Model of that page, which is an object oriented model of its logical structure.
    The DOM of an HTML document can be represented as a nested set of boxes `,
				info: `JavaScript can be used to manipulate the DOM of a page dynamically to add, delete and modify elements.`,
			},
			{
				heading: `The document Object`,
				data: `There is a predefined document object in JavaScript, which can be used to access all elements on the DOM.
    In other words, the document object is the owner (or root) of all objects in your webpage.
    So, if you want to access objects in an HTML page, you always start with accessing the document object.
    As body is an element of the DOM, we can access it using the document object and change the content of the innerHTML property.`,
				info: `The innerHTML property can be used on almost all HTML elements to change its content.`,
			},
		],
	},

	{
		name: 'Selecting Elements',
		pages: [
			{
				heading: 'Selecting Elements Part-1',
				data: `All HTML elements are objects. And as we know every object has properties and methods.
    The document object has methods that allow you to select the desired HTML element.
    These three methods are the most commonly used for selecting HTML elements
    In the example below, the getElementById method is used to select the element with id="demo" and change its content
    `,
				info: `The example above assumes that the HTML contains an element with id="demo", for example <div id="demo"></div>.`,
				code: `
        //Syntax<br>
     //finds element by id<br>
    document.getElementById(id)<br><br> 
    //finds elements by class name<br>
    document.getElementsByClassName(name) <br>
    <br>
    //finds elements by tag name<br>
    document.getElementsByTagName(name) <br>  
    <br>
    //Example<br> 
    var elem = document.getElementById("demo");<br>
    elem.innerHTML = "Hello World!";<br>
          `,
			},
			{
				heading: `Selecting Elements Part-2`,
				data: `The getElementsByClassName() method returns a collection of all elements in the document with the specified class name.
    For example, if our HTML page contained three elements with class="demo", the following code would return all those elements as an array
    Similarly, the getElementsByTagName method returns all of the elements of the specified tag name as an array.
    The following example gets all paragraph elements of the page and changes their content `,
				info: `We used the length property of the array to loop through all the selected elements in the above example.`,
				code: `
     var arr =  document.getElementsByClassName("demo");<br>
    //accessing the second element<br>
    arr[1].innerHTML = "Hi";<br>
         <br> 
    /*accessing all the p tags
    ( consider there are three p tags)*/<br>
    var arr = document.getElementsByTagName("p");<br>
    for (var x = 0; x < arr.length; x++) {<br>
      arr[x].innerHTML = "Hi there";<br>
    }<br>
           
           `,
			},
			{
				heading: `Working With DOM`,
				data: `
    Each element in the DOM has a set of properties and methods that provide information about their relationships in the DOM:
    element.childNodes returns an array of an element's child nodes.
    element.firstChild returns the first child node of an element.
    element.lastChild returns the last child node of an element.
    element.hasChildNodes returns true if an element has any child nodes, otherwise false.
    element.nextSibling returns the next node at the same tree level.
    element.previousSibling returns the previous node at the same tree level.
    element.parentNode returns the parent node of an element.
    We can, for example, select all child nodes of an element and change their content.
    Consider we have two pages inside in a div whose class is demo.
    Lets try to access the p tags       
           `,
				info: `The code above changes the text of both paragraphs to "new text".`,
				code: `
       var a = document.getElementById("demo");<br>
         var arr = a.childNodes;<br>
         for(var x=0;x<arr.length;x++) {<br>
           arr[x].innerHTML = "new text";<br>
         } <br>    
           `,
			},
		],
	},
	{
		name: 'Selecting Elements',
		pages: [
			{
				heading: 'Changing Attribute',
				data: `Once you have selected the element(s) you want to work with, you can change their attributes. 
    As we have seen in the previous lessons, we can change the text content of an element using the innerHTML property.
    Similarly, we can change the attributes of elements.
    For example, we can change the src attribute of an image`,
				info: `Practically all attributes of an element can be changed using JavaScript. `,
				code: `
        var el = document.getElementById("myimg");
    el.src = "apple.png";<br>
          `,
			},
			{
				heading: `Changing Style`,
				data: `The style of HTML elements can also be changed using JavaScript.
    All style attributes can be accessed using the style object of the element. 
    `,
				info: `All CSS properties can be set and modified using JavaScript. Just remember, that you cannot use dashes (-) in the property names: these are replaced with camelCase versions, where the compound words begin with a capital letter. 
    For example: the background-color property should be referred to as backgroundColor.`,
				code: `
    var x = document.getElementById("demo");<br>
      x.style.color = "6600FF";<br>
      x.style.width = "100px";<br>
           
           `,
			},
		],
	},
	{
		name: 'Adding or Removing Elements',
		pages: [
			{
				heading: 'Creating Elements',
				data: `Use the following methods to create new nodes:
    element.cloneNode() clones an element and returns the resulting node.
    document.createElement(element) creates a new element node. 
    document.createTextNode(text) creates a new text node.
    This will create a new text node, but it will not appear in the document until you append it to an existing element with one of the following methods:
    element.appendChild(newNode) adds a new child node to an element as the last child node.
    element.insertBefore(node1, node2) inserts node1 as a child before node2.
    `,
				info: `This creates a new paragraph and adds it to the existing div element on the page. `,
				code: `
      //creating a new paragraph<br>
      var p = document.createElement("p");<br>
      var node = document.createTextNode("Some new text");<br>
      //adding the text to the paragraph<br>
      p.appendChild(node);<br>
    <br>
    <br>  
      //adding the paragraph to the body<br>
      document.body.appendChild(p);<br>
          `,
			},
			{
				heading: `Removing Elements`,
				data: `To remove an HTML element, you must select the parent of the element and use the removeChild(node) method.`,
				info: `An alternative way of achieving the same result would be the use of the parentNode property to get the parent of the element we want to remove:
    var child = document.getElementById("p1");
    child.parentNode.removeChild(child);`,
				code: `
    //This rempves the id= p1 from class= demo<br>
    var parent = document.getElementById("demo");<br>
    var child = document.getElementById("p1");<br>
    parent.removeChild(child);        <br>
            `,
			},
			{
				heading: `Replacing Elements`,
				data: `To replace an HTML element, the element.replaceChild(newNode, oldNode) method is used.`,
				info: `The code above creates a new paragraph element that replaces the existing p1 paragraph.`,
				code: `
     var p = document.createElement("p");<br>
    var node = document.createTextNode("This is new");<br>
    p.appendChild(node);<br>
    <br>
    var parent = document.getElementById("demo");<br>
    var child = document.getElementById("p1");<br>
    parent.replaceChild(p, child);<br>
    `,
			},
		],
	},
	{
		name: 'Creating Animation',
		pages: [
			{
				heading: 'Animation Part-1',
				data: `Now that we know how to select and change DOM elements, we can create a simple animation.
    Let's create a simple HTML page with a box element that will be animated using JS.
    Our box element is inside a container element. Note the position attribute used for the elements: the container is relative and the box is absolute. This will allow us to create the animation relative to the container.
    We will be animating the red box to make it move to the right side of the container.
    <div id="container">
      <div id="box"> </div>
     </div>
    <style>
                #container {
        width: 200px;
        height: 200px;
        background: green;
        position: relative;
    }
    #box {
        width: 50px;
        height: 50px;
        background: red;
        position: absolute;
    }
     </style>        
            
     `,
				info: `You need to be familiar with CSS to better understand the code provided.`,
			},
			{
				heading: `Animation Part-2`,
				data: `To create an animation, we need to change the properties of an element at small intervals of time. We can achieve this by using the setInterval() method, which allows us to create a timer and call a function to change properties repeatedly at defined intervals (in milliseconds).
    This code creates a timer that calls a move() function every 500 milliseconds. 
    Now we need to define the move() function, that changes the position of the box.         
            `,
				info: `The move() function increments the left property of the box element by one each time it is called.`,
				code: `
    // starting position<br>
    var pos = 0; <br>
    //our box element<br>
    var box = document.getElementById("box");<br>
    <br>
    function move() {<br>
      pos += 1;<br>
      box.style.left = pos+"px"; //px = pixels<br>
    }<br>
    setInterval(move,100);<br>
            `,
			},
			{
				heading: `Animation Part-3`,
				data: `The following code defines a timer that calls the move() function every 10 milliseconds:
    However, this makes our box move to the right forever. To stop the animation when the box reaches the end of the container, we add a simple check to the move() function and use the clearInterval() method to stop the timer.
    When the left attribute of the box reaches the value of 150, the box reaches the end of the container, based on a container width of 200 and a box width of 50.
    The final code: 
    `,
				info: `Congratulations, you have just created your first JavaScript animation!`,
				code: `
           //calling the function in window.onload to make sure the HTML is loaded<br>
    window.onload = function() {<br>
         var pos = 0; <br>
        //our box element<br>
        var box = document.getElementById('box');<br>
        var t = setInterval(move, 10);<br>
      <br>
        function move() {<br>
            if(pos >= 150) {<br>
                clearInterval(t);<br>
            }<br>
            else {<br>
                pos += 1;<br>
                box.style.left = pos+'px';<br>
            }<br>
        }<br>
    };<br> 
            `,
			},
		],
	},
	{
		name: 'Handling Events',
		pages: [
			{
				heading: `Events Part-1`,
				data: `You can write JavaScript code that executes when an event occurs, such as when a user clicks an HTML element, moves the mouse, or submits a form.
    When an event occurs on a target element, a handler function is executed. 
    Common HTML events include.       
            `,
				info: `Corresponding events can be added to HTML elements as attributes. 
    `,
			},
			{
				heading: `Event Handling`,
				data: `Let's display an alert popup when the user clicks a specified button:
               
    <button onclick="show();">Click Me</button>
    Event handlers can be assigned to elements:
    <button id="demo">Click Me</button>
    `,
				info: `You can attach events to almost all HTML elements.`,
				code: `
    function show(){<br>
        alert("hello");<br> 
    } <br>  
        <br>  /*Event handler*/<br>
    //calling the function in window.onload to make sure the HTML is loaded<br>
    window.onload = function() {<br>
        var x = document.getElementById('demo');<br>
        x.onclick = function () {<br>
            document.body.innerHTML = Date();<br>
        }<br>
    };<br>      
          `,
			},
			{
				heading: `Events Part-2`,
				data: `The onload and onunload events are triggered when the user enters or leaves the page. These can be useful when performing actions after the page is loaded. 
    Similarly, the window.onload event can be used to run code after the whole page is loaded. 
    The onchange event is mostly used on textboxes. The event handler gets called when the text inside the textbox changes and focus is lost from the element.
    <input type="text" id="name" onchange="change()">      
          `,
				info: `It’s important to understand events, because they are an essential part of dynamic web pages.`,
				code: `
    function change() {<br>
     var x = document.getElementById("name");<br>
     x.value= x.value.toUpperCase();<br>
    }
    <br>      
          `,
			},
			{
				heading: `Event Listeners`,
				data: `
      The addEventListener() method attaches an event handler to an element without overwriting existing event handlers. You can add many event handlers to one element.
    You can also add many event handlers of the same type to one element, i.e., two "click" events.
    The first parameter is the event's type (like "click" or "mousedown").
    The second parameter is the function we want to call when the event occurs.
    The third parameter is a Boolean value specifying whether to use event bubbling or event capturing. This parameter is optional, and will be described in the next lesson.
    `,
				info: `Internet Explorer version 8 and lower do not support the addEventListener() and removeEventListener() methods. However, you can use the document.attachEvent() method to attach event handlers in Internet Explorer.`,
				code: `element.addEventListener(event, function, useCapture);`,
			},
		],
	},
	{
		name: 'Event Propagation',
		pages: [
			{
				heading: `Capturing Vs Bubbling`,
				data: `
    The addEventListener() method allows you to specify the propagation type with the "useCapture" parameter.
    The default value is false, which means the bubbling propagation is used; when the value is set to true, the event uses the capturing propagation.
    `,
				info: `This is particularly useful when you have the same event handled for multiple elements in the DOM hierarchy.`,
				code: `
    //Capturing propagation<br>
    elem1.addEventListener("click", myFunction, true); <br>
    <br>
    //Bubbling propagation<br>
    elem2.addEventListener("click", myFunction, false);<br>        
            `,
			},
		],
	},

	{
		name: 'Creating an Image Slider',
		pages: [
			{
				heading: `Image Slider Part-1`,
				data: `Now we can create a sample image slider project. The images will be changed using "Next" and "Prev" buttons.
    Now, let’s create our HTML, which includes an image and the two navigation buttons: 
    Lets Define Our sample images in array:
    HTML Code: 
    <div>
      <button> Prev </button>
      <img id="slider" src="http://www.sololearn.com/uploads/slider/1.jpg" 
        width="200px" height="100px"/>
      <button> Next </button>
    </div>
    `,
				info: `We are going to use three sample images that we have uploaded to our server. You can use any number of images.`,
				code: `
    var images = [<br>
       "http://www.sololearn.com/uploads/slider/1.jpg", <br>
       "http://www.sololearn.com/uploads/slider/2.jpg", <br>
       "http://www.sololearn.com/uploads/slider/3.jpg"<br>
    ];  <br>      
            `,
			},
			{
				heading: `Image Slider Part-2`,
				data: `Now we need to handle the Next and Prev button clicks and call the corresponding functions to change the image.
    Lets take the HTML code in the prvs code and add event listener on the button .
    The num variable holds the current image. The next and previous button clicks are handled by their corresponding functions, which change the source of the image to the next/previous image in the array.
    `,
				info: `Now we have functionality Image Slider`,
				code: `
     var images = [<br>
       "http://www.sololearn.com/uploads/slider/1.jpg", <br>
       "http://www.sololearn.com/uploads/slider/2.jpg", <br>
       "http://www.sololearn.com/uploads/slider/3.jpg"<br>
    ];  <br>       
         var num = 0;<br>
    function next() {<br>
        var slider = document.getElementById('slider');<br>
        num++;<br>
        if(num >= images.length) {<br>
            num = 0;<br>
        }<br>
        slider.src = images[num];<br>
    }
    function prev() {
        var slider = document.getElementById('slider');
        num--;
        if(num < 0) {
            num = images.length-1;
        }
        slider.src = images[num];
    }   
            `,
			},
		],
	},
	{
		name: 'Form Validation',
		pages: [
			{
				heading: `Form Validation`,
				data: `HTML5 adds some attributes that allow form validation. For example, the required attribute can be added to an input field to make it mandatory to fill in.
    More complex form validation can be done using JavaScript.
    The form element has an onsubmit event that can be handled to perform validation.
    For example, let's create a form with two inputs and one button. The text in both fields should be the same and not blank to pass the validation.
    We need following Lines of code for that:
    <form onsubmit="" method="post">
        Number: <input type="text" name="num1" id="num1" /><br />
        Repeat: <input type="text" name="num2" id="num2" /><br />
        <input type="submit" value="Submit" />
    </form>
    `,
				info: `The form will not get submitted if its onsubmit event returns false. `,
				code: `
    // You need to add validate() func in the form tag for form validation <br><br>
      function validate() {<br>
        var n1 = document.getElementById('num1');<br>
        var n2 = document.getElementById('num2');<br>
        if(n1.value != '' && n2.value != '') {<br>
            if(n1.value == n2.value) {<br>
                return true;<br>
            }<br>
        }<br>
        alert("The values should be equal and not blank");<br>
        return false;<br>
    }<br>   
         `,
			},
		],
	},
	{
		name: 'Intro to ES6',
		pages: [
			{
				heading: `ECMAScript 6`,
				data: `ECMAScript (ES) is a scripting language specification created to standardize JavaScript.
    The Sixth Edition, initially known as ECMAScript 6 (ES6) and later renamed to ECMAScript 2015, adds significant new syntax for writing complex applications, including classes and modules, iterators and for/of loops, generators, arrow functions, binary data, typed arrays, collections (maps, sets and weak maps), promises, number and math enhancements, reflection, and proxies.
    In other words, ES6 is a superset of JavaScript (ES5). The reason that ES6 became so popular is that it introduced new conventions and OOP concepts such as classes.`,
				info: `In this module, we cover the most important additions to ES6. 
    So, let's jump right in!`,
			},
		],
	},

	{
		name: 'ES6 Variables',
		pages: [
			{
				heading: 'var and let',
				data: `The type of declaration used depends on the necessary scope. Scope is the fundamental concept in all programming languages that defines the visibility of a variable.
    var & let
    Unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope, let allows you to declare variables that are limited in scope to the block, statement, or expression in which they are used. 
    In this case, the name variable is accessible only in the scope of the if statement because it was declared as let.
    To demonstrate the difference in scope between var and let, consider this example:`,
				info: `let is not subject to Variable Hoisting, which means that let declarations do not move to the top of the current execution context.`,
				code: `
       function varTest() {<br>
        var x = 1;<br>
        if (true) {<br>
            var x = 2;  // same variable<br>
            console.log(x);  // 2<br>
        }<br>
        console.log(x);  // 2<br>
    }<br>
    <br>
    function letTest() {<br>
        let x = 1;<br>
        if (true) {<br>
            let x = 2;  // different variable<br>
            console.log(x);  // 2<br>
        }<br>
        console.log(x);  // 1<br>
    }<br>
    <br>
    varTest();<br>
    letTest();<br>     
          `,
			},
			{
				heading: `const`,
				data: `const variables have the same scope as variables declared using let. The difference is that const variables are immutable - they are not allowed to be reassigned.
    For example, the following generates an exception:`,
				info: `const is not subject to Variable Hoisting too, which means that const declarations do not move to the top of the current execution context.
    Also note that ES6 code will run only in browsers that support it. Older devices and browsers that do not support ES6 will return a syntax error.`,
				code: `const a = "Hello";<br>
          a = "Bye" <br>`,
			},
		],
	},

	{
		name: 'Loops and Function in ES6',
		pages: [
			{
				heading: `Loops in ES6`,
				data: `The for...in loop is intended for iterating over the enumerable keys of an object.
        
    During each iteration the val variable is assigned the corresponding element in the list.
    The for...of loop works for other iterable objects as well, including strings
        
        `,
				info: `The for...in loop should NOT be used to iterate over arrays because, depending on the JavaScript engine, it could iterate in an arbitrary order. Also, the iterating variable is a string, not a number, so if you try to do any math with the variable, you'll be performing string concatenation instead of addition.
        
    The for...of loop also works on the newly introduced collections (Map, Set, WeakMap, and WeakSet). We will learn about them in the upcoming lessons.
    Note that ES6 code will run only in browsers that support it. Older devices and browsers that do not support ES6 will return a syntax error.     
      `,
				code: `
    let obj = {a: 1, b: 2, c: 3};<br>
    for (let v in obj) {<br>
        console.log(v);<br>
    }<br> <br><br><br>
    for (let ch of "Hello") {<br>
        console.log(ch);<br>
    }<br> 
        `,
			},
			{
				heading: `Functions in ES6`,
				data: `ES6 introduces a new syntax for writing functions. 
    This new syntax is quite handy when you just need a simple function with one argument.
    You can skip typing function and return, as well as some parentheses and braces
    The syntax is very useful for inline functions. For example, let's say we have an array, and for each element of the array we need to execute a function. We use the forEach method of the array to call a function for each element
    `,
				info: `The code is shorter and looks pretty nice, doesn't it? :)`,
				code: `
            //First Example<br>
          var add=()=>{<br>
     console.log(2+3);<br>
    } <br><br>
    //Second Example<br> 
    var arr = [2, 3, 7, 8];<br>
    <br>
    arr.forEach(function(el) {<br>
        console.log(el * 2);<br>
    });<br>
            `,
			},
			{
				heading: `Default Parameters in ES6`,
				data: `In ES6, we can put the default values right in the signature of the functions.`,
				info: `Default value expressions are evaluated at function call time from left to right. This also means that default expressions can use the values of previously-filled parameters.`,
				code: `       
    <br>/*<br>
    function test(a, b = 3, c = 42) {<br>
      return a + b + c;<br>
    }<br>
    console.log(test(5));<br>
    */<br>
    <br>
    // Full ES6 equivalent<br>
    const test = (a, b = 3, c = 42) => a + b + c;<br>
    console.log(test(5));<br> 
            
            `,
			},
		],
	},
	{
		name: 'ES6 Objects',
		pages: [
			{
				heading: `ES6 Object`,
				data: `JavaScript variables can be Object data types that contain many values called properties. 
    An object can also have properties that are function definitions called methods for performing actions on the object. 
    ES6 introduces shorthand notations and computed property names that make declaring and using objects easier to understand.
    The new method definition shorthand does not require the colon (:) or function keyword, as in the grow function of the tree object declaration.
    You can also use a property value shorthand when initializing properties with a variable by the same name. 
    For example, properties height and health are being initialized with variables named height and health.
    When creating an object by using duplicate property names, the last property will overwrite the prior ones of the same name.
    `,
				info: `Duplicate property names generated a SyntaxError in ES5 when using strict mode. However, ES6 removed this limitation.`,
				code: `//First Example <br>
    let tree = {<br>
        height: 10,<br>
        color: 'green',<br>
        grow() { <br>
            this.height += 2;<br>
        }<br>
    };<br>
    <br>
    tree.grow();<br>
    console.log(tree.height); // 12<br><br>
    let height = 5;<br>
    let health = 100;<br>
    <br>
    let athlete = {<br>
        height, // height: height,<br>
        health // health: health<br>
    };<br>
    <br>
    console.log(athlete.height); // 5<br>`,
			},
			{
				heading: `Computed Properties Names`,
				data: `With ES6, you can now use computed property names. Using the square bracket notation [], we can use an expression for a property name, including concatenating strings. This can be useful in cases where we want to create certain objects based on user data (e.g. id, email, and so on).
    `,
				info: `It is very useful when you need to create custom objects based on some variables.`,
			},
			{
				heading: `Object.assign() in ES6`,
				data: `ES6 adds a new Object method assign() that allows us to combine multiple sources into one target to create a single new object. 
    Object.assign() is also useful for creating a duplicate of an existing object.
    Here we used Object.assign() where the first parameter is the target object you want to apply new properties to. 
    Every parameter after the first will be used as sources for the target. There are no limitations on the number of source parameters. However, order is important because properties in the second parameter will be overridden by properties of the same name in third parameter, and so on.
    In the example, we used a new object {} as the target and used two objects as sources.
    `,
				info: `Try changing the order of second and third parameters to see what happens to the result.`,
				code: `
        let person = {<br>
        name: 'Jack',<br>
        age: 18,<br>
        sex: 'male'<br>
    };<br>
    let student = {<br>
        name: 'Bob',<br>
        age: 20,<br>
        xp: '2'<br>
    };<br>
    <br>
    let newStudent = Object.assign({}, person, student);<br>
    <br>
    console.log(newStudent.name); // Bob<br>
    console.log(newStudent.age); // 20<br>
    console.log(newStudent.sex); // male<br>
    console.log(newStudent.xp); // 2<br>
        `,
			},
		],
	},

	{
		name: 'Object Destructuring',
		pages: [
			{
				heading: `Arrays Destructuring In ES6`,
				data: `The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. 
    ES6 has added a shorthand syntax for destructuring an array.
    The following example demonstrates how to unpack the elements of an array into distinct variables: `,
				info: `Try it Yourself on Any CodePlayGround / Editor`,
				code: `
         let arr = ['1', '2', '3'];<br><br>
    let [one, two, three] = arr;<br>
    console.log(one); // 1<br>
    console.log(two); // 2<br>
    console.log(three); // 3<br>
    `,
			},
			{
				heading: `Object Destructuring in ES6`,
				data: `Similar to Array destructuring, Object destructuring unpacks properties into distinct variables.
     
    The () with a semicolon (;) at the end are mandatory when destructuring without a declaration. However, you can also do it as follows where the () are not required 
    You can also assign the object to new variable names.
    lets us understand the following things by examples:
     `,
				info: `We can assign without declaration, but there are some syntax requirements`,
				code: `
        <br>//First Example<br>
    var o = {h: 42, s: true};<br>
    var {h: foo, s: bar} = o;<br>
    <br>
    //console.log(h); // Error<br>
    console.log(foo); // 42<br>
    <br>
    //Second Example<br>
    var obj = {id: 42, name: "Jack"};<br>
    let {id = 10, age = 20} = obj;<br>
    console.log(id); // 42<br>
    console.log(age); // 20<br>    
            `,
			},
		],
	},

	{
		name: 'Rest And Spread',
		pages: [
			{
				heading: `ES6 Rest Parameters`,
				data: `Prior to ES6, if we wanted to pass a variable number of arguments to a function, we could use the arguments object, an array-like object, to access the parameters passed to the function.
    For example, let's write a function that checks if an array contains all the arguments passed.
    We can pass any number of arguments to the function and access it using the arguments object.
    While this does the job, ES6 provides a more readable syntax to achieve variable number of parameters by using a rest parameter.
    The ...nums parameter is called a rest parameter. It takes all the "extra" arguments passed to the function. The three dots (...) are called the Spread operator.
     `,
				info: `Only the last parameter of a function may be marked as a rest parameter. If there are no extra arguments, the rest parameter will simply be an empty array; the rest parameter will never be undefined.`,
				code: `
         
    function containsAll(arr) {<br>
        for (let k = 1; k < arguments.length; k++) {<br>
            let num = arguments[k];<br>
            if (arr.indexOf(num) === -1) {<br>
                return false;<br>
            }<br>
        }<br>
        return true;<br>
    }<br>
    let x = [2, 4, 6, 7];<br>
    console.log(containsAll(x, 2, 4, 7));<br>
    console.log(containsAll(x, 6, 4, 9));<br>
    <br><br><br>
    <br><br>
    function containsAll(arr, ...nums) {<br>
        for (let num of nums) {<br>
            if (arr.indexOf(num) === -1) {<br>
                return false;<br>
            }<br>
        }<br>
        return true;<br>
    }<br>
    <br>
    let x = [2, 4, 6, 7];<br>
    console.log(containsAll(x, 2, 4, 7));<br>
    console.log(containsAll(x, 6, 4, 9));<br>   
            `,
			},
			{
				heading: `The Spread Operator`,
				data: `This operator is similar to the Rest Parameter, but it has another purpose when used in objects or arrays or function calls (arguments).
    Spread in function calls
    It is common to pass the elements of an array as arguments to a function.
    Spread in array literals
    Before ES6, we used the following syntax to add an item at middle of an array.
    You can use methods such as push, splice, and concat, for example, to achieve this in different positions of the array. However, in ES6 the spread operator lets us do this more easily
    Spread in object literals
    In objects it copies the own enumerable properties from the provided object onto a new object.
    `,
				info: `Shallow cloning or merging objects is possible with another operator called Object.assign().`,
				code: `
           //Spread In Array Literal<br>
    var arr = ["One", "Two", "Five"];<br>
    <br>
    arr.splice(2, 0, "Three");<br>
    arr.splice(3, 0, "Four");<br>
    console.log(arr);<br>
    let newArr = ['Three', 'Four'];<br> 
    let arr = ['One', 'Two', ...newArr, 'Five'];<br>
    console.log(arr);<br><br><br><br><br>
    //Spread In Object Literal<br>
    const obj1 = { foo: 'bar', x: 42 };<br>
    const obj2 = { foo: 'baz', y: 5 };<br>
    const clonedObj = { ...obj1 }; // { foo: "bar", x: 42 }<br>
    const mergedObj = { ...obj1, ...obj2 }; // { foo: "baz", x: 42, y: 5 }<br>  
            `,
			},
		],
	},
	{
		name: 'ES6 Classes',
		pages: [
			{
				heading: `Classes in ES6`,
				data: `In this lesson we'll explain how to create a class that can be used to create multiple objects of the same structure. 
    A class uses the keyword class and contains a constructor method for initializing.`,
				info: `Class Declarations are not hoisted while Function Declarations are. If you try to access your class before declaring it, ReferenceError will be returned`,
				code: `
     class Rectangle {<br>
        constructor(height, width) {<br>
            this.height = height;<br>
            this.width = width;<br>
      }<br>
    }<br>
    <br>
    const square = new Rectangle(5, 5);<br>
    const poster = new Rectangle(2, 3); <br>
    console.log(square.height);<br> 
           `,
			},
			{
				heading: `Classes Method in ES6 Part-1`,
				data: `ES6 introduced a shorthand that does not require the keyword function for a function assigned to a method's name. One type of class method is the prototype method, which is available to objects of the class.`,
				info: `In the code above, area is a getter, calcArea is a method.
    `,
				code: `
    class Rectangle {<br>
      constructor(height, width) {<br>
        this.height = height;<br>
        this.width = width;<br>
      }<br>
      <br>
      get area() {<br>
        return this.calcArea();<br>
      }<br>
    <br>
      calcArea() {<br>
        return this.height * this.width;<br>
      }<br>
    }<br>
    <br>
    const square = new Rectangle(5, 5);<br>
    <br>
    console.log(square.area); // 25<br> 
          `,
			},
			{
				heading: `Classes Method in ES6 Part-2`,
				data: `Another type of method is the static method, which cannot be called through a class instance. Static methods are often used to create utility functions for an application.
    `,
				info: `As you can see, the static distance method is called directly using the class name, without an object.`,
				code: `
     class Point {<br>
      constructor(x, y) {<br>
        this.x = x;<br>
        this.y = y;<br>
      }<br>
    <br>
      static distance(a, b) {<br>
        const dx = a.x - b.x;<br>
        const dy = a.y - b.y;<br>
    <br>
        return Math.hypot(dx, dy);<br>
      }<br>
    }<br>
    <br>
    const p1 = new Point(7, 2);<br>
    const p2 = new Point(3, 8);<br>
    <br>
    console.log(Point.distance(p1, p2));<br>     
          `,
			},
			{
				heading: `Inheritance in ES6`,
				data: `The extends keyword is used in class declarations or class expressions to create a child of a class. The child inherits the properties and methods of the parent.`,
				info: `If there is a constructor present in the subclass, it needs to first call super() before using this. Also, the super keyword is used to call parent's methods.
    `,
				code: `
    class Animal {<br>
      constructor(name) {<br>
        this.name = name;<br>
      }<br>
      speak() {<br>
        console.log(this.name + ' makes a noise.');
      }<br>
    }<br>
    <br>
    class Dog extends Animal {
      speak() {<br>
        console.log(this.name + ' barks.');<br>
      }<br>
    }<br>
    let dog = new Dog('Rex');<br>
    dog.speak(); // Rex barks.<br> 
          `,
			},
		],
	},
	{
		name: 'ES6 Maps And Sets',
		pages: [
			{
				heading: `Maps in ES6`,
				data: `A Map object can be used to hold key/value pairs. A key or value in a map can be anything (objects and primitive values). 
    The syntax new Map([iterable]) creates a Map object where iterable is an array or any other iterable object whose elements are arrays (with a key/value pair each).
    An Object is similar to Map but there are important differences that make using a Map preferable in certain cases:
    1) The keys can be any type including functions, objects, and any primitive.
    2) You can get the size of a Map.
    3) You can directly iterate over Map.
    4) Performance of the Map is better in scenarios involving frequent addition and removal of key/value pairs.
    The size property returns the number of key/value pairs in a map.
    Methods
    set(key, value) Adds a specified key/value pair to the map. If the specified key already exists, value corresponding to it is replaced with the specified value.
    get(key) Gets the value corresponding to a specified key in the map. If the specified key doesn't exist, undefined is returned.
    has(key) Returns true if a specified key exists in the map and false otherwise.
    delete(key) Deletes the key/value pair with a specified key from the map and returns true. Returns false if the element does not exist.
    clear() Removes all key/value pairs from map.
    keys() Returns an Iterator of keys in the map for each element.
    values() Returns an Iterator of values in the map for each element.
    entries() Returns an Iterator of array[key, value] in the map for each element.
    `,
				info: `Map supports different data types i.e. 1 and "1" are two different keys/values.`,
				code: `
    let map = new Map();<br>
    map.set('k1', 'v1').set('k2', 'v2');
    <br>
    console.log(map.get('k1')); // v1<br>
    console.log(map.has('k2')); // true
    <br>
    for (let kv of map.entries())<br>
        console.log(kv[0] + " : " + kv[1]);<br> 
          `,
			},
			{
				heading: `Sets in ES6`,
				data: `A Set object can be used to hold unique values (no repetitions are allowed).
    A value in a set can be anything (objects and primitive values). 
    The syntax new Set([iterable]) creates a Set object where iterable is an array or any other iterable object of values.
    The size property returns the number of distinct values in a set.
    Methods
    add(value) Adds a new element with the given value to the Set.
    delete(value) Deletes a specified value from the set.
    has(value) Returns true if a specified value exists in the set and false otherwise.
    clear() Clears the set.
    values() Returns an Iterator of values in the set.
    `,
				info: `Set supports different data types i.e. 1 and "1" are two different values.
    NaN and undefined can also be stored in Set.
    `,
				code: `
    <br>
    let set = new Set();<br>
    set.add(5).add(9).add(59).add(9);
    <br>
    console.log(set.has(9));<br>
    <br>
    for (let v of set.values())<br>
        console.log(v);<br>   
            
            `,
			},
		],
	},

	{
		name: 'More on ES6',
		pages: [
			{
				heading: `ES6 Promises`,
				data: `A Promise is a better way for asynchronous programming when compared to the common way of using a setTimeout() type of method.
    It prints "End", "Work 1" and "Work 2" in that order (the work is done asynchronously). But if there are more events like this, the code becomes very complex. 
    If a method returns a promise, its calls should use the then method which takes two methods as input; one for success and the other for the failure.       
    `,
				info: `Tap Try It Yourself to play around with the codes and see ES6 Promises in action.`,
				code: `
            setTimeout(function() {<br>
        console.log("Work 1");<br>
        setTimeout(function() {<br>
            console.log("Work 2");<br>
        }, 1000);<br>
    }, 1000);<br>
    console.log("End");<br><br>
    <br>
    function asyncFunc(work) {<br>
        return new Promise(function(resolve, reject) {<br>
            if (work === "")<br>
                reject(Error("Nothing"));<br>
            setTimeout(function() {<br>
                resolve(work);<br>
            }, 1000);<br>
        });<br>
    }<br>
    <br>
    asyncFunc("Work 1") // Task 1<br>
    .then(function(result) {<br>
        console.log(result);<br>
        return asyncFunc("Work 2"); // Task 2<br>
    }, function(error) {<br>
        console.log(error);<br>
    })<br>
    .then(function(result) {<br>
        console.log(result);<br>
    }, function(error) {<br>
        console.log(error);<br>
    });<br>
    console.log("End");<br>
            `,
			},
			{
				heading: `Iterators and Generators`,
				data: `Symbol.iterator is the default iterator for an object. The for...of loops are based on this type of iterator.
    In the example below, we will see how we should implement it and how generator functions are used.
    First, we create an object, and use the Symbol.iterator and generator function to fill it with some values.
    In the second line of the code, we use a * with the function keyword. It's called a generator function (or gen function).
    `,
				info: `Tap Try It Yourself and follow the instructions in the comments to see the results.`,
				code: `
          <br>
    let myIterableObj = { <br>
      [Symbol.iterator] : function* () {<br>
        yield 1; yield 2; yield 3;<br>
      }<br>
    };<br>
    console.log([...myIterableObj]); // [ 1, 2, 3 ]<br>  
            `,
			},
			{
				heading: `Modules`,
				data: `is a good practice to divide your related code into modules. Before ES6 there were some libraries which made this possible (e.g., RequireJS, CommonJS). ES6 is now supporting this feature natively.
    Considerations when using modules:
    The first consideration is maintainability. A module is independent of other modules, making improvements and expansion possible without any dependency on code in other modules.
    The second consideration is namespacing. In an earlier lesson, we talked about variables and scope. As you know, vars are globally declared, so it's common to have namespace pollution where unrelated variables are accessible all over our code. Modules solve this problem by creating a private space for variables.
    Another important consideration is reusability. When we write code that can be used in other projects, modules make it possible to easily reuse the code without having to rewrite it in a new project.`,
				info: `ES6 supports modules officially, however, some browsers are not supporting modules natively yet. So, we should use bundlers (builders) such as Webpack or Browserify to run our code.`,
			},

			{
				heading: `Built-in Methods`,
				data: `ES6 also introduced new built-in methods to make several tasks easier. Here we will cover the most common ones.
    Array Element Finding
    The legacy way to find the first element of an array. 
    Repeating Strings
    Before ES6 the following syntax was the correct way to repeat a string multiple times
    Searching Strings
    Before ES6 we only used the indexOf() method to find the position of the text in the string.
    `,
				info: `It is always a good practice to refactor your code with the new syntax to learn new things and make your code more understandable.`,
				code: `
          //Array Find<br>
    [4, 5, 1, 8, 2, 0].find(x => x > 3);<br><br>
    //Repeating String<br>
    console.log("foo".repeat(3));<br><br>
    //Searching Strings<br>
    console.log("SoloLearn".startsWith("Solo", 0)); // true<br>
    console.log("SoloLearn".endsWith("Solo", 4)); // true<br>
    console.log("SoloLearn".includes("loLe")); // true<br>
    console.log("SoloLearn".includes("olo", 1)); // true<br>
    console.log("SoloLearn".includes("olo", 2)); // false<br><br>  
            `,
			},
		],
	},
];

export default js_intro_course;
