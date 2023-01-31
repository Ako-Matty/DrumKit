const RedClickBox = document.getElementById("RedClickBox");
const GreenClickBox = document.getElementById("GreenClickBox")
const boomsound = document.getElementById("boomsound");
const clapsound = document.getElementById("clapsound");
const hihatsound = document.getElementById("hihatsound");
const kicksound = document.getElementById("kicksound");
const openhatsound = document.getElementById("openhatsound");
const ridesound = document.getElementById("ridesound");

const BoxKeys = document.querySelectorAll(".BoxKeys")









// document.addEventListener(`click`, (event) => {

    

// console.log (event.which);

// if(event.click === RedClickBox) {
//     boomsound.currentTime = 0

//     boomsound.play() = event.code

//     console.log("a is pressed");
    


// }
    
// })




RedClickBox.addEventListener(`click`, (event) => {

    
    
    
    boomsound.Audio = event.Audio;
    
    boomsound.currentTime = 0;
    
    boomsound.play();
    
    
    })





GreenClickBox.addEventListener(`click`, (event) => {

    
    
    
    clapsound.Audio = event.Audio;
    
    clapsound.currentTime = 0;
    
    clapsound.play();
    
    
    })
























document.addEventListener(`keypress`, (event) => {

    clapsound.currentTime = 0;

switch(event.key){
    case `a`:
        boomsound.Audio = event.Audio;
        boomsound.currentTime = 0;
        boomsound.play();
        break;
    case `s`:
        clapsound.Audio = event.Audio;
        clapsound.play();
        break;
    case `d`:
        hihatsound.Audio = event.Audio;
        hihatsound.play();
        break;
    case `f`:
        kicksound.Audio = event.Audio;
        kicksound.play();
        break;
    case `g`:
        openhatsound.Audio = event.Audio;
        openhatsound.play();
        break;
    case `h`:
        ridesound.Audio = event.Audio;
        ridesound.play();
        break
    case `a`, `s`, `d`, `f`, `g`, `h`:
        currentTime = 0
    



}





    // if(event.key === `a`){
    //     boomsound.Audio = event.Audio;
    //     boomsound.currentTime = 0;
    //     boomsound.play();
    // }

    // else if (event.key === `s`){
    //     clapsound.Audio = event.Audio;
    //     clapsound.play();
    // }


    sounds.currentTime = 0;

    
    // console.log(event);



})



















// Checklist

// 1. add buttons for each sound to your html
// 2. Create an event listener that tracks a key press anywhere on the page. 
// - Test by console loggging a message

// 3. Use the event object to check what key you've pressed
// -console log the code value

// 4. Only run some code when you click on a specific key
// - console log a message only when you click the a key

// 4.5 Resolve potential error.

// 5. replace that console log with playing the sound file when the a key is clicked 
// - you'll hear the sound play when the a key is pressed

// 6. Repeating that for the other sound files and assigning them a key to play the sound when clicked
// - should have a drum kit you can play on the keyboard

// 7. Add event listener to a single button
//    - console log a mesage when that button is clicked

// 8. Replace the console log with playing a corresponding sound file
    //   - similar code to playing sound on key press

    // 9. Repeat that process for the other buttons

    // EXTRA STRECH GOAL

// 10. Try to condense and refactor code
    //    - try to loop through buttons to add click event listeners to them instead of them