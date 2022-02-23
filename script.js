"use strict"
let numberOfFilms;

function start(){
    numberOfFilms = +prompt('How much movies you have seen?', '') ;

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('How much movies you have seen?', '') ;
    }
}

start();

const peronalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const a = prompt('One of last movies', ''),
          b = prompt('Your rating?','');
    
        if(a != null && b != null && a != '' && b !='' && a.length < 50 && b.length < 50){
        peronalMovieDB.movies[a] = b;
        console.log('Done!');
        }   else{
            console.log('Error');
        i--;}
        }
    }

    rememberMyFilms();



function detectPersonalLevel() {
    if (peronalMovieDB.count < 10){
        console.log("Not enough movies");
    } else if (peronalMovieDB.count >= 10 && peronalMovieDB.count < 30){
        console.log("Good number of films");
    } else{
        console.log("You are movie Guru");
    }
}

// detectPersonalLevel();

function showMyDb(hidden) {
    if (!hidden) {
        console.log(peronalMovieDB);
    }
}

showMyDb(peronalMovieDB.privat);

// console.log(peronalMovieDB);



function writeYourGenres() {
    for(let i = 1; i <= 3; i++){
        
        peronalMovieDB.genres[i - 1] = prompt(`Your genre ${i}`);
    }
}

writeYourGenres();