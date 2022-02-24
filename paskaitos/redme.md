# Paskaitų turinys


## 2022-02-14
#### Weather card:
Statinių duomenų iš backend'o paėmimas dinaminiu būdu ir atvaizdavimas naršyklėje

## 2022-02-15
#### Krepšinio varžybos:
Statinių duomenų iš backend'o paėmimas dinaminiu būdu ir atvaizdavimas naršyklėje

## 2022-02-16
#### Krepšinio varžybos:
Dinaminių duomenų iš backend'o paėmimas dinaminiu būdu ir atvaizdavimas naršyklėje

## 2022-02-17
#### Request tipai

## 2022-02-18
#### Krepšinio varžybos:
1. Formos kūrimas, duomenų iš formos perdavimas ir atvaizdavimas tiesiogiai į naršyklę.

2. Sukurkite formą frontend srityje su šiais laukeliais:
Roundas, Data, Lokacija, Laikas, Komanda1, Komanda2.
Javascript pagalba paimkite laukelių informaciją ir įstatykite jų reikšmes į dizaino maketą.
Po duomenų supildymo visų laukelių reikšmes padarykite tuščias.


## 2022-02-21
#### Krepšinio varžybos:
1. Sukurkite POST routerį backend platformoje. Į routerį perduokite laiko reikšmę ir sutikrinkite ją. Leiskite priskirti duomenis į dizainą tik tokiu atveju, jei įvestas laikas yra tarp 18:00 ir 21:30. Priešingu atveju išveskite žinutę: "Netinkamas mačo laikas".

2. Duomenų iš formos išsaugojimas '.json' formatu.

## 2022-02-22
#### Krepšinio varžybos:
1. Sukurkite naują routerį su kuriuo paimtumėte visus registruotus mačus iš duomenų bazės ir atvaizduokite juos naršyklėje.

2. Sukurkite naują mygtuką frontende ir routerį backende. Sutikrinkite ar duomenų bazės failas yra sukurtas ir rezultatą atvaizduokite frontend konsolėje.

3. Integruokite failo tikrinimą į failo skaitymo routerį ir duomenis grąžinkite tik tokiu atveju jei JSON failas buvo sukurtas. Priešingu atveju į frontendą grąžinkite žinutę: "Duomenų bazės failas nerastas".

## 2022-02-23
#### Krepšinio varžybos:
1. Duomenu is formos issaugojimas ir nauju pridejimas, neperrasant ankstesniu duomenu.

2. Duomenu is duombazes atvaizdavimas narsykleje '.forEach' metodu.

## 2022-02-24
#### Krepšinio varžybos:
1. Backende prie kiekvieno perduodamo įrašo priskirkite indeksą pavadinimu id. Tai yra indentifikatorius kuriuo remiantis bus galima kreiptis į kievieną iš jų individualiai. Indentifikatorių priskirkite automatiškai didėjimo tvarka. T.y. jei jei paskutinis elementas masyve turėjo objektą su indekso reikšme 1, sekanti reikšmė turi būti 2. Indentifikatoriai duomenų bazės faile kartotis negali!
Startinis id = 0
 
2. Duomenu trynimo mygtuko ijungimas