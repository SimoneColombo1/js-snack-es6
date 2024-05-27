
  //> Array biciclette 
const biciclette= [
    { nome: 'Bianchi', peso: 8 },
    { nome: 'Pinarello', peso: 7 },
    { nome: 'Colnago', peso: 9 },
    {nome: 'Fuji', peso: 4}
  ];
  
  //?For each per trovare la bicicletta più leggera
     biciclette.forEach(({ peso,nome})=>{
         min=100;
  if( peso<=min){
    min=peso;
    MinNome=nome;
  }
 

     })
     console.log(min,MinNome);