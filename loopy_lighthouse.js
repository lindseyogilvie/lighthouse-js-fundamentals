for (let i = 100; i <= 200; i++) {
  //Print "LoopyLighthouse" if number is divisible by 3 and 4.
  if (i % 3 === 0 && i % 4 === 0) {
    console.log("LoopyLighthouse");
  }
  //Print "Loopy" if number is divisible by 3.
  else if (i % 3 === 0) {
    console.log("Loopy");
  }
  //Print "Lighthouse" if number is divisible by 4.
  else if (i % 4 === 0) {
    console.log("Lighthouse")
  }
  //Otherwise, print the number.
  else {
    console.log(i);
  }
}