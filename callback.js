"use strict";

function first(callback) {
    //DO something
    setTimeout(function(){
        console.log(1);
        callback();
    }, 500);
}

function second() {
    console.log(2);
}

first(second);

function learnJS(lang, callback){
    console.log(`I'm learning ${lang}`);
    callback();
}

function done() {
    console.log('I passed this lesson');
}

learnJS('JavaScript', done);