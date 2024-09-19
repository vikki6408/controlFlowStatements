const numbers = [];
let resultat = 100;
let oldnumber = 0

function check() {
    for (let i = 0; i < numbers.length; i++) {

        if (i === numbers.length/2) return console.log("La moitié de la liste a été traitée Résultat: " + resultat);

        console.log(numbers[i]);



        if (numbers[i] % 2 === 0) {

            if (numbers[i] === oldnumber) return console.log(`Le même nombre qu'avant est soustrai Résultat: ${resultat}`);

            resultat -= numbers[i];
            if (resultat === 50) return console.log(`La somme résiduelle de 50 a été atteinte Résultat: ${resultat}`);

            oldnumber = numbers[i];
        }
    }
}

for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}


check()
