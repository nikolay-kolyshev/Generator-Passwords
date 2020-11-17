const randomInRange = (min, max) =>
    Math.floor(min + Math.random() * (max + 1 - min))

const generateLowerCaseLetter = () =>
    String.fromCharCode(randomInRange(97, 122))

const generateUpperCaseLetter = () =>
    String.fromCharCode(randomInRange(65, 90))

const generateModCount = (count, index) => {
    const result = Math.pow(count,4) % 100
    return (index === 6 && result < 10) ? 0 : result
}

function* generatePartOfPassword(start, end, func, count = 0) {
    for (let i = start; i <= end; i++)
        yield (start === 6) ? func(count, i) : func()
}

function* generatePassword(count) {

    yield* generatePartOfPassword(1, 3, generateLowerCaseLetter)
    yield* generatePartOfPassword(4, 5, generateUpperCaseLetter)
    yield* generatePartOfPassword(6, 7, generateModCount, count)

}

export default count =>
    Array.from(generatePassword(count)).join("")
