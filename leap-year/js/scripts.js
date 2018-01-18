$(document).ready(function(){
  $("#leap-year").submit(function(event){
    event.preventDefault();

    var year = parseInt($("#userInput").val()); //note parseInt
    $("#initially-hidden").text(result); //displays returned boolean value
    var leapYear = function(year){
      if(year % 100 === 0){ //if remainder(%) = 0 than divisible evals true
        return false;
      }else if(year % 4 === 0){
        return true;
      }else{
        return false;
      }
    };

    var result = leapYear(year); //funct takes user input var as argument
    console.log(result);

  });
});

//commit after each passing bahavior

//when eval for x divisible by y use % op to check for 0
