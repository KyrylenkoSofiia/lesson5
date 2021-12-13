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

    console.log(wordCharacteristicksArr)
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
console.log(array)
console.log(result)

// task 3


