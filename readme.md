> SNACK 1
> Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
> Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
> Ma  la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto letterale javascript che ha come proprietà:

    nome del tavolo (tableName),
    nome dell'ospite (guestName),
    posto occupato (place),
> Generiamo e stampiamo in console la lista per i segnaposto.
>SNACK 2
> Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
> 1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo, ad esempio (Marco della Rovere => MARCO DELLA ROVERE);
> 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
> 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal


SNACK 4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


------------------------------------------------------Snack 1-----------------------------------------------------------------

creo l'array con gli invitati per poi passarli in un array con degli oggetti e stamparli.


------------------------------------------------------Snack 2-----------------------------------------------------------------

creo l'array con gli studenti, poi ne creo altri 3, nel primo inserisco i nomi degli studenti in maiuscolo, nel secondo inserisco gli studenti che hanno il totale dei voti superiore a 70 con un if else, mentre nell'ultimo inserisco gli studenti che hanno la media superiore al 70 e con un id superiore a 120 usando un and nell'if else

-----------------------------------------------------Snack 3-------------------------------------------------------------------

Creo l'oggetto bicilcette e inserisco i dati necessari, poi con un for each trovo la bici che pesa di meno e la stampo.

---------------------------------------------------- Snack 4-------------------------------------------------------------------
  creo l'oggetto team, poi con .map inserisco valori casuali dove serve. in fine destrutturo prendendo il nome e i falli subiti e stampo.