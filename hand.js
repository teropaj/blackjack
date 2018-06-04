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
                //cl(this.name+' card '+card.suite+' '+printNumber);
                console.log(this.name+' card '+card.suite+' '+printNumber+' Score '+this.calculateScore(card));
            }

    calculateScore(card) {  // if first card
                        if(this.cardCounter==1) { 
                            //is Ace??
                            if (card.value=="ace1or11"){    
                            this.isAce=true;this.score+=11;return this.name+": "+"Ace score:"+this.score
                            }
                            // first card is not ace
                            else {this.score+=card.value;return this.score;}
                    
                        }

                        // if second card
                        if(this.cardCounter==2){
                            //is blackjack
                            if (this.isAce==true && card.number>9) {
                                return 'Blackjack'}
                            // is no blackjack
                            else {
                                //score <=10 and card is Ace
                                if(this.score<=10 &&card.value=='ace1or11') {this.score+=11;return this.score;}
                                if(this.score>10 &&card.value=='ace1or11') {this.score++;return this.score;}
                                
                                this.score+=card.value;return this.score;
                            
                            }





                        }
        

                         
                         
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