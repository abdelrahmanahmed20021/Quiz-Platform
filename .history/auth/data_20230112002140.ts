export const data = [
    {
        "quest": "Q1.What will be the output of the following C++ code?",
        "img":`../assets/code/1.png`,
        "a": "Hello",
        "b": "World",
        "c": "Error",
        "d": "Hello World",
        "answer": "c",
        "explanation": " There is no operation defined for the addition of character array in C++ hence the compiler throws an error as it does not understood what to do about this expression."
    },
    {
        "quest": "Q2.Which of the following C++ code will give error on compilation?",
        "img":`../assets/code/2.png`,
        "a": "Code 1 only",
        "b": "Neither code 1 nor code 2",
        "c": "Both code 1 and code 2",
        "d": "Code 2 only",
        "answer": "b",
        "explanation": "Neither code 1 nor code 2 will give an error as both are syntactically correct as in first code we have included namespace std and in second one we have used scope resolution operator to resolve the conflict."
    },
    {
        "quest": "Q3. What is the value of p in the following C++ code snippet?",
        "img":`../assets/code/3.png`,
        "a": "12",
        "b": "0",
        "c": "2",
        "d": "16",
        "answer": "d",
        "explanation": " means bitwise OR operation so x | y (0101 | 1010) will be evaluated to 1111 which is integer 15 and as a is true and b is false so a+b(1 + 0) = 1. So final value of expression in line #10 will be 15 + 1 = 16."
    },
    {
        "quest": "Q4- In the following program f() is overloaded.",
        "img":"../assets/code/4.png",
        "a": "True",
        "b": "False",
        "c": "Not one of them",
        "d": "True and False",
        "answer": "b",
        "explanation":"No, as both the functions arguments is same and compiler ignores return type to consider overloading though different in return type."
    },
    {
        "quest": "Q5 - What is the output of the following program?",
        "img":"../assets/code/5.png",
        "a": "Hello",
        "b": "Hi",
        "c": "HelloHi",
        "d": "Compile error",
        "answer": "b",
        "explanation": "Its Easy Bro Go Study well but call me i will tell u if u can't get it"
    },
    {
        "quest": "Q6- What is the output of the following program?",
        "img":"",
        "a": "5",
        "b": "Address of ‘x’",
        "c": "Compile error",
        "d": "10",
        "answer": "d",
        "explanation":"A function can return reference, hence it can appear on the left hand side of the assignment operator.",
    },
    {
        "quest": "Q7.Which of the following user-defined header file extension used in c++?",
        "img":"",
        "a": "hg",
        "b": "cpp",
        "c": "h",
        "d": "hf",
        "answer": "c",
        "explanation":".h extensions are used for user defined header files. To include a user defined header file one should use #include”name.h” i.e. enclosed within double quotes.",
    },
    {
        "quest": "Q8.Which of the following is a correct identifier in C++?",
        "img":"",
        "a": "VAR_1234",
        "b": "$var_name",
        "c": "7VARNAME",
        "d": "7var_name",
        "answer": "a",
        "explanation":`
            Explanation: The rules for writing an identifier is as follows:
            i) may contain lowercase/uppercase letters, digits or underscore(_) only
            ii) should start with a non-digit character
            iii) should not contain any special characters like @, $, etc.`
    },
    {
        "quest": "Q9.What happens if the following C++ statement is compiled and executed?",
        "img":"../assets/code/7.png",
        "a": "The program is not semantically correct",
        "b": "The program is compiled and executed successfully",
        "c": "The program gives a compile-time error",
        "d": " The program compiled successfully but throws an error during run-time",
        "answer": "b",
        "explanation":
        "The above statement is syntactically and semantically correct as C++ allows the programmer to delete a NULL pointer, therefore, the program is compiled and executed successfully."
    },
    {
        "quest": " What will be the output of the following C++ program?",
        "img":"../assets/code/8.png",
        "a": "Hello",
        "b": "World",
        "c": "Error",
        "d": "Hello World",
        "answer": "a",
        "explanation":"char* are terminated by a ‘\0’ character so the string “Hello\0World” will be cut down to “Hello”."
    },
    /*
    {
        "quest": "Which of the following is the address operator?",
        "img":"",
        "a": "@",
        "b": "#",
        "c": "&",
        "d": "%",
        "answer": "c",
        "explanation":"To print the address of any variable, a user can use the "&" operator. To understand it more clearly, consider the following example:"
    },
    {
        "quest": "Which of the following statements is correct about the formal parameters in C++?",
        "img":"",
        "a": "Parameters with which functions are called",
        "b": "Parameters which are used in the definition of the function",
        "c": "Variables other than passed parameters in a function",
        "d": "Variables that are never used in the function",
        "answer": "a",
        "explanation":"Parameters that are used in the body of the function are known as formal parameters. These parameters represent the parameters passed to the function and are only used inside the function's body."
    },
    {
        "quest": " C++ is a ___ type of language.",
        "img":"",
        "a": "High-level Language",
        "b": "Low-level language",
        "c": "Middle-level language",
        "d": "None of the above",
        "answer": "c",
        "explanation":" C++ contains the features of both types of high and Low-level programming languages, and it is also not wrong if we call it the combination of both high and low-level languages."
    },
    {
        "quest": "Which of the following refers to characteristics of an array?",
        "img":"",
        "a": "An array is a set of similar data items",
        "b": "An array is a set of distinct data items",
        "c": "An array can hold different types of datatypes",
        "d": "None of the above",
        "answer": "a",
        "explanation":"Basically, an array is a set of similar data items that are stored in the contiguous memory blocks. You can access any data item randomly using the index address of the element s."
    },
    {
        "quest": " If we stored five elements or data items in an array, what will be the index address or the index number of the array's last data item?",
        "img":"",
        "a": "3",
        "b": "5",
        "c": "",
        "d": "",
        "answer": "",
        "explanation":
    },
    {
        "quest": "",
        "img":"",
        "a": "",
        "b": "",
        "c": "",
        "d": "",
        "answer": "",
        "explanation":
    },
    {
        "quest": "",
        "img":"",
        "a": "",
        "b": "",
        "c": "",
        "d": "",
        "answer": "",
        "explanation":
    },
    {
        "quest": "",
        "img":"",
        "a": "",
        "b": "",
        "c": "",
        "d": "",
        "answer": "",
        "explanation":
    },
    {
        "quest": "",
        "img":"",
        "a": "",
        "b": "",
        "c": "",
        "d": "",
        "answer": "",
        "explanation":
    },
    {
        "quest": "",
        "img":"",
        "a": "",
        "b": "",
        "c": "",
        "d": "",
        "answer": "",
        "explanation":
    },
    {
        "quest": "",
        "img":"",
        "a": "",
        "b": "",
        "c": "",
        "d": "",
        "answer": "",
        "explanation":
    },
    {
        "quest": "",
        "img":"",
        "a": "",
        "b": "",
        "c": "",
        "d": "",
        "answer": "",
        "explanation":
    },
    {
        "quest": "",
        "img":"",
        "a": "",
        "b": "",
        "c": "",
        "d": "",
        "answer": "",
        "explanation":
    },
    {
        "quest": "",
        "img":"",
        "a": "",
        "b": "",
        "c": "",
        "d": "",
        "answer": "",
        "explanation":
    },
    {
        "quest": "",
        "img":"",
        "a": "",
        "b": "",
        "c": "",
        "d": "",
        "answer": "",
        "explanation":
    },
    {
        "quest": "",
        "img":"",
        "a": "",
        "b": "",
        "c": "",
        "d": "",
        "answer": "",
        "explanation":
    },
    {
        "quest": "",
        "img":"",
        "a": "",
        "b": "",
        "c": "",
        "d": "",
        "answer": "",
        "explanation":
    },
    {
        "quest": "",
        "img":"",
        "a": "",
        "b": "",
        "c": "",
        "d": "",
        "answer": "",
        "explanation":
    },
    {
        "quest": "",
        "img":"",
        "a": "",
        "b": "",
        "c": "",
        "d": "",
        "answer": "",
        "explanation":
    },
    {
        "quest": "",
        "img":"",
        "a": "",
        "b": "",
        "c": "",
        "d": "",
        "answer": "",
        "explanation":
    },
    {
        "quest": "",
        "img":"",
        "a": "",
        "b": "",
        "c": "",
        "d": "",
        "answer": "",
        "explanation":
    }
    */
]
