const numbers = [];
let somme = 0;
let hightestNumber = 0;

for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

for (let i = 0; i < numbers.length; i++) {

    console.log(numbers[i]);

    if (numbers[i] < hightestNumber) continue;
    somme += numbers[i];
    hightestNumber = numbers[i];

}


console.log(`La somme de tout les éléments du tableau est : ${somme}`);


