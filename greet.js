var languages = document.querySelector(".language");
var GreetMeBtn = document.querySelector(".button");
var names = document.querySelector(".namesInput");
var messages = document.querySelector(".message");
var count = document.querySelector(".counter");
var resetBtn = document.querySelector(".resetBtn")



//var type= languages.value;
var total=0;


var existingNames = localStorage.getItem('name');
var counting = localStorage.getItem('counter');

var namesList = existingNames || [] ;
//var newNames=[];



function greet(){
    
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    if (checkedRadioBtn){
        var type = checkedRadioBtn.value;
    }
       
    var greet= GreetMe(namesList); 
    greet.setName(names.value);  
    greet.getName();
    greet.setLanguage(type);
    localStorage.setItem('counter',JSON.stringify(namesList.length) );
    messages.innerHTML= greet.getLanguage();
   count.innerHTML= JSON.parse(localStorage.getItem('counter'));
 
   names.value= "";
   

}



GreetMeBtn.addEventListener('click',greet);

resetBtn.addEventListener('click', function run() {
    
    //localStorage.setItem('userMap', JSON.stringify({}));
    count.innerHTML = 0;
    messages.innerHTML = 'Welcome! Enter your name and pick your desired language.';
});

