ex=3.1

const multyply = num => num / 5;
const output = multyply(15);
// console.log(output);

// ex=3.2
const calculation = (x, y) => ((x + 2) * (y + 2));
const result = calculation(4, 2);
console.log(result);

// ex=3.3

const calculation = (x, y, z) => x * y * z;
const result = calculation(3, 3, 3);
console.log(result);

// ex=3.4

const calculation = (x, y) => {
    const sum1 = x + 2;
    const sum2 = y + 2;
    const multyply = sum1 * sum2;
    return multyply;
}
const result = calculation(4, 2);
console.log(result);