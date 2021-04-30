//adding querySelectors and refs

var displayName = document.querySelector('#displayName');
var getInput = document.querySelector('#inputBox');
//var greetBtn = document.querySelector('#greetBtn');
var resetBtn = document.querySelector('#resetBtn');
var displayCount = document.querySelector('#countNumber');

var localLogic = {}

if (localStorage['userMap']) {
    //local storage can only store strings so convert to store object or arrays
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
var clearBox = function () {
    getInput.value = "";
}

//display the total counts of greetings
var setCounter = function () {

    displayCount.innerHTML = Object.keys(greet.getlocal()).length;
}
setCounter();

var submitForm =function(){
    displayName.classList.remove('green');
    displayName.classList.remove('red');
    var radioBtn = document.querySelector('input[name="radioLang"]:checked');
    var nameFromDom = getName().name;
    console.log('type of name from DOM : '+typeof(parseFloat(nameFromDom)));
    //ensure theres no empty name and there is a checked radio button
    if (nameFromDom){
        if (radioBtn !== null) {
            console.log(Object.keys(localLogic).length)
            var langFromDom = greet.setLang(radioBtn.value);
            displayName.innerHTML = greet.greetNow(nameFromDom, langFromDom);
            //console.log(greet.getlocal())
            localStorage.setItem('userMap', JSON.stringify(greet.getlocal()));
            setCounter();
            clearBox();
        } else {
            displayName.innerHTML = ('Please choose your language first');
            displayName.classList.add('red');
        }
    } else {
        displayName.innerHTML = 'Please type in name';
        displayName.classList.add('red');

    }
        return false;
};

//Event listener for the reset button

resetBtn.addEventListener('click', function run() {
  
    displayName.innerHTML = 'Congratulations! Application has been reset succesfully';
    displayName.classList.add('green');
    localStorage.clear();
    displayCount.innerHTML =0;
   //location.reload();
});
