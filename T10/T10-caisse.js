let panier = [15, 42, 5, 89, 12, 50, 8];

//La somme totale de tous les articles du panier.
let somme = 0;
for(let i=0; i<panier.length; i++){
    somme+=panier[i];
}
 console.log("Total du panier :", somme);

 //Le nombre d’articles considérés comme “chers” (prix supérieur ou égal à 20).
 let chers = 0;
for(let i=0; i<panier.length; i++){
    if(panier[i]>=20)
        chers++;
}
console.log("Nombre d'articles chers : ", chers);

//La somme totale générée uniquement par ces articles chers.
let somme_chers = 0;
for(let i=0; i<panier.length; i++){
    if(panier[i]>=20)
        somme_chers+=panier[i];
}
console.log("Nombre d'articles chers : ", somme_chers);