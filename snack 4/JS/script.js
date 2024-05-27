
//< array squadre

const squadre=[
    {nome: "Milan", punti: 0, falli: 0},
    {nome: "Bari", punti: 0, falli: 0},
    {nome: "inter", punti: 0, falli: 0}
  ];


//? generatore di numeri casuali per i punti e i falli


 squadra = squadre.map(random =>{
    squadre.punti = Math.floor(Math.random() * 100);
    squadre.falli= Math.floor(Math.random() * 100);
})


const {nome,falli}= squadre;
console.log(nome,falli);