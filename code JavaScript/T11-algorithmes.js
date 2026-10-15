let nombres = [23, 15, 42, 9, 31, 18, 42, 5];

//Trouver et afficher le nombre Maximum ainsi que sa position
let position_max = -1;
let maximum = nombres[0];
for (let i = 1; i < nombres.length; i++) {
    if (nombres[i] > maximum) {
        maximum = nombres[i];
        position_max = i;
    }
}
console.log("Maximum :", maximum, "(Index :", position_max, ")");

//Trouver et afficher le nombre Minimum ainsi que sa position.
let position_min = -1;
let minimum = nombres[0];
for (let j = 1; j < nombres.length; j++) {
    if (nombres[j] < minimum) {
        minimum = nombres[j];
        position_min = j;
    }
}
console.log("Minimum :", minimum, "(Index :", position_min, ")");

//indiquer si la valeur 31 est présente dans le tableau ou non.
let recherche = 31;
let cont = 0;
for (let k = 0; k < nombres.length; k++) {
    if (nombres[k]==recherche) {
        cont++
    }
}
if(cont!=0)
    console.log("La valeur 31 est présente dans le tableau.");
else
    console.log("La valeur 31 n' est pes présente dans le tableau.");
