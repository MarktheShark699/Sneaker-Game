//ALL PICTURES TAKEN FROM STOCKX
//gif link for lose screen (https://tenor.com/search/sneakers-gifs)
//gif link for win screen (https://gifer.com/en/7S1g)
//home screen picture link (7hcavve8blc21.jpg)

//create variables for number of correct and incorrect guesses
var wrong;
var correct;
//variable for randomNum
var rand;
//create variables for each screen
var screenOneDone = false;
var screenTwoDone = false;
var screenThreeDone = false;
var screenFourDone = false;
var screenFiveDone = false;
var screenSixDone = false;
var screenSevenDone = false;
var screenEightDone = false;
var screenNineDone = false;
var screenTenDone = false;

//create function to hide all images
function hidePrompts(){
  //hides "correct"image
  hideElement("correctImg");
  hideElement("correctImg2");
  hideElement("correctImg3");
  hideElement("correctImg4");
  hideElement("correctImg5");
  hideElement("correctImg6");
  hideElement("correctImg7");
  hideElement("correctImg8");
  hideElement("correctImg9");
  hideElement("correctImg10");
  //hides "wrong"image
  hideElement("wrongImg");
  hideElement("wrongImg2");
  hideElement("wrongImg3");
  hideElement("wrongImg4");
  hideElement("wrongImg5");
  hideElement("wrongImg6");
  hideElement("wrongImg7");
  hideElement("wrongImg8");
  hideElement("wrongImg9");
  hideElement("wrongImg10");
  //hides next button
  hideElement("nextBtn");
  hideElement("nextBtn2");
  hideElement("nextBtn3");
  hideElement("nextBtn4");
  hideElement("nextBtn5");
  hideElement("nextBtn6");
  hideElement("nextBtn7");
  hideElement("nextBtn8");
  hideElement("nextBtn9");
  hideElement("nextBtn10");
}
//create a function to show submit buttons for each screen
function showSubmit(){
  showElement("submitBtn");
  showElement("submitBtn2");
  showElement("submitBtn3");
  showElement("submitBtn4");
  showElement("submitBtn5");
  showElement("submitBtn6");
  showElement("submitBtn7");
  showElement("submitBtn8");
  showElement("submitBtn9");
  showElement("submitBtn10");
}

//create a function for correct data tracker
function numCorrect(){
  setText("total_correct",correct);
  setText("total_correct2",correct);
  setText("total_correct3",correct);
  setText("total_correct4",correct);
  setText("total_correct5",correct);
  setText("total_correct6",correct);
  setText("total_correct7",correct);
  setText("total_correct8",correct);
  setText("total_correct9",correct);
  setText("total_correct10",correct);
}
//create function for wrong data tracker
function numWrong(){
  setText("lives",wrong);
  setText("lives2",wrong);
  setText("lives3",wrong);
  setText("lives4",wrong);
  setText("lives5",wrong);
  setText("lives6",wrong);
  setText("lives7",wrong);
  setText("lives8",wrong);
  setText("lives9",wrong);
  setText("lives10",wrong);
}

//function for correct answers
 function correctAns(){
 correct = correct + 1;
   console.log("Correct!");
 //create an if statement to set score to 5
 if (correct>=7) {
   setScreen("winScreen");
 }else{
   numCorrect();
 }
 }
//function for wrong answers
function wrongAns(){
  wrong = wrong + 1;
   console.log("Wrong!");
 //create an if statement to set score to 3
   if(wrong==3){
   setScreen("gameOver");
 }else{
   numWrong();
}
}

//create onEvents for buttons for different branded shoes
onEvent("homeBtn", "click", function( ) {
   wrong = 0;
   correct = 0;
//call functions
   numCorrect();
   numWrong();
//sets to random screen
//https://studio.code.org/projects/applab/O7DZLBW14qa0hmhtJ08jZA/view
   rand = randomNumber (1,10);
   if (rand == 1) {
    setScreen("screen1");
  } else if ((rand == 2)) {
    setScreen("screen2");
  } else if (rand == 3) {
    setScreen("screen3");
  }else if (rand == 4){
    setScreen("screen4");
  }else if (rand == 5){
    setScreen("screen5");
  }else if (rand == 6){
    setScreen("screen6");
  }else if (rand == 7){
    setScreen("screen7");
  }else if (rand == 8){
    setScreen("screen8");
  }else if (rand == 9){
    setScreen("screen9");
  }else if (rand == 10){
    setScreen("screen10");
  }
});

//create Event handlers for screen1 submit button
onEvent("submitBtn", "click", function( ) {
 if(getChecked("radio_button1")){
   //call function
   correctAns();
   //shows image of check mark if correct
   showElement("correctImg");
   showElement("nextBtn");
 }else{
   //call function
   wrongAns();
   //shows image of x mark if wrong
   showElement("wrongImg");
   showElement("nextBtn");
 }
 hideElement("submitBtn");
});
//create an event handler for screen2 submit button
onEvent("submitBtn2", "click", function( ) {
  if(getChecked("radio_button5")){
   correctAns();
   showElement("correctImg2");
   showElement("nextBtn2");
  }else{
    wrongAns();
    showElement("wrongImg2");
    showElement("nextBtn2");
  }
  hideElement("submitBtn2");
});
//create Event handlers for screen3 submit button
onEvent("submitBtn3", "click", function( ) {
  if(getChecked("radio_button9")){
   correctAns();
  showElement("correctImg3");
   showElement("nextBtn3");
 }else{
   wrongAns();
   showElement("wrongImg3");
   showElement("nextBtn3");
 }
 hideElement("submitBtn3");
});
//create Event handlers for screen4 submit button
onEvent("submitBtn4", "click", function( ) {
  if(getChecked("radio_button11")){
   correctAns();
  showElement("correctImg4");
   showElement("nextBtn4");
 }else{
   wrongAns();
   showElement("wrongImg4");
   showElement("nextBtn4");
 }
 hideElement("submitBtn4");
});
//create Event handlers for screen5 submit button
onEvent("submitBtn5", "click", function( ) {
  if(getChecked("radio_button13")){
   correctAns();
   showElement("correctImg5");
   showElement("nextBtn5");
 }else{
   wrongAns();
   showElement("wrongImg5");
   showElement("nextBtn5");
 }
 hideElement("submitBtn5");
});
//create Event handlers for screen6 submit button
onEvent("submitBtn6", "click", function( ) {
  if(getChecked("radio_button18")){
   correctAns();
   showElement("correctImg6");
   showElement("nextBtn6");
 }else{
   wrongAns();
   showElement("wrongImg6");
   showElement("nextBtn6");
 }
 hideElement("submitBtn6");
});
//create Event handlers for screen7 submit button
onEvent("submitBtn7", "click", function( ) {
  if(getChecked("radio_button19")){
   correctAns();
   showElement("correctImg7");
   showElement("nextBtn7");
 }else{
   wrongAns();
   showElement("wrongImg7");
   showElement("nextBtn7");
 }
 hideElement("submitBtn7");
});
//create Event handlers for screen8 submit button
onEvent("submitBtn8", "click", function( ) {
  if(getChecked("radio_button22")){
   correctAns();
   showElement("correctImg8");
   showElement("nextBtn8");
 }else{
   wrongAns();
   showElement("wrongImg8");
   showElement("nextBtn8");
 }
 hideElement("submitBtn8");
});
//create Event handlers for screen9 submit button
onEvent("submitBtn9", "click", function( ) {
  if(getChecked("radio_button26")){
   correctAns();
   showElement("correctImg9");
   showElement("nextBtn9");
 }else{
   wrongAns();
   showElement("wrongImg9");
   showElement("nextBtn9");
 }
 hideElement("submitBtn9");
});
//create Event handlers for screen10 submit button
onEvent("submitBtn10", "click", function( ) {
  if(getChecked("radio_button30")){
   correctAns();
   showElement("correctImg10");
   showElement("nextBtn10");
 }else{
   wrongAns();
   showElement("wrongImg10");
   showElement("nextBtn10");
 }
 hideElement("submitBtn10");
});

//create a try again button and a play again for when you lose or win
onEvent("tryAgain", "click", function( ) {
  setScreen("Home");
  correct = 0;
  wrong = 0;
  numCorrect();
  numWrong();
  hidePrompts();
  showSubmit();
});
onEvent("playAgain", "click", function( ) {
  setScreen("Home");
  correct = 0;
  wrong = 0;
  numCorrect();
  numWrong();
  hidePrompts();
  showSubmit();
});

//create a reset button to start points over
onEvent("resetBtn", "click", function( ) {
 setScreen("screen"+randomNumber(1,10));
  correct = 0;
  wrong = 0;
  //call all functions needed
  numCorrect();
  numWrong();
  hidePrompts();
  showSubmit();
});
onEvent("resetBtn2", "click", function( ) {
 setScreen("screen"+randomNumber(1,10));
  correct = 0;
  wrong = 0;
  numCorrect();
  numWrong();
  hidePrompts();
  showSubmit();
});
onEvent("resetBtn3", "click", function( ) {
 setScreen("screen"+randomNumber(1,10));
  correct = 0;
  wrong = 0;
  numCorrect();
  numWrong();
  hidePrompts();
  showSubmit();
});
onEvent("resetBtn4", "click", function( ) {
 setScreen("screen"+randomNumber(1,10));
  correct = 0;
  wrong = 0;
  numCorrect();
  numWrong();
  hidePrompts();
  showSubmit();
});
onEvent("resetBtn5", "click", function( ) {
 setScreen("screen"+randomNumber(1,10));
  correct = 0;
  wrong = 0;
  numCorrect();
  numWrong();
  hidePrompts();
  showSubmit();
});
onEvent("resetBtn6", "click", function( ) {
 setScreen("screen"+randomNumber(1,10));
  correct = 0;
  wrong = 0;
  numCorrect();
  numWrong();
  hidePrompts();
  showSubmit();
});
onEvent("resetBtn7", "click", function( ) {
 setScreen("screen"+randomNumber(1,10));
  correct = 0;
  wrong = 0;
  numCorrect();
  numWrong();
  hidePrompts();
  showSubmit();
});
onEvent("resetBtn8", "click", function( ) {
 setScreen("screen"+randomNumber(1,10));
  correct = 0;
  wrong = 0;
  numCorrect();
  numWrong();
  hidePrompts();
  showSubmit();
});
onEvent("resetBtn9", "click", function( ) {
 setScreen("screen"+randomNumber(1,10));
  correct = 0;
  wrong = 0;
  numCorrect();
  numWrong();
  hidePrompts();
  showSubmit();
});
onEvent("resetBtn10", "click", function( ) {
 setScreen("screen"+randomNumber(1,10));
  correct = 0;
  wrong = 0;
  numCorrect();
  numWrong();
  hidePrompts();
  showSubmit();
});

//create event handlers for next button on each screen
onEvent("nextBtn", "click", function( ) {
   if (screenOneDone == false) {
    setScreen("screen2");
  }
});
onEvent("nextBtn2", "click", function( ) {
  if (screenTwoDone == false) {
    setScreen("screen3");
  }
});
onEvent("nextBtn3", "click", function( ) {
  if (screenThreeDone == false) {
    setScreen("screen4");
  }
});
onEvent("nextBtn4", "click", function( ) {
  if (screenFourDone == false){
    setScreen("screen5");
  }
});
onEvent("nextBtn5", "click", function( ) {
  if (screenFiveDone == false){
    setScreen("screen6");
 }
});
onEvent("nextBtn6", "click", function( ) {
  if (screenSixDone == false){
    setScreen("screen7");
 }
});
onEvent("nextBtn7", "click", function( ) {
  if (screenSevenDone == false){
    setScreen("screen8");
 }
});
onEvent("nextBtn8", "click", function( ) {
  if (screenEightDone == false){
    setScreen("screen9");
 }
});
onEvent("nextBtn9", "click", function( ) {
  if (screenNineDone == false){
    setScreen("screen10");
 }
});
onEvent("nextBtn10", "click", function( ) {
  if (screenTenDone == false){
    setScreen("screen1");
 }
});
