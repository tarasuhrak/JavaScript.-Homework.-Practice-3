function suminteger(){
     let a = 9;
     let b = 11;
     let c=a+b;
     return c;
};

describe ("verify if program get correct sum of the two given integers", function(){
    it ("verify if JS program computes correct sum of the two given integers", function(){
        expect(suminteger()).toBe(20,"Sum of two integers is incorrect");
    });
});