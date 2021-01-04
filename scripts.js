let generationLimits = {gen1: 151,
                        gen2: 251,
                        gen3: 386,
                        gen4: 493,
                        gen5: 649,
                        gen6: 721,
                        gen7: 807,
                        gen8: 898};

//Might make individual arrays for version exclusives?
//console.log(versionExclusives['sun'][0]); <- works for indexing
//Each sub array contains the pokemon from that gen that can not be found in those games
let versionExclusives = {red: [27,28,37,38,52,53,69,70,71,126,127],
                         blue: [23,24,43,44,45,56,57,58,59,123,125],
                         yellow: [13,14,15,23,24,26,52,53,109,110,124,125,126],
                         gold: [37,52,53,165,166,225,227,231,232,251],
                         silver: [56,57,58,59,167,168,207,216,217,226,251],
                         crystal: [37,56,57,179,180,181,203,223,224],
                         ruby: [270,271,272,302,336,337,380,382],
                         sapphire: [273,274,275,303,335,338,381,383],
                         emerald: [283,284,307,308,315,335,337,52,53,132,163,164,165,166,167,168,179,180,181,185,190,191,192,194,195,204,205,207,209,210,213,216,217,223,224,228,229,234,235,241],
                         diamond: [79,80,114,127,144,145,146,199,200,228,229,234,357,363,364,365,371,372,373,410,411,429,431,432,484],
                         pearl: [86,87,114,144,145,146,198,212,246,247,248,261,262,304,305,306,352,357,408,409,430,434,435,483],
                         platinum: [198,200,328,329,330,366,367,368,429,430,431,432,434,435],
                         black: [10,11,12,46,47,200,261,262,312,429,577,578,579,627,628,642,644,16,17,18,29,30,31,32,33,34,43,44,45,63,64,65,66,67,68,69,70,71,81,82,92,,93,94,111,112,113,125,126,137,175,176,179,180,181,182,183,184,187,188,189,194,195,233,239,240,242,265,266,267,270,271,272,273,274,275,280,281,282,283,284,287,288,293,294,295,298,304,305,306,315,328,329,330,341,342,371,372,373,396,397,399,403,404,405,406,407,440,462,464,466,467,468,474,475],
                         white: [13,14,15,198,228,229,285,286,311,430,574,575,576,629,630,641,643],
                         black2: [125,239,300,301,322,323,378,380,431,432,466,577,578,579,627,628,643],
                         white2: [126,240,325,326,379,381,427,428,434,435,443,444,445,467,574,575,576,629,630,644],
                         x: [],
                         y: [],
                         sun: [],
                         moon: [],
                         ultraSun: [],
                         ultraMoon: [],
                         sword: [],
                         shield: []};

//Might add. Lists all pokemon that are not accessable in the generation 8 games due to Dexit
let notInGalar = [];

function getGame(){
    console.log(document.getElementById('gameList').value);
}

function genTeam(){
    //Placeholder
    document.getElementById('pic1').src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
    document.getElementById('pic2').src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
    document.getElementById('pic3').src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
    document.getElementById('pic4').src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
    document.getElementById('pic5').src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
    document.getElementById('pic6').src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
}