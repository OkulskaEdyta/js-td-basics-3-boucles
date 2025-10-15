/* BOUCLES - PRÉPA 3 : FizzBuzz
Ecrivez un programme qui affiche tous les nombres entre 1 et 100 avec les exceptions suivantes :
- Il affiche "Fizz" à la place du nombre si celui-ci est divisible par 3 ;
- Il affiche "Buzz" à la place du nombre si celui-ci est divisible par 5 et non par 3 ;
- Il affiche "FizzBuzz" à la place du nombre si celui-ci est divisible à la fois par 3 et par 5.
*/

/* RAPPELS - AIDES :
- Vous aurez besoin de deux structures de contrôle pour réaliser cet exercice : les tests et les boucles.
- Vous devrez également utiliser l'opérateur modulo %, qui renvoie le reste de la division d'un entier par un autre.
- TIP : Cet exercice est un test d'embauche classique qui permet de sélectionner des candidats qualifiés.
  Donnez votre meilleur effort pour le réussir !
*/
// Écrivez le code JavaScript pour résoudre cet exercice en affichant les nombres de 1 à 100 selon les règles spécifiées.


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}



//CORRECTION EN CLASSE

//FORI
for (let i = 1; i <= 100; i++) {
    // 100 => encois 100 x true et 1x false donc 101
    // i++ => s'execute 100x faut que la condition soit fausse aussi

    // i <= 100 => une opération car il y a un operateur (=) et deux operandes ( i 100) et c'est aussi une operation de sortie, expression booleane true ou false,
    //i++ => mise a jour de la variable mais aussi c'est une expression car elle a un operateur d'incrementation (++)
    //let i = 1 => declaration et initialisation, c'est une instruction, si let.
    // i = 1 => expression
    if (i % 3 === 0 && i % 5 === 0) {
        //i % 3 === 0 && i % 5 === 0 => une expression composée de deux expression
//else if (i % 3 === 0){
//     console.log("Fizz"); => structure de contrôle, ca veut rien
        //i % 5  expression numerique, vaut 0 ou moins que 5

        //{
        //   console.log("Fizz");
        // } = > un block

        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

//tout = structure de controle





//FOR
// let i = 1
//
// for (;i <= 100;) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz")
//   } else {
//     console.log(i)
//   }
//   i++
// }






// WHILE
// let i = 1
//
// while (i <= 100) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz")
//   } else {
//     console.log(i)
//   }
//   i++;
// }
