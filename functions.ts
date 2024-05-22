// basic Functions
function basicFunction () {
    let variable: string = "simple variable"
    console.log(variable);
    basicFunction();
    // returning Function Values
    function returningFunctionValues() {
        let variable:string = "returningFunctionValues"
        return variable;
    };
    let response:string = returningFunctionValues();
    console.log(response);
}
// Parameters & Arguments
function parametersAndArguments(a:number, b:number, c:number) : number{
    return a + b + c ; 
} let responseA: number = parametersAndArguments(37,57,77);
console.log(responseA);
//default parameters
function defaultParameters(a:number = 37, b:number = 57, c:number = 77):number{
    return a+b+c;
}; let responseB: number =defaultParameters(57);
console.log(responseB);
// rest parameters
function restParameters(a:string = "Asad", ...b:string[]) {
    console.log(a);
    console.log(b);
}; restParameters("Asad", "Ahmed", "Hamza", "Hajirah", "Zunairah", "Omamah");
// spread Operator denoted by three dots
function spreadOperator(x:string = "Zubair", z:number = 37) {
    console.log(x);
    console.log(z);
}; 
spreadOperator("Zubair", 37);
// arrow Functions (1st Method)
let basicArrowFunction =() => "ABC, XYZ"
let responseC:string = basicArrowFunction()
console.log(responseC)
// arrow Functions (2nd Method) using parameters & arguments
let arrowParametersAndArguments=(ab:number, ba:number, cd:number) => (ab+ba+cd);
let responseD:number = arrowParametersAndArguments(7,17,97,);
console.log(responseD);
// arrow Functions (3rd Method) using direct returning 
let arrowDirectReturningFunction =() => {return 300 +500 +700};
let responseE: number = arrowDirectReturningFunction();
console.log(responseE);
// arrow return Functions (4th Method) 
let returnArrowFunction = () => { let exampleVar: number = 99 -49 -19;
    return exampleVar;
}; let responseF:number =returnArrowFunction();
console.log(responseF);


