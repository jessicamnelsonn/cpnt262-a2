// Initial Number (Before)
let myNumber = 5467; 
// Number output
document.getElementById("number").innerHTML = myNumber;

// Number rendered (After)

// Expected output, exponential of "myNumber"
console.log(myNumber.toExponential()); 
document.getElementById("exponential").innerHTML = myNumber.toExponential();

//Expected output, is "myNumber" an integer? (true or false)
console.log(Number.isInteger(myNumber)); 
document.getElementById("integer").innerHTML = Number.isInteger(myNumber);

// Expected output, is "myNumber" a NaN? (true or false)
console.log(Number.isNaN(myNumber)); 
document.getElementById("nan").innerHTML = Number.isNaN(myNumber);

// Expected output, is "myNumber" finite? (true or false)
console.log(Number.isFinite(myNumber)); 
document.getElementById("finite").innerHTML = Number.isFinite(myNumber);



// Initial String (Before)
const myName = ("Jessica Michelle"); 
// String output
document.getElementById("string").innerHTML = myName;

// String rendered (After)

// Expected output, Jessica Nelson
console.log(myName.replace("Michelle", "Nelson"));
document.getElementById("replace").innerHTML = myName.replace("Michelle", "Nelson");

// Expected output, does string start with "Jess"? (true of false) 
console.log(myName.startsWith("Jess"));
document.getElementById("starts-with").innerHTML = myName.startsWith("Jess");

// Expected output, does string end with "cool"? (true or false) 
console.log(myName.endsWith("cool")); 
document.getElementById("ends-with").innerHTML = myName.endsWith("cool");

//Expected output, length of string
console.log(myName.length)
document.getElementById("length").innerHTML = myName.length;


