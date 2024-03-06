function reverseString(str) {
  if (str.length < 2) {
    return str;
  }

  let strWithoutFirst = str.slice(1);
  return reverseString(strWithoutFirst) + str[0];


}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString('hi'));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString('catbaby'));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
