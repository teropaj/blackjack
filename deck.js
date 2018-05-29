 

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
    var cardIndex=0;
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
        //cl(cardIndex+' '+this.cards[cardIndex]==undefined);
        //this.cards.forEach(value=>{if(value.number=='undefined') cl('UNDEFINED '+index)});
        if(typeof this.cards[cardIndex]=='undefined') {cl('UNDEFINED')}
        cl(' '+ cardIndex+' '+typeof this.cards[cardIndex]+'index: '+index );

        
        cardIndex++;

      }
     
    }
    cl('cardIndex '+cardIndex);
    cl(this.cards);

    this.shuffle();
    console.log(this.cards);
  //console.log('(makeDeck length is '+player.length+'counter is '+counter);
  } 
  giveCard (card){return this.cards[card];}

  shuffle() {
    for (var b=0;b<=51;b++){
      var random=Math.floor(Math.random() * 52);
      var c=this.cards[random];
      
      this.cards[random]=this.cards[b];
      this.cards[b]=c;
      
      
    }
  }
  get giveCards (){return this.cards;}

  drawing() {return this.cards.pop()}
} //class
