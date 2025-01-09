function reverseString(str) {
  // Step 1. Use the split() method to return a new array
  var splitString = str.split(""); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"

  //Step 4. Return the reversed string
  return joinArray; // "olleh"
}

const searchResaultCreator = (inputValue, moshavers) => {
  console.log(inputValue);
  const filteredMoshaver = moshavers.filter((moshaver) => {
    if (
      moshaver.first_name.toLowerCase().includes(inputValue.toLowerCase()) ||
      moshaver.last_name.toLowerCase().includes(inputValue.toLowerCase()) ||
      moshaver.address.toLowerCase().includes(inputValue.toLowerCase())
    )
      return moshaver;
  });

  let id = "";
  filteredMoshaver.map((element) => {
    moshavers.map((element2, index) => {
      if (element.first_name === element2.first_name) id += index;
    });
  });
  return id;
};
export default searchResaultCreator;
