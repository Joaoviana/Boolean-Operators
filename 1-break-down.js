let bool = true;
let str_abc = "abc";
let str_abd = "abd";
let num_4 = 4;
let str_3 = "3"
let result;

{ // true || (("abc" > "abd") && (4 >= "3"));
  let step_1 = (str_abc > str_abd);
  let step_2 = (num_4 >= str_3);
  let step_3 = (step_1) && (step_2);
  let step_4 = (bool || step_3);
  result = step_4;
};

console.log(result);
