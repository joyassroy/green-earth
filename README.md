
Live Link: https://joyassroy.github.io/green-earth/


1) What is the difference between var, let, and const?
   
 Ans: 
        var: Declares a variable that is function-scoped. It can be re-declared and its value can be updated within its scope. 
        let: Declares a variable that is block-scoped (scoped to the nearest curly braces {}). Its value can be updated, but it cannot be re-declared within the same scope.
        const: Declares a variable that is block-scoped. It must be initialized during declaration and its value cannot be re-assigned. This creates a constant reference to a value.

3) What is the difference between map(), forEach(), and filter()?
   
Ans:
        forEach(): Executes a provided function once for each array element. It does not return any value (undefined) and is used for its side effects, like modifying an external variable or logging to the console.
        map(): Creates and returns a new array of the same length, populated with the results of calling a provided function on every element in the calling array. It is used for transforming data.
        filter(): Creates and returns a new array containing only the elements from the original array that pass a test implemented by the provided function. It is used for selecting a subset of data.

5) What are arrow functions in ES6?
   
Ans:
        Arrow functions are a compact syntax for writing function expressions, introduced in ES6. Their key characteristics are a shorter syntax compared to traditional function expressions and the fact that they do not have their own this context. Instead, this is lexically bound, meaning it inherits the this value from the enclosing scope.

7) How does destructuring assignment work in ES6?
   
Ans: 
        Destructuring is an ES6 feature that allows for unpacking values from arrays or properties from objects into distinct variables. This syntax provides a more concise and readable way to extract data from complex data structures without needing to access each element or property individually.

9) Explain template literals in ES6. How are they different from string concatenation?
    
Ans: 
Template literals are an enhanced form of string literals, enclosed by backticks (`) instead of single or double quotes. 

They are different from traditional string concatenation in two main ways:
Embedded Expressions: They allow for embedding variables and expressions directly within the string using the ${expression} syntax.

Multi-line Strings: They allow strings to span multiple lines without needing concatenation or escape characters.
