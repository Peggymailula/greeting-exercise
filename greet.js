//adding querySelectors and refs

var displayName = document.querySelector(".name");
var getInput = document.querySelector(".input");
var resetBtn = document.querySelector(".resetBtn");
var displayCount = document.querySelector('#countNumber');

var localLogic = {}

if (localStorage['userMap']) {
    
       localLogic = JSON.parse(localStorage['userMap']);
}
//an instance of the greet Factory
var greet = GreetMe();

greet.setlocal(localLogic)

//get the name of the user from the textbox 
var getName = function () {
    var name = getInput.value;

    return {
        name
    }
}

//function to clear the textbox 
var restart = function () {
    getInput.value = "";
}

//Used to set counter
var setCounter = function () {

    displayCount.innerHTML = Object.keys(greet.getlocal()).length;
}
setCounter();

var submitForm =function(){
    displayName.classList.remove('green');
    displayName.classList.remove('red');
    var radioBtn = document.querySelector('input[name="radioLang"]:checked');
    var nameFromDom = getName().name;
   
    if (nameFromDom){
        if (radioBtn !== null) {
          
            var langFromDom = greet.setLang(radioBtn.value);
            displayName.innerHTML = greet.greetNow(nameFromDom, langFromDom);
            
            localStorage.setItem('userMap', JSON.stringify(greet.getlocal()));
            setCounter();
            restart();
        } 
        else {
            t3 = setTimeout(function () { displayName.innerHTML ='ERROR! LANGUAGE  NOT SELECTED!' }, 0); 
            displayName.classList.add('red');
            t4=setTimeout(function () { displayName.innerHTML = 'Please select language of choice.'; }, 3000); 
            //localStorage.clear();
            
        }
    } else {
        t3 = setTimeout(function () { displayName.innerHTML ='ERROR! NAME NOT ENTERED.' }, 0); 
        //setTimeout(displayName.innerHTML = 'Please enter your name',5000) ;
        displayName.classList.add('red');
         t2=setTimeout(function () { displayName.innerHTML = 'Please enter your name'; }, 3000); 
          //displayName.classList.remove('green');
        localStorage.clear();
        //location.reload();

    }
        return false;
};



resetBtn.addEventListener('click', function btn() {
    displayName.classList.remove('red');
    var t1 = setTimeout(function () { displayName.innerHTML = 'Congratulations! Application has been reset succesfully'; }, 0); 
    var t2=setTimeout(function () { displayName.innerHTML = 'Please enter your name'; }, 3000); 
    t1;
    displayName.classList.add('green');
    t2;
    //displayName.classList.remove('green');
    localStorage.clear();
    displayCount.innerHTML =0;
  // location.reload();
});
