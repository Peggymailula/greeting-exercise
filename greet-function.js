function GreetMe() {

var local ={}
var counter = 0

function setlocal(name){
    local = name
}

function getlocal(){
    return local
}


/*var settingName = "";
    var messaging="";
    var nameListing = existingNames || [];
    var total=0;

    function setName(settingName) {
        nameSet = settingName;
        if(nameSet){
            if (!namesList.includes(nameSet)) {
                namesList.push(nameSet);
            }
        }
        
        
    }


    function getName() {
        return nameSet;
        
    }
*/

    function greetNow(userName,languageSet) {

    
        if(local[userName] === undefined){
            local[userName] = 0;
            counter++;
            
           
        }
        else{

            local[userName]++;
           
            
        }
        if(languageSet == "English"){
            return "Hello," + userName  + '!';
            //total++;
            
            
        }
        if(languageSet == "Afrikaans"){
            return "Hallo," + userName + '!';
            //total++;
            
        }
        if(languageSet == "isiXhosa"){
            return "Molo," + userName  + '!';
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