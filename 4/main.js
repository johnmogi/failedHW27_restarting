/// <reference path="jquery-3.4.1.js" />

$(() => {

    function getMiddlePrimaryNumbers(min, max) {
        if(min>max){
            alert("Error :  please try again, the smaller is bigger then the bigger number!")

        }
      
        let numArray = new Array;
        numArray= []
      
        numArray.push(min)
        numArray.push(max)


function testPrimary(num){
    const finalArray = []
if(num === 1 || num ===2){return}
else{
for (let i = 0; i < num; i++) {
    if((num/ i )%2 === 0){
        finalArray.push(num)
        console.log(finalArray)
    }
}
return finalArray
}

    // for (let i = 0; i < max; i++) {

    //     if(min/ i  % i ===1){console.log(min)}
           
    //    }
}
       testPrimary(min)

    //    testPrimary(max)
        console.log(numArray)
    }


    $("#one").click(() => {
        const oneNum = parseInt(prompt("give me the smaller number"));
        const twoNum = parseInt(prompt("give me the bigger number"));

        getMiddlePrimaryNumbers(oneNum,twoNum)
});

    }); //RF
    
 