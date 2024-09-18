const numbers = [];
let compteur = 0;

for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > 50) break;
    console.log(numbers[i]);

    compteur ++

}

console.log(`Nombre d'opération évitée par la machine : ${numbers.length - compteur}`);