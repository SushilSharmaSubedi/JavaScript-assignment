// Global variable
var x = "I am a global variable";

function scopingExample() {
  // Local variable that shadows the global variable
  var x = "I am a local variable";

  console.log(x); // Output: "I am a local variable"

  if (true) {
    // Block-level variable using let
    let x = "I am a block-level variable";
    console.log(x); // Output: "I am a block-level variable"
  }

  console.log(x); // Output: "I am a local variable"
}

scopingExample();
console.log(x); // Output: "I am a global variable"
