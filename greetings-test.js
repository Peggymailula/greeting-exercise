describe('Greet exercise:Name setting' , function(){
    it('should take set and return  Peggy\'s name from the input box' , function(){
        let greet1 = GreetMe();
        greet1.setlocal('Peggy');
        
         assert.equal('Peggy',greet1.getlocal());

});
it('should take set and return  Annie\'s name from the input box' , function(){
    let greet1 = GreetMe();
    greet1.setlocal('Annie');
    
     assert.equal('Annie',greet1.getlocal());

});
it('should take set and return  Amanda\'s name from the input box' , function(){
    let greet1 = GreetMe();
    greet1.setlocal('Amanda');
    
     assert.equal('Amanda',greet1.getlocal());

});
})
describe('Greet exercise:Language setting' , function(){
    it('should select the English language and the English value be used' , function(){
        let greet1 = GreetMe();
       
         assert.equal("English",greet1.setLang('English'));

});
it('should select the Afrikaans language and the Afrikaans value be used' , function(){
    let greet1 = GreetMe();
   
     assert.equal("Afrikaans",greet1.setLang('Afrikaans'));

});
it('should select the isiXhosa language and the isiXhosa value be used' , function(){
    let greet1 = GreetMe();
   
     assert.equal("isiXhosa",greet1.setLang('isiXhosa'));

});
})


describe('Greet exercise:Message setting' , function(){
    it('should take in the name Amy and use the English language to greet her' , function(){
        let greet1 = GreetMe();
        greet1.setlocal('Amy');
        greet1.getlocal()
        greet1.setLang('English');
        
         assert.equal("Hello, Amy!",greet1.greetNow('Amy','English'));

});
it('should take in the name Enhle and use the Afrikaans language to greet her' , function(){
    let greet1 = GreetMe();
    greet1.setlocal('Enhle');
    greet1.getlocal()
    greet1.setLang('Afrikaans');
    
     assert.equal("Groete, Enhle!",greet1.greetNow('Enhle','Afrikaans'));

});
it('should take in the name Penny and use isiXhosa language to greet her' , function(){
    let greet1 = GreetMe();
    greet1.setlocal('Penny');
    greet1.getlocal()
    greet1.setLang('isiXhosa');
    
     assert.equal("Molo, Penny!",greet1.greetNow('Penny','isiXhosa'));

});
})


describe('Greet exercise:Counter setting' , function(){
    it('should take in one name and return counter as one' , function(){
        var greet2 = GreetMe();
        greet2.setlocal('Mo');
        greet2.getlocal()
        greet2.setLang('isiXhosa');
        greet2.greetNow('Mo','isiXhosa')
        
        
         assert.equal(1,greet2.getCounter());

});

it('should take in three different names and return counter as three' , function(){
    var greet1 = GreetMe();
    greet1.setlocal('Mo');
    greet1.getlocal()
    greet1.setLang('isiXhosa');
    greet1.greetNow('Mo','isiXhosa')

    greet1.setlocal('Peggy');
    greet1.getlocal()
    greet1.setLang('English');
    greet1.greetNow('Peggy','English')

    greet1.setlocal('Amy');
    greet1.getlocal()
    greet1.setLang('Afrikaans');
    greet1.greetNow('Amy','Afrikaans')
   
    
     assert.equal(3,greet1.getCounter());

});

it('should take in six names,whilst two are similar and return counter as four' , function(){
    var greet1 = GreetMe();
  
    greet1.greetNow('Mo','isiXhosa')
    greet1.greetNow('Peggy','English')
    greet1.greetNow('Amy','Afrikaans')
    greet1.greetNow('Ziyanda','isiXhosa')
    greet1.greetNow('Peggy','Afrikaans')
    greet1.greetNow('Amy','English')

    
     assert.equal(4,greet1.getCounter());

});



})