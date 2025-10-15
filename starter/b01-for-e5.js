/*****************************
 * BOUCLES ET ITÉRATIONS
 * BOUCLE = STRUCTURE DE CONTRÔLE N° 2 = MOYEN DE RÉPÉTER DES INSTRUCTIONS
 */

/* 6.1. Boucle FOR
  Syntaxe :
    for (initialisation; condition; étape) {
        // instructions exécutées tant que la condition est vérifiée
    }
  Ingrédients :
    - initialisation : on initialise un compteur pour dire OÙ ON COMMENCE
    - condition : on écrit une condition sur le compteur pour dire QUAND ON S'ARRÊTE
    - étape : on incrémente le compteur pour dire COMMENT ON AVANCE dans la boucle
*/

/* EXEMPLE 5 : Boucler à l'envers
- Affichez dans la console : "3, 2, 1, partez !"
*/


for (let i = 3; i > 0; i--) {
    console.log(i);
}
console.log("partez !");


//CORRECTION EN CLASSE
// for (let i = 3; i >= 0; i--) {
//     if (i >= 1) {
//         console.log(i);
//     } else {
//         console.log("partez !");
//     }
// }


// sur une ligne
// for (let i = 3; i >= 0; i--) {
//     if (i >= 1) {
//         tmp += 1 + ', ';
//     } else {
//        tmp += ' partez !'
//     }
// }
//

