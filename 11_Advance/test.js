const myArr = []
// %DebugPrint(myArr)


//  We Have two types of array Continuous and Holey array 

// Both are of three types:
// 1.SMI(Small Integer)
// 2. Packed Elements
// 3. Double(float, string, function )

// Objects me properties hote hain lekinnnnnn............
// Array me elements hote hain properties nahiiii..!

// Every different types of array has different optimisation on their own

// Continuous array is also called PACKED SMI ELEMENTS
// Example:
const arrTwo = [1,2,3,4,5]
// PACKED SMI ELEMENTS

// PACKED SMI is our first and very optimised type of array elements but in this we can only numbers nothing else

    arrTwo.push(6.0)
// Now it has become PACKED_DOUBLE_ELEMENTS
// *REMEMBER : Now it cannot be reversed to PACKED SMI ELEMENTS
// Even after deleting
arrTwo.push('7')
// Now it is only PACKED_ELEMENTS 


// Here we are pushing an element into the array 10th postion
arrTwo[10]=11
// So it is now became a HOLEY_ELEMENTS because gaps are included in this array

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);


// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are very expensive  

const arrThree = [1,2,3,4,5]
console.log(arrThree[8]);

// OPTIMISING LEVEL....!
// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED


const arrFour = new Array(3)
// This array has just 3 holes and it is called HOLEY_SMI_ELEMENTS
arrFour[0] = '1' //HOLEY_ELEMENTS
arrFour[0] = '2' //HOLEY_ELEMENTS
arrFour[0] = '3' //HOLEY_ELEMENTS

const arrFive = []
arrFive.push('1') //PACKED_ELEMENTS
arrFive.push('2') //PACKED_ELEMENTS
arrFive.push('3') //PACKED_ELEMENTS

const arrSix = [1,2,3,4,5] //SMI

arrSix.push(NaN) //PACKED_DOUBLE
arrSix.push(Infinity) //PACKED_DOUBLE