// task 1

const myStr = 'HARRY Potter is the most FAMOUS book series'

function wordsStructure(str) {
    const arrStr = str.split(' ')
    const wordCharacteristicksArr = []

    for(let i = 0; i < arrStr.length; i++) {
        const wordCharacteristicks = {}
        wordCharacteristicks.word = arrStr[i]
        wordCharacteristicks.length = arrStr[i].length
        wordCharacteristicks.isCapitalized = arrStr[i].toUpperCase() === arrStr[i] ? true : false

        wordCharacteristicksArr.push(wordCharacteristicks)

    }

    console.log('task 1:', wordCharacteristicksArr)
}

wordsStructure(myStr)

// task 2

let array = [1, 2, 3, 4, 5];

function changeFour(arr) {
   const newArr = arr.slice()
   newArr.splice(3, 1, 'JavaScript')
   return newArr
}

let result = changeFour(array);
console.log('task 2 (array):', array)
console.log('task 2 (copy of array with changed element)', result)

// task 3

function calcSum(arr) {
    let calcSumArr = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            continue
        }
        calcSumArr += arr[i]
    }

    return calcSumArr
}

let sum1 = calcSum([]);
let sum2 = calcSum([1,2,3]);
let sum3 = calcSum([5,0,10, 1, 5, null, 'some string']);

console.log('task 3 (sum1):', sum1)

console.log('task 3 (sum1):', sum2)

console.log('task 3 (sum1):', sum3)
