//non technical 
// mom and child example
// child is asking for the cake  mom saying  i will give in 1 hours  if you ask me again your timer will again start from  1 hours


// NOTES – Debouncing in JavaScript

// 1. debounce is a Higher Order Function (HOC)
//    → It takes a function (func) and a delay (time in ms)

// 2. debounce returns a new function
//    → This returned function controls when the original function runs

// 3. timeoutId is used to store the timer reference
//    → So we can cancel the previous timer if a new event occurs

// 4. clearTimeout(timeoutId)
//    → Cancels the previously scheduled function call

// 5. setTimeout is used to delay execution
//    → The function runs only after the delay is completed

// 6. func.apply(this, args)
//    → Calls the original function
//    → Preserves the correct `this` context
//    → Passes all arguments properly

// 7. If events keep firing within the delay
//    → The function will NOT execute

// 8. The function executes only after the user stops triggering events
//    → Common use cases: search input, resize, scroll, button spam prevention


// Create the debounce function
function debounce(func, delay) {
  let timeoutId; // holds the timer

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}







// function debounce(func,delay){
//  let timeId
//     return function(...args){
//         clearTimeout(timeId)  
//         timeId =setTimeout((
//          func.apply(this,args)
//         ),delay)
//     }
// }