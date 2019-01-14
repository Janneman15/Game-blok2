var keuze1 = document.getElementById('keuze1');
var keuze2 = document.getElementById('keuze2');
var keuze3 = document.getElementById('keuze3');

var description = document.getElementById('description');
var inventoryItem = document.getElementById('inventoryItem');
var container = document.getElementById('container');
var inventory = {'key': false};
begin();
function begin(){
	keuze1.onclick = start;
	keuze2.style.display = 'none'
	keuze3.style.display = 'none'
	container.className = 'container-level0';
	inventoryItem.style.display = 'none'
}


function resetInventory(){
	inventory['key'] = false;
	inventoryItem.style.display = 'inline'
}


function levelDeur(){
	container.className = 'container-levelDeur'
	description.innerHTML = 'Je gaat kijken bij het huisje en probeert de deur open te doen maar hij blijkt op slot te zitten'
	keuze1.onclick = levelSleutel
	keuze1.innerHTML = 'Je gaat opzoek naar de sleutel'
	inventoryItem.style.display = 'none'

}

function start(){
	container.className = 'container-start';
	description.innerHTML = 'langzamerhand begin je je wat beter te voelen en ga je op zoek naar eten en drinken. Even later vind je een huisje. Wat doe je?' 
	keuze1.onclick = levelDeur;
	keuze3.onclick = level1;
	keuze1.innerHTML = 'Je gaat bij het huis kijken.'
	keuze3.innerHTML = 'Je loopt weg bij het huis en gaat verder opzoek naar wild voedsel.'
	keuze3.style.display = 'inline'
	inventoryItem.style.display = 'none'
}



function levelSleutel(){
	container.className = 'container-levelSleutel';
	inventoryItem.style.display = 'inline'
	description.innerHTML = 'In dit level ga je op zoek naar een sleutel die hier ergens zit verstopt, als je de sleutel vind kan je misschien het huisje in? Als je hem hebt gevonden en opgepakt ga dan verder.'
	keuze1.style.display = 'none'
	keuze2.style.display = 'none'
	keuze3.style.display = 'none'
	document.getElementById('inventoryItem').src = 'key.png'
	inventoryItem.onclick = pickUpKey;
	if(inventory['key'] != true) {
        keuze.onclick = pickUpKey;
       
    }

    else (inventory['key'] != false) 
        keuze.onclick = pickUpKey;
}

function pickUpKey(){
	alert('je hebt de sleutel opgepakt')
	inventoryItem.style.display = 'none';
	keuze1.style.display = 'inline'
	keuze1.innerHTML = 'Ga verder'
	keuze1.onclick = level2
	inventory['key'] = true;
	if (inventory['key'] != null) {
		description.innerHTML = 'je hebt de sleutel gevonden';
		
	}
	
}


function level1(){
	container.className = 'container-level1';
	keuze1.onclick = begin;
	keuze2.style.display = 'none'
	keuze3.style.display = 'none'
	description.innerHTML = 'Je loopt verder op zoek naar wild voedsel en komt een boom tegen met appels, je eet er één maar ze blijken giftig te zijn en je stikt. <br> GAME OVER!'
	keuze1.innerHTML = 'Restart'
	inventoryItem.style.display = 'none'
	
	
}

function level2(){
	container.className = 'container-level2';
	description.innerHTML = 'Goedzo, je hebt de sleutel gevonden. Nu kijken of de sleutel voor de deur is.'
	keuze1.onclick = level3
	keuze1.innerHTML = 'Ga het huis in.'
	inventoryItem.style.display = 'none'

}

function level3(){
	container.className = 'container-level3';
	description.innerHTML = 'Oke, je bent binnen. Je ziet super veel eten en drinken liggen, wat doe je?'
	keuze1.onclick = level4;
	keuze2.onclick = level5;
	keuze3.onclick = level4;
	keuze1.innerHTML = 'Je pakt een tas van de tafel en neemt zoveel mogelijk mee.'
	keuze2.innerHTML = 'Je blijft daar wonen totdat je een manier hebt gevonden om van het eiland af te komen.'
	keuze3.innerHTML = 'je eet een paar dingen, je drinkt wat en je gaat verder.'
	keuze2.style.display = 'inline'
	keuze3.style.display = 'inline'
	inventoryItem.style.display = 'none'
	

}

function level4(){
	container.className = 'container-level5';
	description.innerHTML = 'Je hebt wat eten en drinken op en je gaat verder opzoek naar een plek om te overnachten. Je zoekt lang, maar je vind maar niks. Wat doe je?' 
	keuze1.innerHTML = 'Je gaat terug naar het huisje om daar te overnachten.'
	keuze2.innerHTML = 'Je blijft zoeken totdat je iets vind.'
	keuze3.innerHTML = 'je blijft waar je bent en gaat overnachten op de koude grond.'
	keuze1.onclick = level5;
	keuze2.onclick = level6;
	keuze3.onclick = level7;
	inventoryItem.style.display = 'none'
}

function level5(){
	container.className = 'container-level4';
	description.innerHTML = 'je bent in het huisje en zoekt naar de slaapkamer om te overnachten. Zodra je de slaapkamer hebt gevonden plof je neer op het bed en val je in een diepe slaap, maar wat je niet weet is dat er zelfvernietigingssysteem zit op het huis en je word opgeblazen terwijl je slaapt. <br> GAME OVER!'
	keuze2.style.display = 'none'
	keuze3.style.display = 'none'
	keuze1.innerHTML = 'Restart'
	keuze1.onclick = begin
	inventoryItem.style.display = 'none'
	
}

function level6(){
	container.className = 'container-level10';
	description.innerHTML = 'Je blijft zoeken totdat je iets vind en je vind een hondenhok dat groot genoeg is voor jou om in te blijven overnachten. Als je eenmaal wakker bent geworden, hoor je een raar en angstaanjagend geluid. Wat doe je?'
	keuze1.innerHTML = 'Je kijkt toch omdat je wel nieuwschierig bent.'
	keuze2.innerHTML = 'Je kijkt niet en blijft gewoon zo stil mogelijk liggen en je wacht totdat je het geluid niet meer hoort.'
	keuze3.innerHTML = 'Je komt zo snel mogelijk uit het hondenhok uit en begint te rennen.'
	keuze1.onclick = level8
	keuze2.onclick = level9
	keuze3.onclick = level10
	inventoryItem.style.display = 'none'
}

function level7(){
	container.className = 'container-level9';
	description.innerHTML = 'je besluit om op de grond te overnachten, maar wat je niet weet is dat het vreselijk koud word in de nacht. Je gaat dood door bevriezing. <br> GAME OVER!'
	keuze1.innerHTML = 'Restart'
	keuze1.onclick = begin;
	keuze2.style.display = 'none'
	keuze3.style.display = 'none'
	inventoryItem.style.display = 'none'

}

function level8(){
	container.className = 'container-level8';
	description.innerHTML = 'Als je nieuwsgierig bent en gaat kijken wat het is kom je er al snel genoeg achter dat het een Utahraptor is. de Utahraptor valt je aan en eet je op. <br> GAME OVER!'
	keuze1.innerHTML = 'Restart'
	keuze1.onclick = begin
	keuze2.style.display = 'none'
	keuze3.style.display = 'none'
	inventoryItem.style.display = 'none'
	
}

function level9(){
	container.className = 'container-level6';
	description.innerHTML = 'Als je stil blijft liggen merk je dat het geluid steeds verder weg gaat en ga je naar buiten. Je ziet niks wat het geluid heeft kunnen maken en besluit verder te gaan.'
	keuze1.innerHTML = 'Loop verder'
	keuze1.onclick = levelBoot
	keuze2.style.display = 'none'
	keuze3.style.display = 'none'
	inventoryItem.style.display = 'none'
}

function level10(){
	container.className = 'container-level8';
	description.innerHTML = 'Als je wegrent dan zie je dat het geluid van een dier komt en het is geen normaal dier, het is een Utahraptor! Je rent zo snel mogelijk weg, maar de Utahraptor staat bekend om zijn snelheid en haalt je in. de Utahraptor valt je aan en eet je op. <br> GAME OVER!'
	keuze1.innerHTML = 'Restart'
	keuze1.onclick = begin
	keuze2.style.display = 'none'
	keuze3.style.display = 'none'
	inventoryItem.style.display = 'none'
	
}
function levelBoot(){
	container.className = 'container-levelBoot'
	description.innerHTML = 'Als je eenmaal verder bent gegaan kom je weer uit bij de zee en ziet een boot liggen. Ga je er op af of probeer je een andere manier te vinden om van het eiland af te komen?'
	keuze1.innerHTML = 'Je gaat op de boot af en probeert van het eiland af te komen.'
	keuze2.style.display = 'inline'
	keuze2.innerHTML = 'Je loopt weg en probeert op een ander manier het eiland af te komen.'
	keuze1.onclick = levelFinish
	keuze2.onclick = levelBootDood
	inventoryItem.style.display = 'none'
}

function levelBootDood(){
	container.className = 'container-levelDood'
	description.innerHTML = ' Je loopt dagen lang te zoeken maar vind niks om het eiland mee af te komen en sterft. <br> GAME OVER!'
	keuze1.style.display = 'none'
	keuze2.style.display = 'none'
	inventoryItem.style.display = 'none'
	
}

function levelFinish(){
	container.className = 'container-levelFinish'
	description.innerHTML = 'Eenmaal aangekomen bij de boot probeer je hem te starten en het lukt. Je vaart weg van het eiland. <br> GOED GEDAAN!, GAME VOLTOOID!'
	keuze1.style.display = 'none'
	keuze2.style.display = 'none'
	inventoryItem.style.display = 'none'
}
