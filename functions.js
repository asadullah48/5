// basic Functions
function basicFunction() {
    let variable = "simple variable";
    console.log(variable);
    basicFunction();
    // returning Function Values
    function returningFunctionValues() {
        let variable = "returningFunctionValues";
        return variable;
    }
    ;
    let response = returningFunctionValues();
    console.log(response);
}
// Parameters & Arguments
function parametersAndArguments(a, b, c) {
    return a + b + c;
}
let responseA = parametersAndArguments(37, 57, 77);
console.log(responseA);
//default parameters
function defaultParameters(a = 37, b = 57, c = 77) {
    return a + b + c;
}
;
let responseB = defaultParameters(57);
console.log(responseB);
// rest parameters
function restParameters(a = "Asad", ...b) {
    console.log(a);
    console.log(b);
}
;
restParameters("Asad", "Ahmed", "Hamza", "Hajirah", "Zunairah", "Omamah");
// spread Operator denoted by three dots
function spreadOperator(x = "Zubair", z = 37) {
    console.log(x);
    console.log(z);
}
;
spreadOperator("Zubair", 37);
// arrow Functions (1st Method)
let basicArrowFunction = () => "ABC, XYZ";
let responseC = basicArrowFunction();
console.log(responseC);
export {};
// arrow Functions (2nd Method)
