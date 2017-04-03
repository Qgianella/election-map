//Factory function to create several politicians
var makePolitician = function(name, partyColor) {

  var politician = {}; //new blank object
  politician.name = name; //set name property to the value of the name parameter
  politician.partyColor = partyColor;
  politician.electionResults = null;
  politician.totalVotes = 0;


  //to check variables=======
  politician.announceHim = function() {
    console.log("Prez candidate: " + politician.name);
  };
  politician.announceHim();
  //==========================




  // method for tallying votes
  politician.tallyUpVotes = function() {

    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++) {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }

  };

  //ensures that calling the factory function will produce a new "politician" object
  return politician;

};

//assign winner of EACH STATE
var setStateResults = function(state) {

  console.log(state); //index of the hovered state
  console.log(theStates[state]); //the state object that corresponds to the state hovered

  theStates[state].winner = null;

  if (politician1.electionResults[state] > politician2.electionResults[state]) {
    theStates[state].winner = politician1;
  } else if (politician1.electionResults[state] === politician2.electionResults[state]) {

    theStates[state].winner = "tied";
  } else {
    theStates[state].winner = politician2;
  }

  //States table
  var stateTable = document.getElementById("stateResults");
  var header = stateTable.children[0];
  var body = stateTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var name1 = body.children[0].children[0];
  var results1 = body.children[0].children[1];
  var name2 = body.children[1].children[0];
  var results2 = body.children[1].children[1];
  var winnerName = body.children[2].children[1];


  var stateWinner = theStates[state].winner;

  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11, 32, 57];
  }

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
  name1.innerText = politician1.name;
  results1.innerText = politician1.electionResults[state];
  name2.innerText = politician2.name;
  results2.innerText = politician2.electionResults[state];
  winnerName.innerText = winner;
};

//call function for new candidate
var politician1 = makePolitician("Cookie Monster", [132, 17, 11]);
var politician2 = makePolitician("Marge Simpson", [245, 141, 136]);

// console messages to make sure the property is assigned correctly
console.log("Cookie Monster's color is: " + politician1.partyColor);
console.log("Mage Simpson's color is: " + politician2.partyColor);

//array of results to be election results properties for each of candidates

politician1.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
politician2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

//swapping values in arrays
politician1.electionResults[9] = 1;
politician2.electionResults[9] = 28;
politician1.electionResults[4] = 17;
politician2.electionResults[4] = 38;
politician1.electionResults[43] = 11;
politician2.electionResults[43] = 27;
console.log("Cookie Monster's votes per state: " + politician1.electionResults);
console.log("Marge Simpson's votes per state: " + politician2.electionResults);



// calling the method for each politician
politician1.tallyUpVotes();
politician2.tallyUpVotes();

//console log total votes
console.log(politician1.name + ": " + politician1.totalVotes);
console.log(politician2.name + ": " + politician2.totalVotes);

//declare the winner
var winner = "";
if (politician1.totalVotes > politician2.totalVotes) {
  winner = politician1.name;
} else if (politician1.totalVotes < politician2.totalVotes) {
  winner = politician2.name;
} else {
  winner = "it's DRAW..re-count to see who"
}

console.log(winner + " is our newest president!");

//top table
var topTable = document.getElementById("countryResults");

topTable.children[0].children[0].children[0].innerText = politician1.name;
topTable.children[0].children[0].children[1].innerText = politician1.totalVotes;
topTable.children[0].children[0].children[2].innerText = politician2.name;
topTable.children[0].children[0].children[3].innerText = politician2.totalVotes;
topTable.children[0].children[0].children[5].innerText = winner;
