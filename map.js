// ex=5
const numbers = [4, 6, 8, 10];
const multyply = numbers.map(x => x * 5);
console.log(multyply);


// // ex=6
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const number = numbers.filter(x => x % 2 == 0);
console.log(number);

// ex=7
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 5000, color: 'black' },
    { name: 'watch', price: 37000, color: 'black' },
    { name: 'sticky note', price: 5, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }

];
const expensive = products.find(product => product.price ==5000);
console.log(expensive);
// ex=8
const bottle={ names: 'water bottle', price: 50, color: 'yellow' };
const{names,price,color}=bottle;
// console.log(names);
// ex=9
const numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9];
const [one,two,three]=numbers;
console.log(three);

// ex=10
const calculation=(x,y,z=7)=>x+y+z;
const result=calculation(2,3);
console.log(result);