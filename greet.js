//references to DOM using document.querySelector()

var languages = document.querySelector(".language");
var GreetMeBtn = document.querySelector(".button");
var names = document.querySelector(".namesInput");
var messages = document.querySelector(".message");
var count = document.querySelector(".counter");
var resetBtn = document.querySelector(".clearBtn")



//var type= languages.value;
var total=0;


var existingNames = localStorage.getItem('name');
var counting = localStorage.getItem('counter');

var namesList = existingNames || [] ;
//var newNames=[];

//var instance = ggg(namesList)



function greet(){
    
    var checkedRadioBtn = document.querySelector("input[name='language']:checked");
    if (checkedRadioBtn){
        var type = checkedRadioBtn.value;
    }
       

    
   
    var greet= GreetMe(namesList); 
    greet.setName(names.value);  
    greet.getName();
    greet.setLanguage(type);
    //localStorage.setItem('count',getName);
    messages.innerHTML= greet.getLanguage();
   count.innerHTML= greet.countNames();
   names.value= "";
   
 
  

 
   


}

//count.innerHTML = getCounter();



 
function resetData(){

  return ;
    
}

GreetMeBtn.addEventListener('click',greet);
//resetBtn.addEventListener('click',resetData);






//function getCounter(){

//return namesList.length; }
 
//resetBtn.addEventListener('click',resetData)
