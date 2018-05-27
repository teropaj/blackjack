var suites=['hearts','diamonds','clubs','spades'];
var deckOfCards=[];

function CardObject (suite,number){this.suite=suite;this.number=number;}

//makes a deck
function deck() {


  for (indexOfSuites in suites){
    for(index=1;index<=13;index++){
    //cards(indexOfSuites,index);
    //deck.suites[indexOfSuites]=index;
    //console.log(indexOfSuites+' '+deck.indexOfSuites);
    //console.log(index);
    var card =new CardObject(suites[indexOfSuites],index);
    deckOfCards.push(card);

    }
  }
  //console.log('(makeDeck length is '+player.length+'counter is '+counter);
}