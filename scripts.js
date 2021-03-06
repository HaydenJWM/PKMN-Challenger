//General Issues
//1. While a list of version exclusives is included the app does not take into account pokemon outside of the regional pokedex
//1.a For example: you can select "No version exclusives" and still roll suicine in emerald.
//1.b This may be able to be remidied by using local pokedexes, may have to look into this.
//2 I would like to find a way to export the run as text so users can save it
//2.a This would either be by making a text box appear when the button is pressed or by force downloading a .txt (or maybe rendering the text?)
//3 Some columns need to be implemented in the team size selector/ gen team area for proper formatting
//4 Change the boxes to be more responsive?
//4.a For example: when a team size of 3 is selected you only display 3 boxes rather than 3 full and 3 empty ones.

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
                         x: [90,91,138,139,140,141,241,246,247,248,309,310,509,510,538,682,683,690,691,717],
                         y: [120,121,127,228,229,261,262,304,305,306,345,346,347,348,539,684,685,692,693,716],
                         sun: [27,28,410,411,548,549,566,567,629,630,765,780,792,795,797],
                         moon: [37,38,408,409,546,547,564,565,627,628,766,776,791,794,798],
                         ultraSun: [27,28,244,249,309,310,343,344,380,382,410,411,484,486,548,549,566,567,629,630,642,644,690,691,717,765,780,792,795,797,805],
                         ultraMoon: [37,38,228,229,243,250,381,383,408,409,483,485,546,547,564,565,622,623,627,628,641,643,692,693,716,766,776,791,794,798,806],
                         sword: [77,78,140,141,214,222,246,247,248,249,270,271,272,302,337,380,382,443,444,445,453,454,484,577,578,579,629,630,642,644,682,683,690,691,704,705,706,717,765,780,792,842,864,875,889],
                         shield: [83,127,138,139,273,274,275,250,303,338,371,372,373,381,383,483,554,555,559,560,574,575,576,627,628,633,634,635,641,643,684,685,692,693,716,766,776,782,783,784,791,841,865,874,888]};

//Lists all pokemon that are not accessable in the generation 8 games due to Dexit.
//Courtesy of NAEK
let notInGalar = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 46, 47, 48, 49, 56, 57, 69, 70, 71, 74, 75, 76, 84, 85, 86, 87, 88, 89, 96, 97, 100, 101, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 165, 166, 167, 168, 179, 180, 181, 187, 188, 189, 190, 191, 192, 193, 198, 200, 201, 203, 204, 205, 207, 209, 210, 216, 217, 218, 219, 228, 229, 231, 232, 234, 235, 261, 262, 265, 266, 267, 268, 269, 276, 277, 283, 284, 285, 286, 287, 288, 289, 296, 297, 299, 300, 301, 307, 308, 311, 312, 313, 314, 316, 317, 322, 323, 325, 326, 327, 331, 332, 335, 336, 351, 352, 353, 354, 357, 358, 366, 367, 368, 370, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 408, 409, 410, 411, 412, 413, 414, 417, 418, 419, 424, 429, 430, 431, 432, 433, 441, 455, 456, 457, 469, 472, 476, 489, 490, 491, 492, 493, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 511, 512, 513, 514, 515, 516, 522, 523, 540, 541, 542, 580, 581, 585, 586, 594, 602, 603, 604, 648, 650, 651, 652, 653, 654, 655, 656, 657, 658, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 676, 720, 731, 732, 733, 734, 735, 739, 740, 741, 774, 775, 779];

function getPokemonFromAPI(pokemonNo) {
    let xhttp = new XMLHttpRequest();
    
    return new Promise(function (resolve, reject) {
        xhttp.onreadystatechange = function() {
            if(xhttp.readyState !== 4) return;
            
            if(xhttp.status >= 200 && xhttp.status < 300){
                resolve(xhttp);
            }else{
                reject({
                    status: xhttp.status,
                    statusText: xhttp.statusText
                });
            }
        };
        xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokemonNo, true);
        xhttp.send();
    });
}


function genTeam(){
    let selectionIndex = document.getElementById('gameList').selectedIndex;
    let generation = document.getElementById('gameList').options[selectionIndex].dataset.gen;
    let game = document.getElementById('gameList').value;
    let removedFromRandomPool = versionExclusives[game];
    let maxPokeNumber = generationLimits["gen" + generation];
    let onlyIngame = document.getElementById('ingame').checked;

    //Request 6 pokemon that fit the parameters
    for(let x=0; x<document.getElementById('teamSizeList').value; x++){
        let pokemonNo = Math.floor((Math.random() * maxPokeNumber) + 1);
        if(onlyIngame){
            while(removedFromRandomPool.indexOf(pokemonNo) != -1){
                pokemonNo = Math.floor((Math.random() * maxPokeNumber) + 1);
            }
        }
        if(generation == 8){
            while(notInGalar.indexOf(pokemonNo) != -1){
                pokemonNo = Math.floor((Math.random() * maxPokeNumber) + 1);
            }
        }
        getPokemonFromAPI(pokemonNo)
            .then(function(posts){
                let poke = JSON.parse(posts.responseText);
                document.getElementById("pic" + (x+1)).src = poke.sprites.front_default;
                document.getElementById("pic" + (x+1)).alt = poke.name;
            })
            .catch(function(error){
                console.log(error);
            });
    }
}