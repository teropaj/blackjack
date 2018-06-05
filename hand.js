class Hand {
    constructor(name) {
        this.cards=[];
        this.score=0;
        this.cardCounter=0; //
        this.isAce=false;
        //this.cardNumbers=[]  //values of cards is saved here to check blackjack
        this.kingAndAce=0;
        this.name=name;
        this.addCard=true;
    }

    draw(card) {console.log('');
                if (this.addCard=true){
                    this.cards[this.cardCounter]=card;//put card
                    this.cardCounter++;
                    cl('Hand raw 13 '+card);
                    //this.cardNumbers.push(card.number); 
                 
                    var printNumber=this.jackQueenKing(card.number);
                    //cl(this.name+' card '+card.suite+' '+printNumber);
                    cl(card);
                    var result=this.calculateScore(card);
                    console.log(this.name+" "+card.suite+' '+printNumber+' Score '+result);
                    if(this.score>21) {console.log('Score over 21. '+this.name+' loses');this.addCard=false;return}
                    cl(result+' OWN typeof '+typeof result);
                }
                //if (typeof result=='undefined') {cl('OWN OWN undefined');exit();}
                 
                 
                //if (dealer.cards.lenght<player.cards.lenght && dealer.score<17) dealer.draw(deck.drawing());
                
             }

    calculateScore(card) {  // if first card
                        if(this.cardCounter==1) { 
                            //if dealer has not any cards
                            if(dealer.cards.length==0) dealer.draw(deck.drawing());
                            //is Ace??
                            if (card.value=="ace1or11"){    
                            this.isAce=true;this.score+=11;return "Ace:"+this.score
                            }
                            // first card is not ace
                            else {this.score+=card.value;return this.score;}
                    
                        }

                        // if second card
                        if(this.cardCounter==2){

                            //if dealer has has only 1 card
                            if(dealer.cards.length==1) dealer.draw(deck.drawing());
                             
                            //is blackjack
                            if (this.isAce==true && card.number>9 ) {
                                if(this.name=='player') {console.log('Blackjack!!! Player wins');}
                                return 'Blackjack'}
                            // is no blackjack
                            else {
                                //score <=10 and card is Ace
                                if(this.score<=10 &&card.value=='ace1or11') {this.score+=11;return this.score;}
                                if(this.score>10 &&card.value=='ace1or11') {this.score++;return this.score;}
                                
                                this.score+=card.value;return this.score;
                            
                            }
                        }
                        if (player.cardCounter>2){
                            cl('was player'); 
                            /*
                            if(this.score<=10 &&card.value=='ace1or11') {this.score+=11;return this.score;}
                            if(this.score>10 &&card.value=='ace1or11') {this.score++;return this.score;}
                            this.score+=card.value;
                            */
                            this.addScore(card);


                            this.dealerAddCard(); 
                            
                            return this.score;
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
    dealerScoreToOver17 (){cl('was here'+dealer.score);
        while(dealer.score<17) {this.dealerAddCard()}
                            this.checkWinner()}
    dealerAddCard (){cl(dealer.score);if(dealer.score<17) {dealer.draw(deck.drawing())}}

    checkWinner () {
        if (dealer.score>21)
         {console.log(this.name+" loses");return}
        
        let a=(dealer.score<player.score) ? "Player wins":"Dealer wins"
        console.log(a);
        
        
        }
    addScore(card){
        if(this.score<=10 &&card.value=='ace1or11') {this.score+=11;return}
        if(this.score>10 &&card.value=='ace1or11') {this.score++;return}
        this.score+=card.value;
        return
    }
    

    

                          


} //class