//declared var
var counter = 0;

//function that increments the variable & calls itself recursively
//adding counter var in catch to see output
function incrementAndCall() {
    try {
        counter++;
        console.log(counter); 
        console.log('Counter value:', counter);
    

    //calling function recursively % ran as not defined
    //adding try/catch to check for error output
    incrementAndall();
    }  catch (error) {
        console.error('An error occurred:');
    }
}

//calling 1st time with try catch
try {
    incrementAndCall();
 } catch (error) {
    console.error('An error occurred:', error);
    console.log('Counter value:', counter)
 }

//i ran code and got output of 1 An error coourred
//so I'm adding a max count as an exit condition to see what uotput i get

