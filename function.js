// Toggle burger

let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click', function(){
    collapse.forEach(col=>col.classList.toggle("collapse-toggle")
    )
})

// Terminal functionality


document.addEventListener('DOMContentLoaded', function() {
 
    document.getElementsByTagName('form')[0].onsubmit = function(evt) {
      evt.preventDefault(); // Preventing the form from submitting
      checkWord(); // Do your magic and check the entered word/sentence
      window.scrollTo(0,150);
    }
   
    // Get the focus to the text input to enter a word right away.
    document.getElementById('terminalTextInput').focus();
   
    // Getting the text from the input
    var textInputValue = document.getElementById('terminalTextInput').value.trim();
   
    //Getting the text from the results div
    var textResultsValue = document.getElementById('terminalReslutsCont').innerHTML;
   
    // Clear text input
    var clearInput = function(){
      document.getElementById('terminalTextInput').value = "";
    }
   
    // Scroll to the bottom of the results div
    var scrollToBottomOfResults = function(){
      var terminalResultsDiv = document.getElementById('terminalReslutsCont');
      terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
    }
   
    // Scroll to the bottom of the results
    scrollToBottomOfResults();
   
    // Add text to the results div
    var addTextToResults = function(textToAdd){
      document.getElementById('terminalReslutsCont').innerHTML += "<p>" + textToAdd + "</p>";
      scrollToBottomOfResults();
    }
   

    // HELP LIST
    var postHelpList = function(){
      // Array of all the help keywords
      var helpKeyWords = [
        "Try typing some of these commands. There's more than these though! :)",
        "guitar",
        "skate",
        "book",
        "language",
        "dunk",
        "clear",
        
        // "- 'Time' will display the current time.",
        // "- 'Date' will display the current date.",
        // "* There are more keywords that you have to discover by yourself."


      ].join('<br>');
      addTextToResults(helpKeyWords);
    }
   
    // Getting the time and date and post it depending on what you request for
    var getTimeAndDate = function(postTimeDay){
      var timeAndDate = new Date();
      var timeHours = timeAndDate.getHours();
      var timeMinutes = timeAndDate.getMinutes();
      var dateDay = timeAndDate.getDate();
      console.log(dateDay);
      var dateMonth = timeAndDate.getMonth() + 1; // Because JS starts counting months from 0
      var dateYear = timeAndDate.getFullYear(); // Otherwise we'll get the count like 98,99,100,101...etc.
   
      if (timeHours < 10){ // if 1 number display 0 before it.
        timeHours = "0" + timeHours;
      }
   
      if (timeMinutes < 10){ // if 1 number display 0 before it.
        timeMinutes = "0" + timeMinutes;
      }
   
      var currentTime = timeHours + ":" + timeMinutes;
      var currentDate = dateDay + "/" + dateMonth + "/" + dateYear;
   
      if (postTimeDay == "time"){
        addTextToResults(currentTime);
      }
      if (postTimeDay == "date"){
        addTextToResults(currentDate);
      }
    }
   
    // Opening links in a new window
    var openLinkInNewWindow = function(linkToOpen){
      window.open(linkToOpen, '_blank');
      clearInput();
    }
   
    // Having a specific text reply to specific strings
    var textReplies = function() {
      switch(textInputValueLowerCase){
        // replies

        case "guitar":
          clearInput();
          addTextToResults("I've been playing guitar for about 13 years now. I normally play some jazz or finger-style covers, but I really enjoy playing with people so if you'd like, contact me and we can jam!");
          break

        case "skate":
          clearInput();
          addTextToResults("So far I can do a pop-shuv it... sometimes. I feel like skating is 80% mental and it's a good way for me to practice overcoming my fears. When you land that trick after hundreds of failed attempts it feels so so satisfying. Also, every skater that I've met has been really nice. You should try it out if you haven't already!")
          break

        case "book":
          clearInput();
          addTextToResults("My favorite genre is sci fi. I recommend reading Hail Mary by Andy Weir (the same guy who wrote The Martian). I won't spoil anything but I swear it's worth your time! I'm currently starting on The Expanse series thanks to my sister. I also like reading self-improvement books! If you have any recommendations for any book in general feel free to email me!")
          break

        case "language":
          clearInput();
          addTextToResults("I think learning languages is a really cool thing to do. I was raised by Vietnamese-speaking parents so I can understand a good amount of it... at least if the speaker has a southern accent haha. My mother's side of my family also lives in Switzerland so I know a bit of German. Recently, I've been teaching my self Japanese for fun and will be taking a class this coming semester!")
          break

        case "dunk":
          clearInput();
          addTextToResults("One of my dreams is to dunk a basketball. Since I'm short, it makes it a very difficult challenge. As of now, I can touch rim, which I'm really happy about. Hopefully within these next few years I'll be able to make it.")
          break

        case "hello":
        case "hi":
        case "hola":
        case "hallo":
          clearInput();
          addTextToResults("hi.");
          break;

        case "how are you":
        case "how are you?":
        case "how r u":
        case "how r u?":
          clearInput();
          addTextToResults("good.");
          break

        case "darlena":
        case "darlena chiem":
          clearInput();
          addTextToResults("That's my sister!");
          break;

        case "alan":
        case "alan chiem":
          clearInput();
          addTextToResults("yep that's my name.");
          break;

        case "time":
          clearInput();
          getTimeAndDate("time");
          break;
   
        case "today":
        case "date":
          clearInput();
          getTimeAndDate("date");
          break;
   
        case "help":
        case "?":
        case "ls":
          clearInput();
          postHelpList();
          break;

        case "clear":
          clearInput();
          location.reload();
          break;
   
        default:
        clearInput();
        addTextToResults("<p><i>The command " + "<b>" + textInputValue + "</b>" + " was not found. Type <b>help</b> to see all commands.</i></p>");
        break;
      }
    }
   
  // Main function to check the entered text and assign it to the correct function
    var checkWord = function() {
      textInputValue = document.getElementById('terminalTextInput').value.trim(); //get the text from the text input to a variable
      textInputValueLowerCase = textInputValue.toLowerCase(); //get the lower case of the string
   
      if (textInputValue != ""){ //checking if text was entered
        addTextToResults("<p class='userEnteredText'>> " + textInputValue + "</p>");
        if (textInputValueLowerCase.substr(0,5) == "open ") { //if the first 5 characters = open + space
          openLinkInNewWindow('http://' + textInputValueLowerCase.substr(5));
          addTextToResults("<i>The URL " + "<b>" + textInputValue.substr(5) + "</b>" + " should be opened now.</i>");
        } else if (textInputValueLowerCase.substr(0,8) == "youtube ") {
          openLinkInNewWindow('https://www.youtube.com/results?search_query=' + textInputValueLowerCase.substr(8));
          addTextToResults("<i>I've searched on YouTube for " + "<b>" + textInputValue.substr(8) + "</b>" + " it should be opened now.</i>");
        } else if (textInputValueLowerCase.substr(0,7) == "google ") {
          openLinkInNewWindow('https://www.google.com/search?q=' + textInputValueLowerCase.substr(7));
          addTextToResults("<i>I've searched on Google for " + "<b>" + textInputValue.substr(7) + "</b>" + " it should be opened now.</i>");
        } else if (textInputValueLowerCase.substr(0,5) == "wiki "){
          openLinkInNewWindow('https://wikipedia.org/w/index.php?search=' + textInputValueLowerCase.substr(5));
          addTextToResults("<i>I've searched on Wikipedia for " + "<b>" + textInputValue.substr(5) + "</b>" + " it should be opened now.</i>");
        } else{
          textReplies();
        }
      }
    };
   
  });