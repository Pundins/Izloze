const vardi = ['Jana Krūmiņa', 'Jānis Bērziņš', 'Pēteris Liepa', 'Laura Ose', 'Artis priede'];
const balvas = ['Dators', 'Telefons', 'Leduskapis', 'Fotoaparāts', 'Kafijas autumāts'];
const maudaKopa = 1000000;
let uzvaretajuSkaits = 5;

for (let i=0; i<uzvaretajuSkaits; i++){

let rand = Math.random() * vardi.length;
rand = Math.floor(rand);
let uzvaretajs = vardi[rand];

}
let rindas = document.querySelector('.rindas'); //pievieno mainīgo
rindas.innerHTML +=` //pievieno +, lai pieskatītu nākamo
<tr>
    <td>${i+1}</td> // $norāda mainīgo
    <td>${uzvaretajs}</td>
</tr>` //izveide vairākās rinās


