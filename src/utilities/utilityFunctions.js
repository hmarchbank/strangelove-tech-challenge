const capitalise = (word) => {
    let capitalisedWord = word[0].toUpperCase() + word.slice(1)
    return capitalisedWord
}

const getMeasurement = (num) => {
    return num / 10
}

export {capitalise, getMeasurement}