                            //! SNACK 1
//< array con i vip 

const Vip=[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']

const TavoloVip=[
      {
    tableName : 'tavolo1',
    guestName : 'W',
       place:    'occupied' },

       {
        tableName : 'tavolo2',
        guestName : '',
           place:    'occupied' },
           {
            tableName : 'tavolo3',
            guestName : '',
               place:    'occupied' },
               {
                tableName : 'tavolo4',
                guestName : '',
                   place:    'free' },
                   {
                    tableName : 'tavolo5',
                    guestName : '',
                       place:    'occupied' },
                       {
                        tableName : 'tavolo6',
                        guestName : '',
                           place:    'occupied' },
                           {
                            tableName : 'tavolo7',
                            guestName : '',
                               place:    'occupied' },
                               {
                                tableName : 'tavolo8',
                                guestName : '',
                                   place:    'free' },
                                   {
                                    tableName : 'tavolo9',
                                    guestName : '',
                                       place:    'occupied' },
                                       {
                                        tableName : 'tavolo10',
                                        guestName : '',
                                           place:    'free' },
                                           {
                                            tableName : 'tavolo11',
                                            guestName : '',
                                               place:    'free' }


];


//> inserisco gli invitati nel array
for(let i=0; i<TavoloVip.length; i++) {
    

 }

console.log(TavoloVip);

   //!Snack 2
//? Array studenti

const studenti= [
    {
        id: 213,
        name:'Giuseppina della Rovere',
        grades:78,


    },
    {
        id: 110,
        name:'Paola Cortellessa ',
        grades:96,


    },
    {
        id: 250,
        name:'Andrea Mantegna ',
        grades:48,


    },
    {
        id: 145,
        name:'Gaia Borromini ',
        grades:74,


    },
    {
        id: 196,
        name:'Luigi Grimaldello ',
        grades:68,


    },
    {
        id: 102,
        name:'Piero della Francesca',
        grades:50,


    },
    {
        id: 120,
        name:'Francesca da Polenta',
        grades:84,


    },

]


const targa= studenti.map((name)=>{
        
   
return name.toUpperCase
})

const OverSettanta= studenti.filter((grades)=>{

if (grades > 70 ){
    return true


}
return false


})
const OverSettantaIDalto= studenti.filter((grades,id)=>{

    if (grades > 70 ){
        if(id > 120){
            return true
        }
       else{
        return false
       }
    
    
    }
    return false
    
    
    })