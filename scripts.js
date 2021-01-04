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
let versionExclusives = {red: [],
                         blue: [],
                         yellow: [],
                         gold: [],
                         silver: [],
                         crystal: [],
                         ruby: [],
                         sapphire: [],
                         emerald: [],
                         diamond: [],
                         pearl: [],
                         platinum: [],
                         black: [],
                         white: [],
                         black2: [],
                         white2: [],
                         x: [],
                         y: [],
                         sun: ["test"],
                         moon: [],
                         ultraSun: [],
                         ultraMoon: [],
                         sword: [],
                         shield: []};

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