//A module is a separate JavaScript file containing code that can be reused in other JavaScript files.
//ES Modules (ESM) are JavaScript's built-in module system.
// the Esm  works on two important  keywords and they are import and export
/*export makes variables, functions, or classes available to other modules.
There are two major types:
Named export A named export allows you to export multiple things from one file.
Default export A default export is generally used when a module has one main thing that it provides.
*/
export function sum(a,b){
    return a+b
}
console.log(sum(1,2))
export const pi = 3.14;

export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}
function createUser(name, age) {
    return {
        name,
        age
    };
}

export default createUser;

