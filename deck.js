 

class DeckOfCards {
  constructor() {
    this.suites=['hearts','diamonds','clubs','spades'];
    this.deckOfCards=[];
    this.cards=[]
  }

  CardObject (suite,number){this.suite=suite;this.number=number;}

//makes a deck
  init() {
    var valueOfCard;
    var cardIndex=1;
    for (let indexOfSuites in this.suites){
      for(let index=1;index<=13;index++){
        //cards(indexOfSuites,index);
        //deck.suites[indexOfSuites]=index;
        //console.log(indexOfSuites+' '+deck.indexOfSuites);
        //console.log(index);
        valueOfCard =(index==1) ? "ace1or11":(index>10) ? 10:index
        //console.log(valueOfCard)
        




        this.cards[cardIndex] ={suite:this.suites[indexOfSuites],
          number:index,value:valueOfCard};
         
        cardIndex++;

      }
     
    }
    this.shuffle();
    console.log(this.cards);
  //console.log('(makeDeck length is '+player.length+'counter is '+counter);
  } 
  giveCard (card){return this.cards[card];}

  shuffle() {
    for (var b=1;b<=52;b++){
      var random=Math.floor(Math.random() * 52);
      var c=this.cards[random];
      
      this.cards[random]=this.cards[b];
      this.cards[b]=c;
      
      
    }
  }
  get giveCards (){return this.cards;}
} //class
