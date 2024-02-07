var xhr = new XMLHttpRequest()



xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200){
        const ingatlanok=JSON.parse(xhr.responseText)
        console.log("Ingatlanok",ingatlanok)

        var ingatlanFelsorolas = '' //Stringet létrehozom

        for (var ingatlan of Object.values(ingatlanok)){ //végigmegyek a json fájl elemein a féjl elemeinek az értékeivel
            var hosszuString = `
            <div>
            <h4>${ingatlan.cim}</h4>
            <p>${ingatlan.hirdetesDatuma}</p>
            <p>${ingatlan.kategoriaid}</p>
            <p>${ingatlan.kepUrl}</p>
            <p>${ingatlan.leiras}</p>
            <p>${ingatlan.tehermentes}</p>   
            </div>

            `    
            ingatlanFelsorolas += hosszuString
            //Stringet megtöltöm elemekkel


        }
        console.log(ingatlanFelsorolas)
        document.getElementById('offers').innerHTML = ingatlanFelsorolas
    }



}

xhr.open('GET', 'https://novenyek-2ac0d-default-rtdb.europe-west1.firebasedatabase.app/ingatlanok.json')
// valamiért nem látom a linket, rossz lehet a link? Böngészőbe sem
// KÖTŐJEL VOLT A BAJ

xhr.send()


/*Sokáig próbáltam a kiiratást, a json fájl objektumai értékén próbáltam végig iterálni 
amit egy tömmbe töltöttem volna fel, de egyszerűen nemtudom kiiratni a konzolra a feltöltött
tömböt.

......................

Sikerült a kiiratás a konzolra, a tömbben lévő objektumokat nemtudok egyenlővé tenni az innerHTML -el,
feltételezem az innerHTML nem fogad el mindenféle típusú adatot (szöveget biztosan elfogad)
Tömbböt lehetetlen stringé konvertálni, legalábbis nekem

......................

Feladtam a tömb kiiratását, Stringet iratok ki

*/