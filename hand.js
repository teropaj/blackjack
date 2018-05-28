class Hand {
    constructor() {
        this.cards=[];
        this.score=0;
        this.cardCounter=0; //
        this.isAce=false;
        this.cardNumbers=[]  //values of cards is saved here to check blackjack
        this.kingAndAce=0;
    }

    draw(card) {this.cards[this.numberOfCards]=card;this.cardCounter++;
                this.cardNumbers.push(card.number);
                this.calculateScore(card);}

    calculateScore(card) {if (this.score<=10 && card.value=="ace1or11") {this.score+=11;this.isAce=true;return;}
                          if (this.score>10 && card.value=="ace1or11") {this.score++;this.isAce=true;return;}


                          if(this.cardCounter>1){
                            cardNumbers.forEach(element => {if (element==13 || element=="ace1or11") this.kingAndAce++;})
                            if (this.kingAndAce==2) return "blackjack";    
                          };

    } //calculateScore ends


                          

    
} //class