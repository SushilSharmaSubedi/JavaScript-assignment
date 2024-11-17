function scopeAndHoisting() {
  // var is function-scoped
  if (true) {
    var varVariable = "I'm a var variable";
  }
  console.log(varVariable); // Works fine

  // let and const are block-scoped
  if (true) {
    let letVariable = "I'm a let variable";
    const constVariable = "I'm a const variable";
  }
  // console.log(letVariable); // ReferenceError: letVariable is not defined
  // console.log(constVariable); // ReferenceError: constVariable is not defined

  // Hoisting
  console.log(hoistedVar); // undefined
  var hoistedVar = "I'm hoisted";

  // console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
  let hoistedLet = "I'm not hoisted";

  // console.log(hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization
  const hoistedConst = "I'm not hoisted";
}

scopeAndHoisting();
