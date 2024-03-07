function greeting() {
    // you would usually have more code before and after this
    console.log('this is in greeting before sayHi');
    sayHi();
    console.log('this is in greeting after sayHi');
}

console.log('-------------------------------')

function sayHi() {
    console.log("hi!");
}

// up to this point, we have not executed anything
// it is all defined, but nothing will run

// Invoke the greeting function for it run;
greeting();

function externalTimeout (ms) {
    console.log('in externalTimout');
    setTimeout(
        () => {console.log("external timeout " + ms);},
        ms
    );
}

console.log('first');
//change the times to see what happens

externalTimeout(0);

setTimeout(
    () => {console.log("second");},
    0
);
setTimeout(
    () => {console.log("second2");},
    0
);



console.log('third');