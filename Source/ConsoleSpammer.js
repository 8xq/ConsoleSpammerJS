//=============================================================================\\
//                             ConsoleSpammer.JS                                \\
//                             made by nullcheats                                \\
//================================================================================\\

/*
Here we have 4 simple variables that control how the console logger runs
Loop bool will decide if it should keep sending messages (True | false) | 
ClearConsole bool will determine if a message should or shouldn't be removed within the Loop bool
Delay is the amount of Milliseconds each console log should take before logging again (1,000 MS = 1 second)
ConsoleMessages is an empty array that we will store our Console messages into
*/
let Loop = true; // By default this is set to true to "spam the console"
let ClearConsole = false; //  By default this is set to false as we do not want to clear previous console logs
let Delay = 250; // Default delay is 1,000 MS (1 second) between console logging
var ConsoleMessages = []; // This is an empty array , we use arrays so we can select at random easier

/*
This is the main function used to send messages to the "Console"
Depending on the configuration of the variables set this function will do 1 of 2 things as seen below
Option 1: The function will send messages to the console continuously and either clear the messages or keep them
Option 2: The function will send a single message to the console
*/
const StartLogger = () => {
    if (Loop == true) {
        setInterval(function() {
            if (ClearConsole == true) {
                console.clear();
            }
            var Cmessage = ConsoleMessages[Math.floor(Math.random() * ConsoleMessages.length)];
            console.log(Cmessage);
        }, Delay);
    } else {
        var Cmessage = ConsoleMessages[Math.floor(Math.random() * ConsoleMessages.length)];
        console.log(Cmessage);
    }
}

/*
This is a very simple function that will simply load messages into an array upon website "Load"
This invoked in the main body HTML "onLoad" event
Here you can add or remove messages from the array , The strings shown might look weird as they are "Escaped ascii" art 
If you decide to use any multi-line strings or Ascii-chars you should escape the string !
As you can see at least 1 console message is needed within the array to be able to "send" messages to the console
*/
const LoadMessages = () => {
    ConsoleMessages.push("This is a test line message !");
    ConsoleMessages.push("Paste escaped ASCII line here");
    ConsoleMessages.push("Script made by Nullcheats");
    ConsoleMessages.push("Please go away :( ");
    if (ConsoleMessages.length > 0) {
        StartLogger();
    }
}
