class Hand {
    constructor(name) {
        this.cards=[];
        this.score=0;
        this.cardCounter=0; //
        this.isAce=false;
        this.cardNumbers=[]  //values of cards is saved here to check blackjack
        this.kingAndAce=0;
        this.name=name;
    }

    draw(card) {this.cards[this.cardCounter]=card;this.cardCounter++;
                cl('Hand raw 13 '+card);
                this.cardNumbers.push(card.number); 
                 
                var printNumber=this.jackQueenKing(card.number);
                cl(this.name+' card '+card.suite+' '+printNumber);
                console.log(this.name+' Score '+this.calculateScore(card));
            }

    calculateScore(card) {  //is ace and gives 1 or 11 points
                            if (this.score<=10 && card.value=="ace1or11") {this.score+=11;this.isAce=true;return 'Ace: '+this.score;}
                          if (this.score>10 && card.value=="ace1or11") {this.score++;this.isAce=true;return 'Ace: '+this.score;}
                        
                          //checks is blackjack
                          if(this.cardCounter>1){
                            this.cardNumbers.forEach(element => {if (element==13 || element=="ace1or11") this.kingAndAce++;})
                            if (this.kingAndAce==2) return "blackjack";    
                          };

                          this.score+=card.value;
                          return this.score;
                         
    } //calculateScore ends

    jackQueenKing(card){
        var number;
        switch(card){
        case 1: number ="Ace";break;
        case 11: number ="Jack";break;
        case 12: number ="Queen";break;
        case 13: number ="King";break;
        default: number=card;
        }
        return number;
      }


                          

    
} //class