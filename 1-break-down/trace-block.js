// pytut: https://goo.gl/Qnu9zJ

let input = 12345;
let expected = 345;
let output;

console.log("Number(String(arg).replace(\"12\", \"\"));\n");
console.log("- " + input + " should become " + expected);

{ //  Number(String(input).replace("12", ""));
	const step_1 = String(input); 
	const step_2 = step_1.replace("12", ""); 
	const step_3 = Number(step_2); 
	output = step_3;
};


console.log("- actual: " + output );


// empty trace-block 
//	for studying different input/output pairs

// { //  (___, ___) -> (#, ___)
// 	const step_1 = String(input); 
// 	// str: ___
// 	const step_2 = step_1.replace("12", ""); 
// 	// str: ___
// 	const step_3 = Number(step_2);
// 	// num: ___
// 	output = step_3;
// };
