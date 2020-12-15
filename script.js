//
//SETS ALL VARIABLES FOR THE GAME
//
cellunlocked = false;
beentohallway = false;
beentorture = false;
beenmorgue = false;
beentowesthall = false;
beentobonus = false;
exitunlocked = false;
beentoexit = false;
//inventory
paperclip = false;
deadbugs = false;
lunchtray = false;
torch = false;
note = false;
knife = false;
hat = false;
whip = false;
key = false;
powder = false;
//
searchtable = false;
crate = false;
zombiedead = false;
zombiesearch=false;
//
//
//

var currentRoom = "jail";
var commands = ["go", "eat", "take","inventory", "kill", "search"];
var inventory = [];

function changeRoom(dir) {
  if (currentRoom=="jail"  && cellunlocked==false ){
      $('#game-text').append("<p>The door is locked.</p>");
  }
  else if (rooms[currentRoom].directions[dir] !== undefined) {
    currentRoom = rooms[currentRoom].directions[dir]
    $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
  }
   else {
    $('#game-text').append("<p>You cannot go that way!</p>");
  }
}

function showHelp() {
  $('#game-text').append("<p>Here are the possible commands: </p>");
  $('#game-text').append("<p><ul>");
  for (var i = 0; i < commands.length; i++) {
    $('#game-text').append("<li>" + commands[i] + "</li>");
  }
  $('#game-text').append("</ul></p>");

}


function showInventory() {
  if (inventory.length === 0) {
    $('#game-text').append("<p class='lead'>You are not carrying anything!</p>");
  }
  $('#game-text').append("<p class='lead'>Here is your inventory: </p>");
  $('#game-text').append("<p><ul>");
  for (var i = 0; i < inventory.length; i++) {
    $('#game-text').append("<li>" + inventory[i] + "</li>");
  }
  $('#game-text').append("</ul></p>");

}

function takeinventory(input){
    if (input == "take") {
      $('#game-text').append('<p>Take what? Be specific. Type "help" for a list of all commands.</p>');
    }
    //paperclip
    else if (input == "take paperclip" || input == "take paper clip") {
      if (currentRoom == "jail" && paperclip == false) {
        paperclip = true;
        $('#game-text').append('<p>You picked up a paper clip.</p>');
        inventory.push("paperclip");
      }
      else { $('#game-text').append('<p>That item is not here!</p>');}
    }
    //

    //dead bugs
    else if (input == "take dead bugs" || input == "take deadbugs") {
      if (currentRoom == "jail" && deadbugs == false) {
        deadbugs = true;
        $('#game-text').append('<p>You picked up some dead bugs. Gross.</p>');
        inventory.push("deadbug");
      }
      else {$('#game-text').append('<p>That item is not here!</p>');}
    }
    //

    //lunch tray
    else if (input == "take lunchtray" || input == "take lunch tray" || input == "take tray") {
      if (currentRoom == "jail" && lunchtray == false) {
        lunchtray = true;
        $('#game-text').append('<p>You picked up a lunch tray.</p>');
        inventory.push("lunchtray");
      }
      else {$('#game-text').append('<p>That item is not here!</p>');}
    }
    //

    //torch
    else if (input == "take torch") {
      if (currentRoom == "hallway" && torch == false) {
        torch = true;
        $('#game-text').append('<p>You picked up a torch. You can now venture off into the dark hallway.</p>');
        inventory.push( "torch");
      }
      else {$('#game-text').append('<p>That item is not here!</p>');}
    }
    //

    //key
    else if (input == "take key") {
      if (currentRoom == "morgue" && zombiesearch == true) {
        key = true;
        $('#game-text').append('<p>You picked up a torch. You can now venture off into the dark hallway.</p>');
        inventory.push( "key");
      }
      else {$('#game-text').append('<p>That item is not here!</p>');}
    }
    //
    //note
    else if (input == "take note" || input == "read note") {
      if (currentRoom == "hallway" && note == false) {
        note = true;
        $('#game-text').append('<p>You picked up a note. It reads: <br />Well now. It seems you have managed to pass your first test. Don\'t worry. Things will get plenty more difficult and it will be almost impossible for you to escape with your life.<br /><br />Sincerely,<br/>Your Captors<br /><br />P.S. Watch out for my zombie.</p>');
        inventory.push("note");
      }
      else {$('#game-text').append('<p>That item is not here!</p>');}
    }
    //

    //whip
    else if (input == "take whip") {
      if (currentRoom == "torture" && whip == false) {
        whip = true;
        $('#game-text').append('<p>You picked up a whip.</p>');
        inventory.push("whip");
        }
          else {$('#game-text').append('<p>That item is not here!</p>');}
      }
      else {$('#game-text').append('<p>That item is not here!</p>');}
    }
    //

function searchroom(input){
  if (input == "search") {
    $('#game-text').append('<p>Search what? Be specific. Type "help" for a list of all commands.</p>');
  }

  //table
  else if (input == "search table") {
    if (currentRoom == "torture" && hat == false && knife == false) {
      hat = true;
      knife = true;
      searchtable = true;
      $('#game-text').append('<p>You found a knife stuck in the table and picked it up. You also take a hat from the table and place it on your head. <br />  ┌( ͡° ͜ʖ ͡°)=ε/̵͇̿̿/’̿’̿ ̿ </p>');
      inventory.push("hat","knife");
      if (whip == true && hat == true) {
        $('#game-text').append('<p>A whip and a hat? This is no time to play Indiana Jones!</p>');
      }

    }
    else {$('#game-text').append('<p>There is nothing to search for.</p>');}
  }
  //

  //zombie
  else if (input == "search zombie") {
    if (currentRoom == "morgue" && zombiedead == true) {
      zombiesearch = true;
      $('#game-text').append('<p>You found a key buried in the zombie\'s flesh.</p>');
    }
    else {$('#game-text').append('<p>There is nothing to search for.</p>');}
  }
  //

  //crate
  else if (input == "search crate") {
    if (currentRoom == "bonus") {
      powder = true;
      $('#game-text').append('<p>You found a strange powder. What use could that possibly have?</p>');
    }
    else {$('#game-text').append('<p>There is nothing to search for.</p>');}
  }
  //
  else {$('#game-text').append('<p>There is nothing to search for.</p>');}
}

function eatfood(input){
  if (input == "eat") {
  $('#game-text').append('<p>Eat what? Be specific. Type "help" for a list of all commands.</p>');
}

//powder
  else if (input == "eat powder" || input == "eat strange powder") {
    if (powder == true) {
      swal({
            title: 'Food Poisoning',
            text:'You ate some bad food and have died as a result',
            closeOnClickOutside: false,
            icon: 'error',
            button: { text:'Try Again'},
        }).then((result)=>{
            window.location.reload(true);
        });
    }
  else {$('#game-text').append('<p>You can\'t do that.</p>');}
}
  else if (input == "eat bugs" || input == "eat dead bugs") {
  if (deadbugs == true) {
    swal({
          title: 'Food Poisoning',
          text:'You ate some bad food and have died as a result',
          closeOnClickOutside: false,
          icon: 'error',
          button: { text:'Try Again'},
      }).then((result)=>{
          window.location.reload(true);
      });
  }
  else{
     $('#game-text').append('<p>You can\'t do that.</p>');
   }
}
//
  else {
    $('#game-text').append('<p>I don\'t understand ' + input + '</p>');
  }
}


function killcreature(input){
  if (input == "kill") {
    $('#game-text').append('<p>Kill what with what? Be specific. Type "help" for a list of all commands.</p>');
  }
  else if (input == "kill zombie" && currentRoom == "morgue") {
    $('#game-text').append('<p>Kill zombie with what?</p>');
  }

  //zombie
  else if (input == "kill zombie with knife") {
    if (currentRoom == "morgue" && knife == true) {
      $('#game-text').append('<p>You attack the zombie with a knife and kill it!</p>');
      zombiedead = true;
    }
    else {
      $('#game-text').append('<p>You can\'t do that.</p>');
    }
  }

  else if (input == "kill zombie with lunch tray" || input == "kill zombie with lunchtray" || input == "kill zombie with tray") {
    if (currentRoom == "morgue" && lunchtray == true) {
      $('#game-text').append('<p>You attack the zombie with a lunch tray and kill it!</p>');
      zombiedead = true;
    }
    else {
      $('#game-text').append('<p>You can\'t do that.</p>');
    }
  }
  //

  //kill self
  else if (input == "kill self with lunch tray" || input == "kill self with lunchtray" || input == "kill self with tray") {
    if (lunchtray == true) {
      swal({
            title: 'Suicide',
            text:'You killed yourself...',
            closeOnClickOutside: false,
            icon: 'error',
            button: { text:'Try Again'},
        }).then((result)=>{
            window.location.reload(true);
        });

    }
    else {
      $('#game-text').append('<p>You can\'t do that.</p>');
    }
  }

  else if (input == "kill self with knife") {
    if (knife == true) {
      swal({
            title: 'Suicide',
            text:'You killed yourself...',
            closeOnClickOutside: false,
            icon: 'error',
            button: { text:'Try Again'},
        }).then((result)=>{
            window.location.reload(true);
        });

    }
    else {
      $('#game-text').append('<p>You can\'t do that.</p>');
    }
  }

  else if (input == "kill self with whip") {
    if (whip == true) {

      swal({
            title: 'Suicide',
            text:'You killed yourself...',
            closeOnClickOutside: false,
            icon: 'error',
            button: { text:'Try Again'},
        }).then((result)=>{
            window.location.reload(true);
        });

    }
    else {
      $('#game-text').append('<p>You can\'t do that.</p>');
    }
  }
  //

  else {$('#game-text').append('<p>You can\'t do that!</p>');

}
}
//
//end kill
//
function unlockroom(input){
			if (input == "unlock" || input == "unlock door" || input == "unlock jail door" || input == "unlock jaildoor") {
				$('#game-text').append('<p>Unlock door with what? Be specific. Type "help" for a list of all commands.</p>');
			}

			//jail door
			else if (input == "unlock jail door with paperclip" || input == "unlock jaildoor with paperclip" || input == "unlock jail door with paper clip" || input == "unlock jaildoor with paper clip" || input == "unlock door with paper clip" || input == "unlock door with paperclip") {
				if (currentRoom != "jail") {
					$('#game-text').append('<p>You can\'t do that.</p>');
				}
				else if (cellunlocked == true) {
					$('#game-text').append('<p>The door is already unlocked.</p>');
				}
				else if (currentRoom == "jail" && paperclip == true) {
					cellunlocked = true;
					$('#game-text').append('<p>You unlocked the jail door successfully. You can now proceed northward.</p>');}
				else {$('#game-text').append('<p>The door cannot be unlocked.</p>');}
			}

			//

			//exit door
			else if (input == "unlock door with key") {
				if (currentRoom != "exit") {
					$('#game-text').append('<p>You can\'t do that.</p>');
				}
				else if (exitunlocked == true) {
					$('#game-text').append('<p>The door is already unlocked.</p>');
				}
				else if (currentRoom == "exit" && key == true) {
					exitunlocked = true;
					$('#game-text').append('<p>You unlocked the door successfully. You can now proceed freedom.</p>');
          swal({
                title: 'Freedom',
                text:'You escaped with your life! Congratulations!',
                closeOnClickOutside: false,
                icon: 'success',
                button: { text:'Try Again'},
            }).then(()=>{
                window.location.reload(true);
            })
			}
			//

			else {$('#game-text').append('<p>I don\'t understand "' + input + '"</p>');}

      }
    }
		//
		//end unlock
		//


function playerInput(input) {
  var command = input.split(" ")[0];
  switch (command) {
    case "go":
      var dir = input.split(" ")[1];
      changeRoom(dir);
      break;
    case "help":
      showHelp();
      break;
    case "inventory":
      showInventory();
      break;
    case "take":
      takeinventory(input);
      break;
    case "search":
      searchroom(input);
      break;
    case "eat":
      eatfood(input);
      break;
    case "kill":
      killcreature(input);
      break;
    case "unlock":
      unlockroom(input);
      break;
    default:
      $('#game-text').append("<p>Invalid command!</p>");
  }
}



function command() {
  com = $('#user-input').val();
  printLine("<span>>>> " + com + "</span>");
  playerInput(com.toLowerCase());
  $('#user-input').val('');
  $("#game-text").stop().animate({ scrollTop: $("#game-text")[0].scrollHeight});
}

function printLine(text) {
  $('#game-text').append(text+"<br />");

}

$(document).ready(function() {
  $('#game-text').append("<p>" + rooms.jail.description + "</p>");
  $('#command-btn').click(command);

  var input = document.getElementById("user-input");
  // Respond to enter key
  input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      command()
    }
  });
});
