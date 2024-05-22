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
// arrow Functions (2nd Method) using parameters & arguments
let arrowParametersAndArguments = (ab, ba, cd) => (ab + ba + cd);
let responseD = arrowParametersAndArguments(7, 17, 97);
console.log(responseD);
// arrow Functions (3rd Method) using direct returning 
let arrowDirectReturningFunction = () => { return 300 + 500 + 700; };
let responseE = arrowDirectReturningFunction();
console.log(responseE);
// arrow return Functions (4th Method) 
let returnArrowFunction = () => {
    let exampleVar = 99 - 49 - 19;
    return exampleVar;
};
let responseF = returnArrowFunction();
console.log(responseF);
// returning Parameter & Arguments Functions (5th Method) 
let returningParameterAndArguments = (w, h, n) => {
    let exampleVariable = `${w},${h},${n}`;
    return exampleVariable;
};
let responseG = returningParameterAndArguments("Kiran", "Falaknaz", "Amna");
console.log(responseG);
// Variable Scopes
// 1. Global Variable
let globalVariable = "Learning & Explaining Global Variable";
function exampleVariable2() {
    let exampleVariable2 = "learn";
}
;
console.log(globalVariable);
// 2. Local Variable
let exampleVariable3 = "understading the use of local variable & different between global variable & local variable";
function localVariable() {
    let localVariable = "completed task";
}
;
console.log(localVariable);
export {};
