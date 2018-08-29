function rezult(){
     let a = 1;
     let b = 49;
     if ((a===50) || (b===50) || ((a+b)===50))  return true;
};

describe ("verify if JS program that compare two given numbers return true if one of the number is 50 or if their sum is 50 ", function(){
    it ("verify if JS program that compare two given numbers return true if one of the number is 50 or if their sum is 50", function(){
        expect(rezult()).toBe(true,"Rezult is not valid");
    });
});