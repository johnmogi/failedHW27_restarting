/// <reference path="jquery-3.4.1.js" />

$(() => {
    // const colorArr = ["red", "green", "blue", "yellow", "magenta", "cyan", "black", "white", "gray" ]
 
    const numArray = [1,2,3,10]

    function getPrice(nums) {
       
      
        getAverage(numArray);  
        
 
    }
 
    function getAverage(average){
       
var total=0;
for(var i in numArray) { total += numArray[i]; }



        if(numArray.length>0 ){

            const avgNum = total / numArray.length
            alert("the average num is: "+ avgNum)
  return avgNum

         }
         else{
             alert("please try again")
         }
    //     else{ 
        
        // $("body").css("background-color", userColor);
    //     }
    }

    getPrice();
  
    }); //RF
    
