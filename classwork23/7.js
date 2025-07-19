// <><><><><>Synchronous<><><><><>

// console.log("Start");
// console.log("Middle");
// console.log("End");

// <><><><><>Asynchronous<><><><><>

// console.log("Start");
// setTimeout(() => console.log("Middle"), 2000);
// console.log("End");

// <><><><><>Using setTimeout<><><><><>

// setTimeout(() => {
//     console.log("This runs after 3 seconds");
// },3000);

// <><><><><>Using setInterval<><><><><>

// setInterval(() => {
//     console.log("This runs every 2 seconds");
// },2000);

// <><><><><>Creating a promise<><><><><>

// const myPromise = new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//         resolve("Task completed successfully!");
//     } else {
//         reject("Task failed.");
//     }
// });
// myPromise
//     .then(message => console.log(message))
//     .catch(error => console.error(error));

// <><><><><>Using the fetch API<><><><><>

// fetch("https://jsonplaceholder.typicode.com/posts/")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Error:", error));

// <><><><><>Using try, catch, and finally<><><><><>

// try {
//     let result = 10/0;
//     console.log("Result:",result);
// } catch {
//     console.error("An error occured:",error.message);
// } finally {
//     console.log("EWxecution finished.")
// }

// <><><><><>Example:<><><><><>

// function divide(a, b) {
//     if (b === 0) {
//         throw new Error("Cannot be divided by zero");
//     }
//     return a / b;
// }

// try {
//     console.log(divide(10, 0));
// } catch (error) {
//     console.error(error.message);
// }


