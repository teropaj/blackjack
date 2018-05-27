function log(text) {
    console.log(text);
    var para = document.createElement("P");
    var t = document.createTextNode(text);
    para.appendChild(t);
    document.getElementById("myDIV").appendChild(para);

}
function shareCards(card){
shareCard(card);$('#'+card).css('visibility','visible');
}




var suites=['hearts','diamonds','clubs','spades'];
var deckOfCards=[];
var player =[];
var dealer =[];
var up=false,left=false;
var pictureWidth;
var horizontal;
var vertical;
var playersPoints;
var dealersPoints;
var playerCards =['player0','dealer0','player1','dealer1'];

//alert (pictureWidth+'pictureWidth');
deck();
shuffle();
//drawCard();
//log("testi");
//player take 2 cards
//document.getElementById('dealer').innerText='joo';
log('Player takes cards');
//$(".ball_footballbox").append('<img src="img/door-right.png">');
//alert();
alert($('#player0').offset().top);
for(index in playerCards){
shareCard(playerCards[index]);
setTimeout(wait,4000);
$('#'+playerCards[index]).css('visibility','visible');}
shareCard('empty');
   for (i=0;i<2;i++) {

  drawCard('player','player'+i);
  //if(i==0) moveCardard();
  if (i===1) { playersPoints=calculateHand(player);
    if(playersPoints=='BLACKJACK') {log('BLACKJACK Player wins');
      $('#playersCards').append('BLACKJACK!! Player wins');}
    else {log('Players hand is '+calculateHand(player));
    $('#playersCards').append(''+playersPoints);
  }
  }//log('dealer takes a card');
  drawCard('dealer','dealer'+i);
  //log(calculateHand(player));
  if (i===1) { dealersPoints=calculateHand(dealer);
  log('Dealers hand is '+dealersPoints);
  $('#dealersCards').append(''+dealersPoints);

  }

}

if(dealersPoints=='BLACKJACK') log('BLACKJACK  dealer wins.')
else {
  if(Number(playersPoints)>Number(dealersPoints)) {log('Player wins');$('#playersCards').append('WINS');}
  else {log('Dealer wins');$('#dealersCards').append('  WINS  ');}



}

function wait(){console.log('waati');}

moveDeck();
//shareCard();



//log(calculateHand(player));
//printCards();
//cards=new card;
// dealer take a cards
//log('dealer takes a card');

//changePicture();
hide();

//document.getElementById('dealer').innerText=""+

//document.getElementById('player').innerText=""+calculateHand(player);
//log('calculateHand '+calculateHand(dealer));
//log('calculateHand '+calculateHand(player));

function moveDeck(){

$(document).ready(function(direction){

  $("#deck").click(function(){//console.log(document.getElementById('deck'));
  //var distance=Math.floor($(window).width()*0.2);//alert(distance);

  var deckX=$('#deck').offset().left;
  var deckY= $('#deck').offset().top;
  horizontal=$('#dealer0').offset().left-deckX;
  vertical=$('#dealer0').offset().top-deckY;
  var horizontalPix=horizontal+"px";
  var verticalPix=vertical+"px";

  alert('horizontal '+horizontal+' vertical '+vertical+'br');
      if (up===true ) {$("#deck").animate({left:horizontalPix,top:verticalPix});up=false;
        console.log('up= '+up);}
      else {$("#deck").animate({left:horizontalPix,top:verticalPix});up=true;
          console.log('up= '+up);}
  });
});
}

function shareCard(card){
  console.log('71 ');

  //$(document).ready(function(direction){console.log('72');
  var cardX=$('#'+card).offset().left;
  var cardY=$('#'+card).offset().top;
  var horizontal=cardX-$('#deck').offset().left;
  var vertical=cardY-$('#deck').offset().top;
  $('#deck').animate({left:horizontal,top:vertical});
  /*

    $("#deck").ready(function(){console.log(document.getElementById('deck')+' left is '+left);
        var distance=Math.floor($(window).width()*0.1);//alert(distance);

        if (left===true ) {var movepix=distance+"px";
          $("#deck").animate({bottom:"+="+movepix});left=false;
          console.log('left= '+left);}
        else {$("#deck").animate({bottom:"-="+movepix});left=true;
            console.log('left= '+left);}
    });
  //});
*/
  }

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
/*
makeDeck.prototype.drawing = function() {
    computer.push(deck.pop());
};*/



function drawCard(whoTook,cardNumber) //'dealer' or 'player'
 {



    if(whoTook=='dealer') {//log('player takes');
      card=deckOfCards.pop();

      cardFace=jackQueenKing(card.number);
      log(card.suite+'  '+cardFace);

      dealer.push(card);console.log(dealer);

      //debugger;
      //document.getElementById("dealer").innerText='joo';
      //calculateHand(dealer);
      //calculateHand('dealer');
    }
    else {//log('Player takes');
      card=deckOfCards.pop();
      //if(player.length==0) card.number=1;
      //if(player.length==1) card.number=11;
      cardFace=jackQueenKing(card.number);
      log(card.suite+'  '+cardFace);
      player.push(card);
      //debugger;
      //document.getElementById("player").innerText='joo';
      //calculateHand(player);

    }
    console.log('whoTook '+whoTook);
    //if(whoTook.length>1) log('Together '+calculateHand(whoTook));
    //  console.log(player);}
  //  console.log(whoTook+' took card.');


     changePicture(card,cardNumber);//korttiolio,html-elementti

  }
//Jack, Queen, and King
function jackQueenKing(card){
  if (card==11) return "Jack";
  if (card==12) return "Queen";
  if (card==13) return "King";
  if (card==1)  return "Ace";
  return card;
}



function shuffle() {
  for (b=0;b<=51;b++){
    random=Math.floor(Math.random() * 52);
    c=deckOfCards[random];
    deckOfCards[random]=deckOfCards[b];
    deckOfCards[b]=c;

  }
}

function calculateHand(hand) {



  amount =[];
  var counter=0,card=0;
  counterText="";
  isAce=false;
//  log('124 calculateHand counter is '+counter);
  console.log(hand);
  for (indexOfHand=0;indexOfHand<hand.length;indexOfHand++) {
    isAce=false;
    //console.log('134 counter is '+counter+' indexOfHand is '+indexOfHand);
    if(hand[indexOfHand].number==1) {isAce=true;
      //log('128 The card is a '+hand[indexOfHand].suite+' ace');
    }
    if(hand[indexOfHand].number>9 ) {
    counter=counter+10;console.log('141');continue;
    //log(hand[indexOfHand]);
    }
    else {
    if (hand[indexOfHand].number>1) {counter =counter+hand[indexOfHand].number;
    console.log('146');

    continue;}
    }

    //log('137 add to counter '+card);
    //log('138 counter is '+counter);
    console.log('148 card '+hand[indexOfHand].number+'gets value '+card);
    //counter=counter+card;
    //log('140 counter is '+counter);
    //log('139 counter is '+counter);
    //log('139 '+counter);

    counterText=counterText+counter;



    if(counter<11 && isAce==true) {counter+=11;
    // log('Ace is now 11');console.log('Ace is now 11');
    continue;}
    if (counter>10 && isAce==true) {counter+=1;console.log('Ace is now 1');continue;}
    //log('counter is '+counter);
    //log(counterText);
    //debugger;
    //document.getElementById('dealer').innerText='joo';
    //log('152 '+counter);
    if(isAce==false) counter=counter+card;
    isAce=0;

    //console.log('166 counter is '+counter+' indexOfHand is '+indexOfHand);
  }
  if (typeof(hand[1]) !== 'undefined'){
    if(hand==player){
      if(hand[0].number===1 && hand[1].number>10) {//$('#playersCards').append('BLACKJACK');
        return 'BLACKJACK';}
      if(hand[0].number>10 && hand[1].number===1) return 'BLACKJACK';
    }
  }
  return counter+'';
}
function makePictureOfCard(carde){

  var number2=carde.number;
  if (number2===1) number2='ace';
  if (number2===11) number2='jack';
  if (number2===12) number2='queen';
  if (number2===13) number2='king';

  suite=card.suite;
  file='png/'+number2+'_of_'+suite+'.png';


  return file;


}
//korttiolio,elementti
function changePicture(card,element){


  img=document.getElementById(element);
  console.log(img);

  file=makePictureOfCard(card);



  //$('img').width(80);

  //img.src=file;
  var pictureWidth=$(window).width()*0.1;
  //alert('pictureWidth '+pictureWidth);
  $('#'+element).width(pictureWidth).attr('src',file);

  $('#'+element).width(pictureWidth);
}
 /*

function printCards () {for(var a=1;a<=52;a++) {//cardlog=a+' '+deck[a];
  console.log(a);console.log(player[a]);}}*/
function takeButton(){alert($('#player0').offset().top+' '+$('#dealer0').offset().top);
}


function hide(){

  $(document).ready(function(){
    $("#player0").ready(function(){
        $(this).hide();
    });
});
}

function moveCard(card){
//alert('moves card')




$('#player0').ready(function(){
    //$("button").click(function(){
        $(this).animate({left: '250px'});
  //  });
});
}


/*
$(document).ready(function(){
    $("#hide").ready(function(){
        $("p").hide();
    });
    //
*/


function positionOfCard(card){
  return $(card).position();
}


function positionOfDeck(){
  $( "#deck" ).animate({

  x: "50px"

}, 300, function() {
  // Animation complete.
});

}


// Helper function to get an element's exact position
function getPosition(el) {
  var xPos = 0;
  var yPos = 0;

  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}
function giveCardWidth(){

}
