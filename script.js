function translate() {
    var inputText = document.getElementById("inputText").value.trim().toUpperCase();
    var result = document.getElementById("result");

    var abbreviations = {
        "USA": "United States of America",
        "NATO": "North Atlantic Treaty Organization",
        "FBI": "Federal Bureau of Investigation",
        "CIA": "Central Intelligence Agency",
        "UN": "United Nations",
        "EU": "European Union",
        "кринж": "cringe (испанский стыд)",
        "изи": "easy",
        "задонатить": "to donate",
        "бф": "best friend",
        "рофл": "Rolling On The Floor Laughing (насмешка)",
        "треш": "trash (про что-то очень плохое)",
        "токсик": "toxic (токсичный человек)",
        "хейтить": "to hate",
        "флексить": "to flex (выпендриваться)",
        "юзать": "to use",
        "чекать": "to check",
        "чилить": "chill (расслабленный отдых)",
        "байтить": "to bite (в точности копировать что-то чужое)",
        "кикнуть": "to kick (исключить откуда-то)",
        "пруф": "proof",
        "имба": "imbalance (выдающийся по характеристикам)",
        "LOL": "Laugh out Loud",
        "BTW": "By The Way",
        "BRB": "Be Right Back",
        "IDK": "I don't know",
        "TBH": "To Be Honest",
        "Lemme": "Let me"
    };

    // Егер аббревиатура бар болса
    if (abbreviations[inputText]) {
        result.textContent = abbreviations[inputText];
    } else {
        result.textContent = "Бұл аббревиатура табылмады.";
    }
}