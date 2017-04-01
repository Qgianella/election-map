//Factory function to create several politicians
var makePolitician = function(name) {

  var politician = {}; //new blank object
  politician.name = name; //set name property to the value of the name parameter
  politician.electionResults = null;
  politician.totalVotes = 0;


  //to check variables=======
  politician.announceHim = function() {
    console.log(politician.name);
  };
  politician.announceHim();
  //==========================


  // method for tallying votes
politician.tallyUpVotes = function(){

    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }

};

  //ensures that calling the factory function will produce a new "politician" object
  return politician;

};

//call function for new candidate
var politician1 =makePolitician("Cookie Monster");
var politician2 =makePolitician("Marge Simpson");

//array of results to be election results properties for each of candidates

politician1.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
politician2.electionResults =[4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

//swapping values in arrays
politician1.electionResults[9]=1;
politician2.electionResults[9]=28;
politician1.electionResults[4]=17;
politician2.electionResults[4]=38;
politician1.electionResults[43]=11;
politician2.electionResults[43]=27;

console.log("Cookie Monster's votes per state: "+politician1.electionResults);
console.log("Marge Simpson's votes per state: "+politician2.electionResults);



// calling the method for each politician
politician1.tallyUpVotes();
politician2.tallyUpVotes();

//console log total votes
console.log(politician1.name + ": "+ politician1.totalVotes);
console.log(politician2.name + ": "+ politician2.totalVotes);

//declare the winner
var winner = "";
  if (politician1.totalVotes > politician2.totalVotes)
  {
    winner = politician1.name;
  }
else if (politician1.totalVotes < politician2.totalVotes)
  {
    winner = politician2.name;
  }
else{
  winner = "DRAW"
}

console.log(winner + " is our newest president!");
