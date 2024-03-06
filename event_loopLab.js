//declared var
var counter = 0;
var maxCount = 15;
// 
//function that increments the variable & calls itself recursively
//adding counter var in catch to see output
function incrementAndCall() {
    try {
        counter++;
        console.log(counter); 
        // console.log('Counter value:', counter);

    //checking if counter reached max count
    if (counter === maxCount) {
        console.log('Maximun count reached.');
        return; //exit if max count is reached
    }
    // 

    //calling function recursively  ran as not defined
    //adding try/catch to check for error output
    incrementAndCall();
    }  catch (error) {
        console.error('An error occurred:', error);
        console.log('Counter value:', counter)
    }
}

//calling 1st time with try catch
try {
    incrementAndCall();
 } catch (error) {
    console.error('An error occurred:', error);
    console.log('Counter value:', counter)
 }

//i ran code and got output of 1 An error coourred each time
//I'm adding a max count as an exit condition to see what output i get

