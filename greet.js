//adding querySelectors and refs

var displayName = document.querySelector(".name");
var getInput = document.querySelector(".input");
var resetBtn = document.querySelector(".resetBtn");
var displayCount = document.querySelector('#countNumber');
var nameList = document.querySelector(".myList")


var localLogic = {};
var empty ={};

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
    radioBtn = document.querySelector('input[name="radioLang"]:checked').checked = false;
   



}

//Used to set counter
var setCounter = function () {

    displayCount.innerHTML = Object.keys(greet.getlocal()).length;
}
setCounter();



var submitForm = function () {
    displayName.classList.remove('green');
    displayName.classList.remove('red');
    var radioBtn = document.querySelector('input[name="radioLang"]:checked');
    var nameFromDom = getName().name;

    if (nameFromDom) {
        if (radioBtn !== null) {

            var langFromDom = greet.setLang(radioBtn.value);
            displayName.innerHTML = greet.greetNow(nameFromDom, langFromDom);

            localStorage.setItem('userMap', JSON.stringify(greet.getlocal()));
            setCounter();
            restart();
            nameList.innerHTML = Object.keys(greet.getlocal());


        }
        else {
            t3 = setTimeout(function () { displayName.innerHTML = 'Error! Language not selected' }, 0);
            displayName.classList.add('red');
            t4 = setTimeout(function () { displayName.innerHTML = 'Please select language of choice.'; }, 3000);
            //localStorage.clear();

        }
    } else {
        displayName.classList.add('red');
        t3 = setTimeout(function () { displayName.innerHTML = 'Error! Name not selected.' }, 0);
        //setTimeout(displayName.innerHTML = 'Please enter your name',5000) ;
      //  displayName.classList.remove('red');
        t2 =  setTimeout(function () { displayName.innerHTML = 'Please enter your name'; }, 3000) ;
        //displayName.classList.remove('green');
        localStorage.clear();
     



    }
    return false;

};



resetBtn.addEventListener('click', function btn() {
    var clearance=greet.getlocal();
    displayName.classList.remove('red');
    var t1 = setTimeout(function () { displayName.innerHTML = 'Congratulations! Application has been reset succesfully'; }, 0);
    var t2 = setTimeout(function () { displayName.innerHTML = 'Please enter your name'; }, 3000);
    t1;
    displayName.classList.add('green');
    t2;
    localStorage.clear();
    location.reload();
    nameList.innerHTML ='No names to show.';
    //displayName.classList.remove('green');
    displayCount.innerHTML = 0;
    restart();
  //  localStorage.clear();
  
    location.reload();
   // nameList.innerHTML ='No names entered';
  //  radioBtn = document.querySelector('input[name="radioLang"]:checked').checked = false;
    //radioBtn.innerHTML = unchecked;
    //location.reload();
});
