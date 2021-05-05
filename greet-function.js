function GreetMe() {

var local ={}
var counter = 0

function setlocal(name){
    local = name
}

function getlocal(){
    return local
}



    function greetNow(userName,languageSet) {

    //Convert lowercase first letter to make sure names are all are in same format
  //  userName= userName.substring(0, 1).toUpperCase()+ userName.substring(1).slice();
    userName= userName.substring(0, 1).toUpperCase() + userName.substring(1).toLowerCase();
        if(local[userName] === undefined){
            local[userName] = 0;
            counter++;
            
           
        }
        else{

            local[userName]++;
           
            
        }
        if(languageSet == "English"){
            return "Hello, " + userName  + '!';
            //total++;
            
            
        }
        if(languageSet == "Afrikaans"){
            return "Groete, " + userName + '!';
            //total++;
            
        }
        if(languageSet == "isiXhosa"){
            return "Molo, " + userName  + '!';
            //total++;
            
        }   
    }

    function getCounter(){
        return  counter;
    }

    /*
    function getLanguage(){
        
        return messaging;
    }
    

    function countNames() {
        return namesList.length;
       // return total;
    }

    

    
    */
   var setLang = function (value) {
    var lang = '';
    if (value === 'English') {
        lang = 'English';
    }
    if (value === 'Afrikaans') {
        lang = 'Afrikaans';
    }
    if (value === 'isiXhosa') {
        lang = 'isiXhosa';
    }
    return lang
}
    return {

    setlocal,
    getlocal,
    getCounter,
    greetNow,
    setLang
        //setName,
        //getName,
       //setLanguage,
       //getLanguage,
        //countNames

    }
}