const questionSpace = document.getElementById("question");
const button1 = document.getElementById("option1");
const button2 = document.getElementById("option2");
const button3 = document.getElementById("option3");
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");





let questions = [
    {
        category: "Allgemeinwissen",
        question: "In welchem Jahr fiel die Berliner Mauer?",
        options: ["1985", "1989", "1991"],
        correctAnswer: "1989"
    },
    {   
        category: "Allgemeinwissen",
        question: "Wer war der erste Präsident der Vereinigten Staaten?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
        correctAnswer: "George Washington"
    },
    {
        category: "Medizin",
        name: "heartChambers",
        question: "Wie viele Kammern hat das menschliche Herz?",
        options: ["2", "4", "6"],
        correctAnswer: "4"
    },
    {
        category: "Medizin",
        name: "bloodType",
        question: "Welche Blutgruppe gilt als Universalspender?",
        options: ["A", "B", "0 negativ"],
        correctAnswer: "0 negativ"
    },
    {
        category: "Ernährung",
        name: "vitaminC",
        question: "Welches Vitamin ist vor allem in Zitrusfrüchten enthalten?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D"],
        correctAnswer: "Vitamin C"
    },
    {
        category: "Medizin",
        name: "brainLobes",
        question: "Wie viele große Lappen hat das menschliche Gehirn?",
        options: ["2", "4", "6"],
        correctAnswer: "4"
    },
    {
        category: "Medizin",
        name: "oxygenTransport",
        question: "Welches Molekül transportiert Sauerstoff im Blut?",
        options: ["Hämoglobin", "Insulin", "Adrenalin"],
        correctAnswer: "Hämoglobin"
    },
    {
        category: "Allgemeinwissen",
        name: "oldestUniversity",
        question: "Welche ist die älteste Universität Europas?",
        options: ["Oxford", "Bologna", "Sorbonne"],
        correctAnswer: "Bologna"
    },
    {
        category: "Allgemeinwissen",
        name: "einsteinTheory",
        question: "Welche berühmte Theorie stellte Albert Einstein auf?",
        options: ["Relativitätstheorie", "Quantentheorie", "Evolutionstheorie"],
        correctAnswer: "Relativitätstheorie"
    },
    {
        category: "Allgemeinwissen",
        name: "earthLayers",
        question: "Wie viele Hauptschichten hat die Erde?",
        options: ["3", "4", "5"],
        correctAnswer: "4"
    },
    {
        category: "Allgemeinwissen",
        name: "largestOcean",
        question: "Welches ist der größte Ozean der Welt?",
        options: ["Atlantischer Ozean", "Pazifischer Ozean", "Indischer Ozean"],
        correctAnswer: "Pazifischer Ozean"
    },
    {
        category: "Medizin",
        name: "humanBones",
        question: "Wie viele Knochen hat der menschliche Körper im Durchschnitt?",
        options: ["206", "300", "180"],
        correctAnswer: "206"
    },
    {
        category: "Medizin",
        name: "bloodPressure",
        question: "Welche ist die normale Blutdruckmessung für einen gesunden Erwachsenen?",
        options: ["90/60", "120/80", "140/90"],
        correctAnswer: "120/80"
    },
    {
        category: "Allgemeinwissen",
        name: "planets",
        question: "Wie viele Planeten hat unser Sonnensystem?",
        options: ["7", "8", "9"],
        correctAnswer: "8"
    },
    {
        category: "Medizin",
        name: "largestOrgan",
        question: "Welches ist das größte Organ des menschlichen Körpers?",
        options: ["Herz", "Leber", "Haut"],
        correctAnswer: "Haut"
    },
    {
        category: "Medizin",
        name: "bodyWater",
        question: "Wie viel Prozent des menschlichen Körpers besteht aus Wasser?",
        options: ["50-60%", "70-80%", "30-40%"],
        correctAnswer: "50-60%"
    },
    {
        category: "Medizin",
        name: "nurseResponsibility",
        question: "Welche Aufgabe hat eine Krankenschwester hauptsächlich?",
        options: ["Medikamente verschreiben", "Patienten betreuen und pflegen", "Operationen durchführen"],
        correctAnswer: "Patienten betreuen und pflegen"
    },
    {
        category: "Medizin",
        name: "woundCare",
        question: "Welche der folgenden Methoden ist grundlegend für die Wundversorgung?",
        options: ["Sterile Reinigung", "Direkte Antibiotikagabe", "Ausschließlich Verbandwechsel"],
        correctAnswer: "Sterile Reinigung"
    },
    {
        category: "Allgemeinwissen",
        name: "oldestTree",
        question: "Welcher Baum gilt als ältester lebender Baum der Welt?",
        options: ["Baobab", "Methuselah", "Eiche"],
        correctAnswer: "Methuselah"
    },
    {
        category: "Allgemeinwissen",
        name: "largestAnimal",
        question: "Welches ist das größte Tier der Erde?",
        options: ["Afrikanischer Elefant", "Blauwal", "Giraffe"],
        correctAnswer: "Blauwal"
    },
    {
        category: "Weltraum",
        name: "smallestPlanet",
        question: "Welcher Planet ist der kleinste in unserem Sonnensystem?",
        options: ["Mars", "Merkur", "Venus"],
        correctAnswer: "Merkur"
    },
    {
        category: "Weltraum",
        name: "firstManOnMoon",
        question: "Wer war der erste Mensch, der den Mond betrat?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin"],
        correctAnswer: "Neil Armstrong"
    },
    {
        category: "Allgemeinwissen",
        name: "strongestMaterial",
        question: "Welches Material gilt als das härteste natürliche Material der Erde?",
        options: ["Diamant", "Kohlenstoff", "Titan"],
        correctAnswer: "Diamant"
    },
    {
        category: "Tierwelt",
        name: "fastestAnimal",
        question: "Welches ist das schnellste Tier der Welt?",
        options: ["Gepard", "Falke", "Jaguar"],
        correctAnswer: "Falke"
    },
    {
        category: "Allgemeinwissen",
        name: "largestContinent",
        question: "Welcher Kontinent ist der größte der Erde?",
        options: ["Afrika", "Asien", "Europa"],
        correctAnswer: "Asien"
    },
    {
        category: "Allgemeinwissen",
        name: "longestRiver",
        question: "Welcher Fluss ist der längste der Welt?",
        options: ["Amazonas", "Nil", "Yangtse"],
        correctAnswer: "Amazonas"
    },
    {
        category: "Allgemeinwissen",
        name: "deepestOcean",
        question: "Welcher Ozean ist der tiefste der Welt?",
        options: ["Atlantischer Ozean", "Pazifischer Ozean", "Indischer Ozean"],
        correctAnswer: "Pazifischer Ozean"
    },
    {
        category: "Allgemeinwissen",
        name: "firstComputer",
        question: "Welches war der erste programmierbare Computer?",
        options: ["Enigma", "Colossus", "Z3"],
        correctAnswer: "Z3"
    },
    {
        category: "Allgemeinwissen",
        name: "worldsLargestCity",
        question: "Welche Stadt ist die größte der Welt nach Bevölkerung?",
        options: ["Tokio", "New York", "Peking"],
        correctAnswer: "Tokio"
    },
    {
        category: "Allgemeinwissen",
        name: "lightSpeed",
        question: "Mit welcher Geschwindigkeit bewegt sich Licht im Vakuum?",
        options: ["300.000 km/s", "150.000 km/s", "500.000 km/s"],
        correctAnswer: "300.000 km/s"
    },
    {
        category: "Weltraum",
        name: "earthRotation",
        question: "Wie lange dauert es, bis die Erde einmal um sich selbst rotiert?",
        options: ["24 Stunden", "48 Stunden", "12 Stunden"],
        correctAnswer: "24 Stunden"
    },
    {
        category: "Allgemeinwissen",
        name: "largestDesert",
        question: "Welches ist die größte Wüste der Welt?",
        options: ["Sahara", "Arktische Wüste", "Gobi"],
        correctAnswer: "Arktische Wüste"
    },
    {
        category: "Chemie",
        name: "chemicalElement",
        question: "Welches chemische Element hat das Symbol 'O'?",
        options: ["Ozon", "Oxygen", "Osmium"],
        correctAnswer: "Oxygen"
    },
    {
        category: "Allgemeinwissen",
        name: "firstTelevision",
        question: "Wer erfand das erste funktionierende Fernsehgerät?",
        options: ["Nikola Tesla", "John Logie Baird", "Philo Farnsworth"],
        correctAnswer: "John Logie Baird"
    },
    {
        category: "Medizin",
        name: "humanChromosomes",
        question: "Wie viele Chromosomen hat der Mensch im Normalfall?",
        options: ["46", "48", "44"],
        correctAnswer: "46"
    },
    {
        category: "Chemie",
        name: "heaviestElement",
        question: "Welches Element hat die höchste Atommasse?",
        options: ["Uran", "Plutonium", "Oganesson"],
        correctAnswer: "Oganesson"
    },
    {
        category: "Allgemeinwissen",
        name: "oldestCivilization",
        question: "Welche Zivilisation gilt als die älteste bekannte der Welt?",
        options: ["Ägypten", "Mesopotamien", "Indus-Kultur"],
        correctAnswer: "Mesopotamien"
    },
    {
        category: "Allgemeinwissen",
        name: "nobelPrize",
        question: "Wer erhielt den ersten Nobelpreis für Physik?",
        options: ["Albert Einstein", "Marie Curie", "Wilhelm Röntgen"],
        correctAnswer: "Wilhelm Röntgen"
    },
    {
        category: "Weltraum",
        name: "lightYear",
        question: "Was ist ein Lichtjahr?",
        options: ["Eine Zeiteinheit", "Eine Entfernungsgröße", "Eine Masseeinheit"],
        correctAnswer: "Eine Entfernungsgröße"
    },
    {
        category: "Medizin",
        name: "heartRate",
        question: "Was ist der normale Ruhepuls eines gesunden Erwachsenen?",
        options: ["60-80 Schläge pro Minute", "80-100 Schläge pro Minute", "40-60 Schläge pro Minute"],
        correctAnswer: "60-80 Schläge pro Minute"
    },
    {
        category: "Medizin",
        name: "bodyTemperature",
        question: "Welche Temperatur gilt als normale Körpertemperatur für einen Erwachsenen?",
        options: ["36,5°C - 37,5°C", "37,5°C - 38,5°C", "35,5°C - 36,5°C"],
        correctAnswer: "36,5°C - 37,5°C"
    },
    {
        category: "Medizin",
        name: "systolicPressure",
        question: "Welcher Wert beschreibt den systolischen Blutdruck?",
        options: ["Der Druck während der Herzkontraktion", "Der Druck während der Entspannung des Herzens", "Der Durchschnittsdruck im Blutkreislaufsystem"],
        correctAnswer: "Der Druck während der Herzkontraktion"
    },
    {
        category: "Medizin",
        name: "diabetesType",
        question: "Welche Art von Diabetes wird hauptsächlich durch Insulinresistenz verursacht?",
        options: ["Typ 1", "Typ 2", "Typ 3"],
        correctAnswer: "Typ 2"
    },
    {
        category: "Medizin",
        name: "bloodCirculation",
        question: "Welches Organ ist direkt verantwortlich für den Blutkreislauf im Körper?",
        options: ["Lunge", "Leber", "Herz"],
        correctAnswer: "Herz"
    },
    {
        category: "Medizin",
        name: "vaccination",
        question: "Welches Virus wird durch die Masernimpfung verhindert?",
        options: ["Masernvirus", "Grippevirus", "Hepatitisvirus"],
        correctAnswer: "Masernvirus"
    },
    {
        category: "Medizin",
        name: "medicationForFever",
        question: "Welches Medikament wird typischerweise zur Behandlung von Fieber eingesetzt?",
        options: ["Paracetamol", "Ibuprofen", "Antibiotikum"],
        correctAnswer: "Paracetamol"
    },
    {
        category: "Medizin",
        name: "anatomyHeart",
        question: "Wie viele Kammern hat das menschliche Herz?",
        options: ["2", "4", "6"],
        correctAnswer: "4"
    },
    {
        category: "Allgemeinwissen",
        name: "vitaminD",
        question: "Welches Vitamin wird vor allem durch Sonnenlicht auf der Haut gebildet?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D"],
        correctAnswer: "Vitamin D"
    },
    {
        category: "Allgemeinwissen",
        name: "respiratoryRate",
        question: "Wie viele Atemzüge nimmt ein Erwachsener durchschnittlich pro Minute?",
        options: ["10-20 Atemzüge", "20-30 Atemzüge", "5-10 Atemzüge"],
        correctAnswer: "10-20 Atemzüge"
    },
    {
        category: "Medizin",
        name: "highBloodPressure",
        question: "Was bezeichnet der Begriff Hypertonie?",
        options: ["Zu niedriger Blutdruck", "Normaler Blutdruck", "Zu hoher Blutdruck"],
        correctAnswer: "Zu hoher Blutdruck"
    },
    {
        category: "Medizin",
        name: "firstAid",
        question: "Was ist der erste Schritt bei einer CPR (Herz-Lungen-Wiederbelebung)?",
        options: ["Herzmassage beginnen", "Sauerstoff verabreichen", "Notrufnummer anrufen"],
        correctAnswer: "Notrufnummer anrufen"
    },
    {
        category: "Medizin",
        name: "strokeSymptoms",
        question: "Welches ist ein häufiges Symptom eines Schlaganfalls?",
        options: ["Krämpfe", "Plötzliche Sprachstörungen", "Unwohlsein im Magen"],
        correctAnswer: "Plötzliche Sprachstörungen"
    },
    {
        category: "Medizin",
        name: "redBloodCells",
        question: "Was ist die Hauptaufgabe der roten Blutkörperchen?",
        options: ["Sauerstoff transportieren", "Immunabwehr", "Blutgerinnung"],
        correctAnswer: "Sauerstoff transportieren"
    },
    {
        category: "Medizin",
        name: "hygiene",
        question: "Wie lang sollte man sich mindestens die Hände waschen, um die Verbreitung von Krankheitserregern zu verhindern?",
        options: ["10 Sekunden", "20 Sekunden", "30 Sekunden"],
        correctAnswer: "20 Sekunden"
    },
    {
        category: "Medizin",
        name: "antibiotics",
        question: "Gegen welche Art von Krankheitserregern wirken Antibiotika?",
        options: ["Bakterien", "Viren", "Pilze"],
        correctAnswer: "Bakterien"
    },
    {
        category: "Medizin",
        name: "allergicReaction",
        question: "Welches Symptom ist typisch für eine allergische Reaktion?",
        options: ["Rötung und Schwellung der Haut", "Starke Kopfschmerzen", "Husten und Fieber"],
        correctAnswer: "Rötung und Schwellung der Haut"
    },
    {
        category: "Allgemeinwissen",
        name: "treatmentForBurns",
        question: "Wie sollte man einen Sonnenbrand am besten behandeln?",
        options: ["Kalte Kompressen und Feuchtigkeitscreme", "Kochendes Wasser", "Heißes Bad"],
        correctAnswer: "Kalte Kompressen und Feuchtigkeitscreme"
    },
    {
        category: "Medizin",
        name: "firstAidForFracture",
        question: "Was sollte man tun, wenn man einen Knochenbruch vermutet?",
        options: ["Die betroffene Stelle ruhigstellen und sofort einen Arzt aufsuchen", "Die betroffene Stelle massieren", "Den Bruch sofort wieder einrenken"],
        correctAnswer: "Die betroffene Stelle ruhigstellen und sofort einen Arzt aufsuchen"
    },
    {
        category: "Medizin",
        name: "bloodDonation",
        question: "Wie viel Blut wird normalerweise bei einer Blutspende entnommen?",
        options: ["250 ml", "500 ml", "1000 ml"],
        correctAnswer: "500 ml"
    },
    {
        category: "Medizin",
        name: "respiratoryDiseases",
        question: "Welches ist eine häufige Atemwegserkrankung?",
        options: ["Asthma", "Diabetes", "Migräne"],
        correctAnswer: "Asthma"
    },
    {
        category: "Allgemeinwissen",
        name: "capitalOfFrance",
        question: "Was ist die Hauptstadt von Frankreich?",
        options: ["Paris", "London", "Berlin"],
        correctAnswer: "Paris"
    },
    {
        category: "Allgemeinwissen",
        name: "highestMountain",
        question: "Welcher ist der höchste Berg der Welt?",
        options: ["K2", "Mount Everest", "Lagginhorn"],
        correctAnswer: "Mount Everest"
    },
    {
        category: "Weltraum",
        name: "largestPlanet",
        question: "Welcher Planet ist der größte in unserem Sonnensystem?",
        options: ["Jupiter", "Saturn", "Erde"],
        correctAnswer: "Jupiter"
    },
    {
        category: "Weltraum",
        name: "firstManInSpace",
        question: "Wer war der erste Mensch im Weltall?",
        options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin"],
        correctAnswer: "Yuri Gagarin"
    },
    {
        category: "Allgemeinwissen",
        name: "longestHighway",
        question: "Welche ist die längste Straße der Welt?",
        options: ["Trans-Siberische Autobahn", "Route 66", "Panamericana"],
        correctAnswer: "Panamericana"
    },
    {
        category: "Allgemeinwissen",
        name: "largestIsland",
        question: "Welche ist die größte Insel der Welt?",
        options: ["Grönland", "Neuguinea", "Borneo"],
        correctAnswer: "Grönland"
    },
    {
        category: "Tierwelt",
        name: "fastestBird",
        question: "Welches ist der schnellste Vogel der Welt?",
        options: ["Peregrine Falke", "Adler", "Strauß"],
        correctAnswer: "Peregrine Falke"
    },
    {
        category: "Allgemeinwissen",
        name: "smallestCountry",
        question: "Welches ist das kleinste Land der Welt?",
        options: ["Monaco", "Vatikanstadt", "San Marino"],
        correctAnswer: "Vatikanstadt"
    },
    {
        category: "Allgemeinwissen",
        name: "oldestBuilding",
        question: "Welches ist das älteste Gebäude der Welt?",
        options: ["Die Pyramiden von Gizeh", "Stonehenge", "Das Kolosseum"],
        correctAnswer: "Die Pyramiden von Gizeh"
    },
    {
        category: "Allgemeinwissen",
        name: "largestRiver",
        question: "Welcher Fluss ist der längste der Welt?",
        options: ["Amazonas", "Nil", "Yangtse"],
        correctAnswer: "Nil"
    },
    {
        category: "Allgemeinwissen",
        name: "deutscheBundeskanzler",
        question: "Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?",
        options: ["Konrad Adenauer", "Willy Brandt", "Helmut Schmidt"],
        correctAnswer: "Konrad Adenauer"
      },
      {
        category: "Allgemeinwissen",
        name: "europaeischeUnion",
        question: "Wann wurde die Europäische Union offiziell gegründet?",
        options: ["1993", "2000", "1986"],
        correctAnswer: "1993"
      },
      {
        category: "Allgemeinwissen",
        name: "geschichteRoms",
        question: "Welches Ereignis markiert das Ende des Römischen Reiches?",
        options: ["Fall von Rom", "Kreuzzüge", "Industrialisierung"],
        correctAnswer: "Fall von Rom"
      },
      {
        category: "Allgemeinwissen",
        name: "deutscheEinheit",
        question: "Wann wurde die deutsche Wiedervereinigung vollzogen?",
        options: ["1989", "1990", "1991"],
        correctAnswer: "1990"
      },
      {
        category: "Allgemeinwissen",
        name: "berlinerLuftbruecke",
        question: "Welches Jahr markierte den Beginn der Berliner Luftbrücke?",
        options: ["1948", "1945", "1950"],
        correctAnswer: "1948"
      },
      {
        category: "Allgemeinwissen",
        name: "technischeRevolution",
        question: "Welcher Erfindung wird oft der Beginn der industriellen Revolution zugeschrieben?",
        options: ["Dampfmaschine", "Elektrizität", "Telefon"],
        correctAnswer: "Dampfmaschine"
      },
      {
        category: "Allgemeinwissen",
        name: "magnaCarta",
        question: "In welchem Jahr wurde die Magna Carta unterzeichnet?",
        options: ["1215", "1066", "1492"],
        correctAnswer: "1215"
      },
      {
        category: "Allgemeinwissen",
        name: "amerikanischeUnabhaengigkeit",
        question: "Wann erklärte die USA ihre Unabhängigkeit?",
        options: ["1776", "1789", "1804"],
        correctAnswer: "1776"
      },
      {
        category: "Allgemeinwissen",
        name: "gluecklicheFarbe",
        question: "Welche Farbe wird oft mit Glück in vielen Kulturen assoziiert?",
        options: ["Rot", "Grün", "Gelb"],
        correctAnswer: "Grün"
      },
      {
        category: "Allgemeinwissen",
        name: "weltreligionen",
        question: "Welche Religion hat die weltweit größte Anhängerschaft?",
        options: ["Christentum", "Islam", "Hinduismus"],
        correctAnswer: "Christentum"
      },
      {
        category: "Allgemeinwissen",
        name: "gravitationsgesetz",
        question: "Wer formulierte das Gravitationsgesetz?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"],
        correctAnswer: "Isaac Newton"
      },
      {
        category: "Allgemeinwissen",
        name: "monaLisa",
        question: "Welcher Künstler malte die Mona Lisa?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael"],
        correctAnswer: "Leonardo da Vinci"
      },
      {
        category: "Allgemeinwissen",
        name: "literaturpreis1954",
        question: "Welcher Autor erhielt den Nobelpreis für Literatur im Jahr 1954?",
        options: ["Ernest Hemingway", "William Faulkner", "John Steinbeck"],
        correctAnswer: "Ernest Hemingway"
      },
      {
        category: "Allgemeinwissen",
        name: "globalisierung",
        question: "Welcher Begriff beschreibt den weltweiten Austausch von Waren, Informationen und Ideen?",
        options: ["Globalisierung", "Isolation", "Regionalisierung"],
        correctAnswer: "Globalisierung"
      },
      {
        category: "Allgemeinwissen",
        name: "ersteOlympischenSpiele",
        question: "In welcher Stadt fanden die ersten modernen Olympischen Spiele statt?",
        options: ["Athen", "Paris", "London"],
        correctAnswer: "Athen"
      },
    
      // Medizin (15 Fragen)
      {
        category: "Medizin",
        name: "vaccinationSchedule",
        question: "Welcher Impfstoff wird regelmäßig in der Grippesaison verabreicht?",
        options: ["Influenza-Impfstoff", "Masern-Impfstoff", "Tetanus-Impfstoff"],
        correctAnswer: "Influenza-Impfstoff"
      },
      {
        category: "Medizin",
        name: "cardiacArrest",
        question: "Was ist eine häufige Ursache für einen Herzstillstand?",
        options: ["Myokardinfarkt", "Kopfschmerz", "Fieber"],
        correctAnswer: "Myokardinfarkt"
      },
      {
        category: "Medizin",
        name: "bloodSugar",
        question: "Welcher Test wird zur Diagnose von Diabetes verwendet?",
        options: ["Blutzuckertest", "Röntgenaufnahme", "EKG"],
        correctAnswer: "Blutzuckertest"
      },
      {
        category: "Medizin",
        name: "lungCapacity",
        question: "Was misst man beim Lungenfunktionstest?",
        options: ["Atemvolumen", "Herzfrequenz", "Blutdruck"],
        correctAnswer: "Atemvolumen"
      },
      {
        category: "Medizin",
        name: "boneDensity",
        question: "Welcher Test wird zur Diagnose von Osteoporose eingesetzt?",
        options: ["Knochendichtemessung", "Ultraschall", "MRT"],
        correctAnswer: "Knochendichtemessung"
      },
      {
        category: "Medizin",
        name: "allergyTest",
        question: "Welche Methode dient der Diagnose von Allergien?",
        options: ["Haut-Prick-Test", "Blutdruckmessung", "EKG"],
        correctAnswer: "Haut-Prick-Test"
      },
      {
        category: "Medizin",
        name: "renalFunction",
        question: "Welcher Wert ist ein Indikator für die Nierenfunktion?",
        options: ["Kreatinin", "Cholesterin", "Glukose"],
        correctAnswer: "Kreatinin"
      },
      {
        category: "Medizin",
        name: "visionTest",
        question: "Welcher Test wird zur Überprüfung des Sehvermögens durchgeführt?",
        options: ["Sehschärfe-Test", "Hörtest", "Blutzuckertest"],
        correctAnswer: "Sehschärfe-Test"
      },
      {
        category: "Medizin",
        name: "hearingTest",
        question: "Wie nennt man den Test zur Überprüfung des Hörvermögens?",
        options: ["Audiometrie", "Spirometrie", "Dermatologie"],
        correctAnswer: "Audiometrie"
      },
      {
        category: "Medizin",
        name: "dentalCheck",
        question: "Wie oft wird empfohlen, zur Kariesprophylaxe den Zahnarzt aufzusuchen?",
        options: ["Einmal jährlich", "Alle 2 Jahre", "Alle 5 Jahre"],
        correctAnswer: "Einmal jährlich"
      },
      {
        category: "Medizin",
        name: "vaccineHerdImmunity",
        question: "Was versteht man unter Herdenimmunität?",
        options: ["Schutz der Gemeinschaft durch Impfungen", "Impfstoffentwicklung", "Erkrankung einer Person"],
        correctAnswer: "Schutz der Gemeinschaft durch Impfungen"
      },
      {
        category: "Medizin",
        name: "physicalTherapy",
        question: "Welche Therapieform unterstützt die Rehabilitation nach Verletzungen?",
        options: ["Physiotherapie", "Chemotherapie", "Strahlentherapie"],
        correctAnswer: "Physiotherapie"
      },
      {
        category: "Medizin",
        name: "mentalHealth",
        question: "Welcher Begriff bezeichnet den Zustand seelischen Wohlbefindens?",
        options: ["Psychische Gesundheit", "Infektion", "Tumor"],
        correctAnswer: "Psychische Gesundheit"
      },
      {
        category: "Medizin",
        name: "emergencyResponse",
        question: "Welche Maßnahme ist bei einer allergischen Reaktion mit Atemnot am wichtigsten?",
        options: ["Adrenalin-Injektion", "Schmerzmittel geben", "Beruhigung"],
        correctAnswer: "Adrenalin-Injektion"
      },
      {
        category: "Medizin",
        name: "infectionPrevention",
        question: "Welche Praxis hilft am besten, Infektionen im Krankenhaus zu verhindern?",
        options: ["Händewaschen", "Fenster öffnen", "Bewegungsmangel"],
        correctAnswer: "Händewaschen"
      },
    
      // Ernährung (15 Fragen)
      {
        category: "Ernährung",
        name: "balancedDiet",
        question: "Was versteht man unter einer ausgewogenen Ernährung?",
        options: ["Alle Nährstoffgruppen in richtigen Anteilen", "Nur Proteine essen", "Nur Obst und Gemüse"],
        correctAnswer: "Alle Nährstoffgruppen in richtigen Anteilen"
      },
      {
        category: "Ernährung",
        name: "vitaminDSource",
        question: "Welches Lebensmittel ist reich an Vitamin D?",
        options: ["Fetter Fisch", "Brot", "Kartoffeln"],
        correctAnswer: "Fetter Fisch"
      },
      {
        category: "Ernährung",
        name: "fiberIntake",
        question: "Welche Lebensmittelgruppe ist besonders ballaststoffreich?",
        options: ["Vollkornprodukte", "Süßigkeiten", "Fleisch"],
        correctAnswer: "Vollkornprodukte"
      },
      {
        category: "Ernährung",
        name: "waterIntake",
        question: "Wie viel Wasser sollte ein Erwachsener täglich trinken?",
        options: ["Etwa 2 Liter", "Etwa 500 ml", "Etwa 5 Liter"],
        correctAnswer: "Etwa 2 Liter"
      },
      {
        category: "Ernährung",
        name: "antioxidants",
        question: "Welche Vitamine wirken als Antioxidantien?",
        options: ["Vitamin C und E", "Vitamin A und D", "Vitamin K und B12"],
        correctAnswer: "Vitamin C und E"
      },
      {
        category: "Ernährung",
        name: "healthyFats",
        question: "Welche Fette gelten als gesund?",
        options: ["Ungesättigte Fette", "Gesättigte Fette", "Transfette"],
        correctAnswer: "Ungesättigte Fette"
      },
      {
        category: "Ernährung",
        name: "dairyBenefits",
        question: "Was liefern Milchprodukte hauptsächlich?",
        options: ["Kalzium", "Vitamin C", "Ballaststoffe"],
        correctAnswer: "Kalzium"
      },
      {
        category: "Ernährung",
        name: "sugarIntake",
        question: "Warum sollte man den Zuckerkonsum begrenzen?",
        options: ["Risiko von Diabetes", "Besserer Geschmack", "Mehr Energie"],
        correctAnswer: "Risiko von Diabetes"
      },
      {
        category: "Ernährung",
        name: "organicFood",
        question: "Was zeichnet Bio-Lebensmittel aus?",
        options: ["Weniger Pestizide", "Höherer Zuckergehalt", "Mehr Zusatzstoffe"],
        correctAnswer: "Weniger Pestizide"
      },
      {
        category: "Ernährung",
        name: "mealFrequency",
        question: "Wie viele Mahlzeiten werden üblicherweise als gesund betrachtet?",
        options: ["3 Hauptmahlzeiten", "1 Hauptmahlzeit", "6 Hauptmahlzeiten"],
        correctAnswer: "3 Hauptmahlzeiten"
      },
      {
        category: "Ernährung",
        name: "fruitBenefits",
        question: "Welcher Vorteil ist mit dem regelmäßigen Verzehr von Obst verbunden?",
        options: ["Vitamine und Mineralstoffe", "Zuckerüberschuss", "Fettaufbau"],
        correctAnswer: "Vitamine und Mineralstoffe"
      },
      {
        category: "Ernährung",
        name: "mineralIntake",
        question: "Welches Mineral ist wichtig für die Knochengesundheit?",
        options: ["Kalzium", "Eisen", "Natrium"],
        correctAnswer: "Kalzium"
      },
      {
        category: "Ernährung",
        name: "fiberBenefits",
        question: "Welcher gesundheitliche Vorteil ist mit einer ballaststoffreichen Ernährung verbunden?",
        options: ["Verbesserte Verdauung", "Schlechtere Verdauung", "Erhöhter Blutzuckerspiegel"],
        correctAnswer: "Verbesserte Verdauung"
      },
      {
        category: "Ernährung",
        name: "omega3",
        question: "In welchen Lebensmitteln findet man Omega-3-Fettsäuren?",
        options: ["Fisch und Nüsse", "Fleisch und Käse", "Brot und Reis"],
        correctAnswer: "Fisch und Nüsse"
      },
      {
        category: "Ernährung",
        name: "processedFood",
        question: "Warum sollte man stark verarbeitete Lebensmittel meiden?",
        options: ["Hoher Zusatzstoffgehalt", "Günstiger Preis", "Bessere Nährstoffe"],
        correctAnswer: "Hoher Zusatzstoffgehalt"
      },
    
      // Weltraum (15 Fragen)
      {
        category: "Weltraum",
        name: "solarSystem",
        question: "Welches ist der sonnennächste Planet?",
        options: ["Merkur", "Venus", "Erde"],
        correctAnswer: "Merkur"
      },
      {
        category: "Weltraum",
        name: "blackHole",
        question: "Was ist ein Schwarzes Loch?",
        options: ["Ein Raum mit starker Gravitation", "Ein riesiger Stern", "Ein Planet"],
        correctAnswer: "Ein Raum mit starker Gravitation"
      },
      {
        category: "Weltraum",
        name: "constellation",
        question: "Wie nennt man ein Sternbild?",
        options: ["Konstellation", "Galaxie", "Nebula"],
        correctAnswer: "Konstellation"
      },
      {
        category: "Weltraum",
        name: "spaceStation",
        question: "Welche Raumstation wurde von der NASA betrieben?",
        options: ["Mir", "ISS", "Tiangong"],
        correctAnswer: "ISS"
      },
      {
        category: "Weltraum",
        name: "spaceShuttle",
        question: "Was war das Space Shuttle?",
        options: ["Wiederverwendbares Raumfahrzeug", "Rakete", "Satellit"],
        correctAnswer: "Wiederverwendbares Raumfahrzeug"
      },
      {
        category: "Weltraum",
        name: "marsRover",
        question: "Welcher Rover erkundet den Mars?",
        options: ["Curiosity", "Voyager", "Pioneer"],
        correctAnswer: "Curiosity"
      },
      {
        category: "Weltraum",
        name: "asteroidBelt",
        question: "Was befindet sich zwischen Mars und Jupiter?",
        options: ["Asteroidengürtel", "Kuipergürtel", "Oortsche Wolke"],
        correctAnswer: "Asteroidengürtel"
      },
      {
        category: "Weltraum",
        name: "redPlanet",
        question: "Welcher Planet wird als der Rote Planet bezeichnet?",
        options: ["Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
      },
      {
        category: "Weltraum",
        name: "exoplanets",
        question: "Wie nennt man Planeten, die einen anderen Stern umkreisen?",
        options: ["Exoplaneten", "Mond", "Kometen"],
        correctAnswer: "Exoplaneten"
      },
      {
        category: "Weltraum",
        name: "comet",
        question: "Was ist ein Komet?",
        options: ["Himmelskörper aus Eis und Staub", "Ein Planet", "Ein Stern"],
        correctAnswer: "Himmelskörper aus Eis und Staub"
      },
      {
        category: "Weltraum",
        name: "spaceTelescope",
        question: "Welches Teleskop schickte atemberaubende Bilder des Alls?",
        options: ["Hubble", "Spitzer", "Kepler"],
        correctAnswer: "Hubble"
      },
      {
        category: "Weltraum",
        name: "gravity",
        question: "Was bestimmt die Schwerkraft eines Himmelskörpers?",
        options: ["Masse", "Temperatur", "Farbe"],
        correctAnswer: "Masse"
      },
      {
        category: "Weltraum",
        name: "lunarModule",
        question: "Welche Mission brachte Menschen zum Mond?",
        options: ["Apollo 11", "Gemini 4", "Mercury-Redstone"],
        correctAnswer: "Apollo 11"
      },
      {
        category: "Weltraum",
        name: "spaceProbe",
        question: "Was ist der Zweck einer Raumsonde?",
        options: ["Daten sammeln", "Menschen transportieren", "Raumstation bauen"],
        correctAnswer: "Daten sammeln"
      },
      {
        category: "Weltraum",
        name: "celestialNavigation",
        question: "Wodurch orientierten sich Seefahrer vor der Erfindung moderner Navigationsmittel?",
        options: ["Sterne", "Magnetfelder", "Windrichtung"],
        correctAnswer: "Sterne"
      },
    
      // Chemie (15 Fragen)
      {
        category: "Chemie",
        name: "periodicTable",
        question: "Wie viele Elemente enthält das Periodensystem (ungefähr)?",
        options: ["118", "100", "150"],
        correctAnswer: "118"
      },
      {
        category: "Chemie",
        name: "chemicalBond",
        question: "Welche Art von Bindung entsteht zwischen Natrium und Chlor?",
        options: ["Ionenbindung", "Kovalente Bindung", "Metallbindung"],
        correctAnswer: "Ionenbindung"
      },
      {
        category: "Chemie",
        name: "pHValue",
        question: "Was misst der pH-Wert einer Lösung?",
        options: ["Säure-Base-Gehalt", "Temperatur", "Dichte"],
        correctAnswer: "Säure-Base-Gehalt"
      },
      {
        category: "Chemie",
        name: "molecule",
        question: "Was ist ein Molekül?",
        options: ["Ein Zusammenschluss von Atomen", "Ein chemisches Element", "Eine chemische Verbindung"],
        correctAnswer: "Ein Zusammenschluss von Atomen"
      },
      {
        category: "Chemie",
        name: "organicChemistry",
        question: "Was untersucht die organische Chemie?",
        options: ["Kohlenstoffverbindungen", "Metallverbindungen", "Salze"],
        correctAnswer: "Kohlenstoffverbindungen"
      },
      {
        category: "Chemie",
        name: "catalyst",
        question: "Was ist die Funktion eines Katalysators?",
        options: ["Reaktionsgeschwindigkeit erhöhen", "Temperatur senken", "Masse erhöhen"],
        correctAnswer: "Reaktionsgeschwindigkeit erhöhen"
      },
      {
        category: "Chemie",
        name: "stoichiometry",
        question: "Wofür steht der Begriff 'Stöchiometrie'?",
        options: ["Berechnung chemischer Reaktionen", "Messung von Temperaturen", "Bestimmung von pH-Werten"],
        correctAnswer: "Berechnung chemischer Reaktionen"
      },
      {
        category: "Chemie",
        name: "reactionRate",
        question: "Was beeinflusst die Reaktionsgeschwindigkeit?",
        options: ["Konzentration der Reaktanten", "Farbe der Lösung", "Lichtintensität"],
        correctAnswer: "Konzentration der Reaktanten"
      },
      {
        category: "Chemie",
        name: "chemicalEquation",
        question: "Was muss bei einer chemischen Gleichung immer ausgeglichen sein?",
        options: ["Stöchiometrie", "Zahl der Atome", "Farbe der Reaktion"],
        correctAnswer: "Zahl der Atome"
      },
      {
        category: "Chemie",
        name: "electrolysis",
        question: "Was ist Elektrolyse?",
        options: ["Zersetzung einer Substanz durch elektrischen Strom", "Verbrennung", "Lösungsmittelzugabe"],
        correctAnswer: "Zersetzung einer Substanz durch elektrischen Strom"
      },
      {
        category: "Chemie",
        name: "allotrope",
        question: "Was bezeichnet der Begriff 'Allotropie'?",
        options: ["Verschiedene Formen eines Elements", "Unterschiedliche chemische Elemente", "Molekülgrößen"],
        correctAnswer: "Verschiedene Formen eines Elements"
      },
      {
        category: "Chemie",
        name: "polymer",
        question: "Was ist ein Polymer?",
        options: ["Ein langes Molekül aus wiederholenden Einheiten", "Ein einzelnes Atom", "Ein Ion"],
        correctAnswer: "Ein langes Molekül aus wiederholenden Einheiten"
      },
      {
        category: "Chemie",
        name: "endothermic",
        question: "Was bedeutet 'endotherm'?",
        options: ["Wärmeaufnahme", "Wärmeabgabe", "Kein Wärmefluss"],
        correctAnswer: "Wärmeaufnahme"
      },
      {
        category: "Chemie",
        name: "exothermic",
        question: "Was bedeutet 'exotherm'?",
        options: ["Wärmeabgabe", "Kältezufuhr", "Neutral"],
        correctAnswer: "Wärmeabgabe"
      },
      {
        category: "Chemie",
        name: "chemicalReaction",
        question: "Was beschreibt eine chemische Reaktion?",
        options: ["Umwandlung von Stoffen", "Änderung des Aggregatzustands", "Farbwechsel"],
        correctAnswer: "Umwandlung von Stoffen"
      },
    
      // Tierreich (15 Fragen)
      {
        category: "Tierwelt",
        name: "endangeredSpecies",
        question: "Was versteht man unter 'gefährdeten Arten'?",
        options: ["Arten, die vom Aussterben bedroht sind", "Arten, die häufig vorkommen", "Arten, die invasiv sind"],
        correctAnswer: "Arten, die vom Aussterben bedroht sind"
      },
      {
        category: "Tierwelt",
        name: "mammals",
        question: "Welche Tiergruppe wird als Säugetiere bezeichnet?",
        options: ["Tiere mit Milchdrüsen", "Kaltblütige Tiere", "Reptilien"],
        correctAnswer: "Tiere mit Milchdrüsen"
      },
      {
        category: "Tierwelt",
        name: "reptiles",
        question: "Welche Eigenschaft kennzeichnet Reptilien?",
        options: ["Kaltblütig", "Warmblütig", "Gefiederte Körper"],
        correctAnswer: "Kaltblütig"
      },
      {
        category: "Tierwelt",
        name: "birdMigration",
        question: "Was ist Vogelzug?",
        options: ["Saisonale Wanderung von Vögeln", "Nestbau", "Balzverhalten"],
        correctAnswer: "Saisonale Wanderung von Vögeln"
      },
      {
        category: "Tierwelt",
        name: "insectDiversity",
        question: "Welche Tiergruppe ist die artenreichste?",
        options: ["Insekten", "Säugetiere", "Vögel"],
        correctAnswer: "Insekten"
      },
      {
        category: "Tierwelt",
        name: "aquaticAnimals",
        question: "Welche Tiere leben hauptsächlich im Wasser?",
        options: ["Fische", "Vögel", "Reptilien"],
        correctAnswer: "Fische"
      },
      {
        category: "Tierwelt",
        name: "nocturnal",
        question: "Was bedeutet 'nachtaktiv'?",
        options: ["Aktiv in der Nacht", "Schläfrig", "Nur tagsüber aktiv"],
        correctAnswer: "Aktiv in der Nacht"
      },
      {
        category: "Tierwelt",
        name: "carnivores",
        question: "Was ist ein Carnivore?",
        options: ["Fleischfresser", "Pflanzenfresser", "Allesfresser"],
        correctAnswer: "Fleischfresser"
      },
      {
        category: "Tierwelt",
        name: "herbivores",
        question: "Was ist ein Herbivore?",
        options: ["Pflanzenfresser", "Fleischfresser", "Insektenfresser"],
        correctAnswer: "Pflanzenfresser"
      },
      {
        category: "Tierwelt",
        name: "omnivores",
        question: "Was bedeutet 'Omnivore'?",
        options: ["Allesfresser", "Nur Pflanzenfresser", "Nur Fleischfresser"],
        correctAnswer: "Allesfresser"
      },
      {
        category: "Tierwelt",
        name: "venomous",
        question: "Was bedeutet 'giftig' im Tierreich?",
        options: ["Produziert Gift", "Ohne Gift", "Nur gefährlich"],
        correctAnswer: "Produziert Gift"
      },
      {
        category: "Tierwelt",
        name: "camouflage",
        question: "Was beschreibt der Begriff 'Tarnung'?",
        options: ["Anpassung an die Umgebung", "Helle Farben", "Größere Körpergröße"],
        correctAnswer: "Anpassung an die Umgebung"
      },
      {
        category: "Tierwelt",
        name: "migratoryPatterns",
        question: "Was untersucht man bei Zugtieren?",
        options: ["Migrationsmuster", "Fortpflanzung", "Ernährung"],
        correctAnswer: "Migrationsmuster"
      },
      {
        category: "Tierwelt",
        name: "insectMetamorphosis",
        question: "Was ist Metamorphose bei Insekten?",
        options: ["Verwandlung von Larve zu ausgewachsenem Tier", "Wachstum der Flügel", "Veränderung der Farbe"],
        correctAnswer: "Verwandlung von Larve zu ausgewachsenem Tier"
      },
      {
        category: "Tierwelt",
        name: "aquaticMammals",
        question: "Welche der folgenden Tiere ist ein aquatisches Säugetier?",
        options: ["Wal", "Löwe", "Elefant"],
        correctAnswer: "Wal"
      },
    
      // Tierwelt (15 Fragen)
      {
        category: "Tierwelt",
        name: "domesticAnimals",
        question: "Welche Tiere gelten als domestiziert?",
        options: ["Haustiere", "Wildtiere", "Insekten"],
        correctAnswer: "Haustiere"
      },
      {
        category: "Tierwelt",
        name: "petCare",
        question: "Was benötigt ein Haustier hauptsächlich für ein glückliches Leben?",
        options: ["Liebe und Pflege", "Freilauf", "Freiheit"],
        correctAnswer: "Liebe und Pflege"
      },
      {
        category: "Tierwelt",
        name: "animalShelter",
        question: "Was ist ein Tierheim?",
        options: ["Ein Zufluchtsort für herrenlose Tiere", "Ein Zoo", "Ein Tierpark"],
        correctAnswer: "Ein Zufluchtsort für herrenlose Tiere"
      },
      {
        category: "Tierwelt",
        name: "veterinaryCare",
        question: "Was macht ein Tierarzt?",
        options: ["Behandlung von Tieren", "Pflanzenpflege", "Autoreparatur"],
        correctAnswer: "Behandlung von Tieren"
      },
      {
        category: "Tierwelt",
        name: "animalBehavior",
        question: "Was untersucht die Ethologie?",
        options: ["Tierverhalten", "Pflanzenwachstum", "Mineralogie"],
        correctAnswer: "Tierverhalten"
      },
      {
        category: "Tierwelt",
        name: "canineBreed",
        question: "Welche Rasse gehört zu den Hunden?",
        options: ["Labrador", "Siamkatze", "Papagei"],
        correctAnswer: "Labrador"
      },
      {
        category: "Tierwelt",
        name: "felineBreed",
        question: "Welche Rasse gehört zu den Katzen?",
        options: ["Perser", "Bulldogge", "Hamster"],
        correctAnswer: "Perser"
      },
      {
        category: "Tierwelt",
        name: "animalCommunication",
        question: "Wie kommunizieren Tiere häufig miteinander?",
        options: ["Durch Lautäußerungen", "Durch Schrift", "Durch Tanz"],
        correctAnswer: "Durch Lautäußerungen"
      },
      {
        category: "Tierwelt",
        name: "zooExhibit",
        question: "Was findet man in einem Zoo?",
        options: ["Verschiedene Tierarten", "Nur Hunde", "Nur Vögel"],
        correctAnswer: "Verschiedene Tierarten"
      },
      {
        category: "Tierwelt",
        name: "animalWelfare",
        question: "Was bedeutet Tierschutz?",
        options: ["Schutz und Fürsorge für Tiere", "Wilderei", "Zucht"],
        correctAnswer: "Schutz und Fürsorge für Tiere"
      },
      {
        category: "Tierwelt",
        name: "exoticPets",
        question: "Was sind exotische Haustiere?",
        options: ["Ungewöhnliche Tiere als Haustiere", "Standard-Haustiere", "Haustiere aus dem Supermarkt"],
        correctAnswer: "Ungewöhnliche Tiere als Haustiere"
      },
      {
        category: "Tierwelt",
        name: "animalTraining",
        question: "Welcher Aspekt ist wichtig beim Training von Hunden?",
        options: ["Geduld", "Schnelligkeit", "Strafe"],
        correctAnswer: "Geduld"
      },
      {
        category: "Tierwelt",
        name: "petNutrition",
        question: "Was sollte die Ernährung eines Haustiers beinhalten?",
        options: ["Ausgewogene Nahrung", "Nur Trockenfutter", "Nur Fleisch"],
        correctAnswer: "Ausgewogene Nahrung"
      },
      {
        category: "Tierwelt",
        name: "animalHabitat",
        question: "Was ist ein natürliches Habitat?",
        options: ["Lebensraum", "Zoo", "Haustierkäfig"],
        correctAnswer: "Lebensraum"
      },
      {
        category: "Tierwelt",
        name: "petAdoption",
        question: "Was ist ein Vorteil der Tieradoption?",
        options: ["Ein Tier ein neues Zuhause geben", "Kosten sparen", "Nur seltene Tiere erhalten"],
        correctAnswer: "Ein Tier ein neues Zuhause geben"
      }
    // Füge hier die restlichen Fragen hinzu ...
];



let randomQuestion;
let buttons = [button1, button2, button3];
let usedQuestions = [];

let numPlayers = parseInt(prompt("Wie viele Spieler machen mit? (max. 6)"), 10);

// Falls die Eingabe ungültig ist oder größer als 6, korrigieren:
if (isNaN(numPlayers) || numPlayers < 1 || numPlayers > 6) {
    numPlayers = 6; // Standardmäßig 6 Spieler
}

let players = countPoints(numPlayers);
console.log(players);

function countPoints(numPlayers) {
    let players = [];

    for (let i = 1; i <= numPlayers; i++) {
        let playerName = prompt(`Name für Spieler ${i}:`); // Spielername eingeben
        players.push({ playerIndex: i, playerName: playerName, playerPoints: 0 });
    }

    return players;
}

// Kategorieauswahl beim Laden der Seite
document.addEventListener("DOMContentLoaded", () => {
    buildCategorySelection();
});

// Dynamisches Erzeugen der Checkboxen aus den Kategorien des Fragen-Arrays
function buildCategorySelection() {
    const container = document.getElementById('categoriesContainer');
    // Extrahiere alle Kategorien (nur eindeutige Werte)
    const uniqueCategories = [...new Set(questions.map(q => q.category))];
    
    uniqueCategories.forEach(category => {
        const div = document.createElement('div');
        div.className = 'category-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = category;
        checkbox.value = category;
        checkbox.name = 'category';

        const label = document.createElement('label');
        label.htmlFor = category;
        label.textContent = category;

        div.appendChild(checkbox);
        div.appendChild(label);
        container.appendChild(div);
    });
}
    // Eventlistener für das Formular der Kategorieauswahl
    document.getElementById('categoryForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedCategories = [];
        document.querySelectorAll('input[name="category"]:checked').forEach(checkbox => {
          selectedCategories.push(checkbox.value);
        });
        // Falls keine Auswahl erfolgt, werden alle Kategorien verwendet
        if (selectedCategories.length === 0) {
          const uniqueCategories = [...new Set(questions.map(q => q.category))];
          selectedCategories.push(...uniqueCategories);
        }
        // Filtere das Fragen-Array anhand der ausgewählten Kategorien
        questions = questions.filter(q => selectedCategories.includes(q.category));
        
        // --- WICHTIG: Hier die beiden Zeilen einfügen ---
        // Kategorieauswahl ausblenden
        document.getElementById('categorySetup').classList.add('hidden');
        // Quiz-Container einblenden
        document.getElementById('quizContainer').classList.remove('hidden');
        
        // Starte das Quiz
        loadNewQuestion();
      });





// Funktion, um eine neue Frage zu laden
function loadNewQuestion() {
    if (usedQuestions.length === questions.length) {
        alert("Alle Fragen wurden gestellt! Das Quiz ist vorbei.");
        return;
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(randomIndex));

    usedQuestions.push(randomIndex);
    randomQuestion = questions[randomIndex];

    // Frage anzeigen
    questionSpace.innerText = randomQuestion.question;

    // Antworten setzen
    getAnswers();
}

// Funktion, um Modal anzuzeigen
function showModal(message, isCorrect) {
    const modalMessage = document.getElementById("modalMessage");
    modalMessage.innerHTML = message;
    
    modalMessage.style.backgroundColor = isCorrect ? "green" : "red";
    modalMessage.style.color = "white"; // Textfarbe für bessere Sichtbarkeit
    modalMessage.style.padding = "10px"; // Etwas Abstand für bessere Optik
    modalMessage.style.borderRadius = "5px"; // Runde Ecken für schöneres Design

    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none"; // Modal schließen, wenn das "X" angeklickt wird
}

// Wenn der Benutzer außerhalb des Modals klickt, schließe es
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Antwort-Buttons aktualisieren
function getAnswers() {
    button1.innerText = randomQuestion.options[0];
    button2.innerText = randomQuestion.options[1];
    button3.innerText = randomQuestion.options[2];
}

function updateScoreboard() {
    const scoreList = document.getElementById("scoreList");
    scoreList.innerHTML = ""; // Vorherige Punktzahlen löschen

    players.forEach(player => {
        let listItem = document.createElement("li");
        listItem.textContent = `${player.playerName}: ${player.playerPoints} Punkte`;
        scoreList.appendChild(listItem);
    });
}
let currentPlayerIndex = 0;
// Antwort überprüfen und nächste Frage laden
function checkAnswer(event) {
    const selectedAnswer = event.target.innerText;
    let message;
    let isCorrect = false;

    if (selectedAnswer === randomQuestion.correctAnswer) {
        message = "Richtig!";
        isCorrect = true;

        // Falls richtig, 10 Punkte für den aktuellen Spieler
        players[currentPlayerIndex].playerPoints += 10;

        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        });

    } else {
        message = `Falsch!<br>Die richtige Antwort ist: <b>${randomQuestion.correctAnswer}</b>`;
        
        // Bei falscher Antwort gibt es 0 Punkte
        players[currentPlayerIndex].playerPoints += 0;

       
    }

    showModal(message, isCorrect);  // Modal mit der Antwort anzeigen
    updateScoreboard(); // Punktestand nach jeder Antwort aktualisieren
    switchPlayer(); // Spieler wechseln
    loadNewQuestion();  // Nächste Frage laden
}



function switchPlayer() {
    currentPlayerIndex = (currentPlayerIndex + 1) % numPlayers;
    console.log(`Aktueller Spieler: ${players[currentPlayerIndex].playerName}`);
}

// Event Listener für alle Buttons setzen
buttons.forEach(button => button.addEventListener("click", checkAnswer));

document.addEventListener("DOMContentLoaded", loadNewQuestion);