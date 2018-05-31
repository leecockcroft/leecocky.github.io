function ajax(){
$('#btnBJ').load('bj/index.html');
}
/*var url ='blackjack.html.json';

$.getJSON(url,function(response){
var statusHTML = '<ul class="bulleted">';

$.each(response,function(index,employee){

statusHTML+='<li>'+employee.name+'</li>';


  
});
statusHTML+='</ul>';
$('#ajax').html(statusHTML);

});*/



/*function sendAjax() {




};*/





//wont work with a selector
//url location of the file, the data is optional, data sent to web server, added as a query string 
//callback 

/*var url = 'side.html';
var callback=function(response){

};

$.get(url,data,callback); 

*/



/*





function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

    	var emp = JSON.parse(xhttp.responseText);

      document.getElementById("demo").innerHTML =
      emp;
    }
  };
  xhttp.open("GET", "task2.json", true);
  xhttp.send();
}

loadDoc();

});*/


/*

var card1 = getDeck();

var card2 = getDeck();

var playerAmount=[];
var dealer=[];
var random=card1[Math.floor(Math.random() *card1.length)].Value;
var together =document.getElementById('third');

dealCards=()=> {

var first=card1[Math.floor(Math.random() *card1.length)].Value;

var second=card1[Math.floor(Math.random() *card1.length)].Value;
var suit =card1[Math.floor(Math.random() *card1.length)].Suit;

var firstCard =document.getElementById('cardOne');
var secondCard =document.getElementById('cardTwo');

firstCard.innerHTML=first+" " +suit;
secondCard.innerHTML=second+" " + suit;

var result=first+second;
playerAmount.push(result);
together.innerHTML=result;
if(result==21){
	alert('blackjack, your cards were '+first+" "+suit+" "+second+" "+suit);
}



}



var btn = document.getElementById('deal');
btn.addEventListener('click',()=>{
var hide = document.querySelectorAll('.hide');


for(var i=0;i<hide.length;i++){
hide[i].style.display='block';


}



dealCards() 


})





var stand = document.getElementById('stand');
var hit =document.getElementById('hit');


hit.addEventListener('click',()=>{
var nextCard=getDeck();
var next=nextCard[Math.floor(Math.random()*nextCard.length)].Value;
playerAmount.push(next);
console.log(playerAmount);
	
const reducer = (accumulator, currentValue) => accumulator + currentValue;
var test=playerAmount.reduce(reducer);
together.innerHTML=test;
if(test >21){

	alert('bust, youve got '+test);
	playerAmount=[];

}
if(test==21){
	alert('blackjack');
}


})





var test=5;
var test2=6;
var dateTest=new Date(new Date().getFullYear(), 11,23);
var dateTest2=new Date(new Date().getFullYear(),6,9);
var months = ["January",'Febuary','March','April','may','june','july','August','Septemer','october','november','december'];

data=(a,b)=>{
	a=document.getElementById('input1').value;
	b=document.getElementById('input2').value;
var months = ["January",'Febuary','March','April','may','june','july','August','Septemer','october','november','december'];

var dateTest3=new Date(new Date().getFullYear(),5,6);
console.log(dateTest3);
}


var btntest=document.getElementById("btn-test");

btntest.addEventListener('click',()=>{

data();


})
var myArray=[];

function myFunction(name,...parem){

	myArray.push(...parem)
	 myArray.forEach(function(el){

		console.log(myArray+el);
	})
	 return myArray
}
myFunction('lee',1,2,3,4,5);
function cardreader(el) {

return el*2;

}

var mytest = myArray.map(cardreader);
console.log(mytest)

document.write(myArray[2]);

let toybox ={item1:'car',item2:'ball'};
let {item1,item2}=toybox;
console.log(item1,item2)

let widgets=['wid1','wig2','wig3'];
let [a,...b]=widgets;
console.log(a);

const question=new Map();
question.set('question1','type of something');
question.set(1,'test1');
question.set(2,'test2');
question.set(3,'test3');
question.set('correct', 3);
question.set(true, 'that is correct');
question.set(false, 'that is incorrect');
let questions=[];
let answer=[];


for(let student of question){

questions.push(`${student[0]}`)

answer.push(`${student[1]}`)

	
}





var s,
NewsWidget = {

  settings: {
    numArticles: 5,
 /*  articleList: `$("#article-list")`,*/
 /*   moreButton: $("#more-button")*/
  

 /* init: function() {
    // kick things off
    s = this.settings;
  }

};

(function(){
 NewsWidget.init();



})*/