// Declare the global variables here
let projectSuccess = 0;
let projectFails = 0;
let projectStarted = false;
let projectTarget = 0;
let projectExecute = 0;
const MAX = 120;
const MIN = 19;

/*
Populate the target goals with Math Randoms for each of the buttons and set the display to game ready
*/
function initiateProject() {
    projectExecute = 0;
    projectTarget = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    console.log("Project Target:", projectTarget);
    $("#projectTarget").text(projectTarget);
    $("#projectStatus").text("Status: Project not started");
    $("#projectSuccess").text("Successful Projects: " + projectSuccess);
    $("#projectFails").text("Failed Projects: " + projectFails);
    $("#projectExecution").text(projectExecute);
    $("#btn0").attr("value", parseInt(Math.floor(Math.random() * 12) + 1));
    $("#btn1").attr("value", parseInt(Math.floor(Math.random() * 12) + 1));
    $("#btn2").attr("value", parseInt(Math.floor(Math.random() * 12) + 1));
    $("#btn3").attr("value", parseInt(Math.floor(Math.random() * 12) + 1));
}

$(".btn").on("click", function () {
    projectStarted = true;
    let myNum = parseInt(this.value);
    projectExecute+=myNum;
    //console.log ("This.value ", parseInt(this.value));
    //console.log ("myNum ", myNum)
    //projectScore = parseInt($(this).value) + projectScore;
    //console.log ("Type of PS:", typeof(projectExecute));
    //console.log ("Type of myNum:", typeof(myNum));
    //console.log ("Project Score: ", projectExecute)
    //console.log("myNum:", myNum);
    $("#projectStatus").text("Status: Project is active");
    $("#projectExecution").text(projectExecute);

    if (projectExecute === projectTarget){
        projectClosure();
    }
    else if (projectExecute > projectTarget){
        lessonsLearned();
    }

});
function projectClosure(){
    projectSuccess++;
    $("#projectSuccess").text("Successful Projects: " + projectSuccess);            
    $("#projectStatus").text("Status: Project is closed.");
    wait(100);
    alert("Project success! You were able to deliver a quality project on time, on budget, and within scope! Let's document the lessons learned for what worked well!!");
    initiateProject();
}
function lessonsLearned(){
    projectFails++;
    $("#projectFails").text("Failed Projects: " + projectFails);     
    $("#projectStatus").text("Status: Project is closed.");      
    wait(100);             
    alert("Project was delivered late, over budget, with poor quality and scope. Let's document the lessons learned so we do better next time!");
    initiateProject();
}

    function wait(ms) {
        var start = new Date().getTime();
        var end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
}
/*
Taken directly from the homework requirements.
The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters.
Here's how the app works:
There will be four crystals displayed as buttons on the page.
The player will be shown a random number at the start of the game.
When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
Your game will hide this amount until the player clicks a crystal.
When they do click one, update the player's score counter.
The player wins if their total score matches the random number from the beginning of the game.
The player loses if their score goes above the random number.
The game restarts whenever the player wins or loses.
When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
Option 1 Game design notes
The random number shown at the start of the game should be between 19 - 120.
Each crystal should have a random hidden value between 1 - 12.

Pseudocode Division
________________________________________________________________________________________________
REM: This will be a project management themed game, but I am keeping the crystals title for the time
being. The four pillars will be:
#1 Complete visibility of resources and project timelines
#2 Allocating the right person for the job
#3 Optimizing the utilization levels of all resources
#4 Forecasting future resource requirements

We will need to have several behaviors happen on the onLoad event of the body.
We will use mathRandom to assign a hidden value between 1 to 12 for each of the pillars.
We will use mathRandom to assign a visible value as our target between 19 to 120.
We will set the wins and losses to zero.
Set a flag varaible to the boolean value of false;

Because this is an exercise in JQuery, classes will be important. The pillars will be of the same
class so that a listener that we create when a click event occurs will be able to handle
the cascade of events to follow and process the click occurrance.

We will need a update document function to show the results of the click.

We will need a function to evaluate the click event.

We will need 2 functions to check for either a win or lose state.

If true win or lose condition is met, reset the game but preserve the scores.

End Pseudocode Division
________________________________________________________________________________________________*/

