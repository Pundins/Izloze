const vardi = ['Jana Krūmiņa', 'Jānis Bērziņš', 'Pēteris Liepa', 'Laura Ose', 'Artis priede'];
const balvas = ['Dators', 'Telefons', 'Leduskapis', 'Fotoaparāts', 'Kafijas autumāts'];
const naudaKopa = 1000000;
let uzvaretajuSkaits = 5;

let rindas = document.querySelector(".rindas"); //pievieno mainīgo
rindas.innerHTML = ' ';

for (let i = 0; i < uzvaretajuSkaits; i++) {

    let rand = Math.random() * vardi.length;
    rand = Math.floor(rand);
    let uzvaretaji = vardi[rand];
    let laimesti = balvas[rand];


    rindas.innerHTML += `
<tr>
<td>${i + 1}</td>
<td>${uzvaretaji}</td>
<td>${laimesti}</td>
</tr>`

}



