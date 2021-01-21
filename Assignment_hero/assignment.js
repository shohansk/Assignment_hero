
//Kilotometer to Meter covert funtion

function kilometerToMeter(meter){
    if(meter<0){
        console.log("Please Enter valid distance ditance can not be Negative"); // For inputing negative distance value this will be shown
    }
    return kilometer=meter/1000; //for convert meter in kilometer 
}

//Budget Calculator function

function budgetCalculator(watch_quantity,mobile_quantity,laptop_quantity) {
     if(watch_quantity==0 || mobile_quantity ==0 || laptop_quantity==0){
         console.log("Please buy at lest one item each"); //Message if the any item missing becase buy at lest one item
     }
     else {
       var  total_price=(watch_quantity*50)+(mobile_quantity*100)+(laptop_quantity*500); //simple sum of total;
     }
     return total_price;
     
}

// Hotel Cost function

function hotelCost(days) {
    if(days<=0){
        console.log("Please enter valid days"); //Message for invalid days
    }

    else{
        if(days<=10){
            return total_cost=days*100;
        }
        else if(days<=20){
            return total_cost=1000+((days-10)*80); // if days are more then 10 days.. then the cost will same for 10 days which is is 1000,that why add this money 
        }
        else if(days>20){
            return total_cost=1800+((days-20)*50); // if days are more then 20 days.. then the cost for the 1st 10 is 1000 and 2nd 10 days cost 800 ...thats why add 1800 money
        }
    }
}

// Mega Friend funtion

function megaFriend(names) {
      var size = 0; //for compered 
      var longest_name; //for keeping the longest name 
      for (var i=0; i<names.length;i++) {
        if (names[i].length >size) {
          var size = names[i].length;  //if the size of names  is samller then the size number will be updated
          longest_name = names[i];   
        }
    }
     return longest_name;   
}


