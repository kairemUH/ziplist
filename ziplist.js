function zipList(array1, array2) {
  if (array1.length !== array2.length) {
    return -1;
  }

  const returnArray = [];

  for (let i = 0; i < array1.length; i++) {
    returnArray.push(array1[i]);
    returnArray.push(array2[i]);
  }
  return returnArray;
}

function zipListTheSimpleWay(array1, array2) {
  return _.flatten(_.zip(array1, array2));
}

const testArr1 = ['a', 'b', 'c'];
const testArr2 = [1, 2, 3];

console.log(zipList(testArr1, testArr2));
console.log(zipListTheSimpleWay(testArr1, testArr2));
