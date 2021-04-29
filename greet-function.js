function GreetMe(nameList) {

    var settingName = "";
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


    function setLanguage(languageSet) {
        if(languageSet == "English"){
            messaging = "Hello , " + nameSet  + '!';
            total++;
            
            
        }
        else if(languageSet == "Afrikaans"){
            messaging = "Hallo , " + nameSet + '!';
            total++;
            
        }
        else if(languageSet == "isiXhosa"){
            messaging = "Molo, " + nameSet  + '!';
            total++;
         
           
        }
        
    
    }
    function getLanguage(){
        
        return messaging;
    }
    

    function countNames() {
        return namesList.length;
       // return total;
    }

    

    if (localStorage['name']){
        // ensure catSpotted is a number
        existingNam = localStorage['name'];
    }
    




    return {
        setName,
        getName,
       setLanguage,
       getLanguage,
        countNames

    }
}