$(document).ready(function(){
  $("#leap-year").submit(function(event){
    event.preventDefault();

    var year = parseInt($("#userInput").val()); //note parseInt
    $("#initially-hidden").text(result); //displays returned boolean value

    //business logic
    var leapYear = function(year){
      if((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)){
        return true;
      }else{
        return false;
      }
    };
    //ui logic
    var result = leapYear(year); //funct takes user input var as argument

    $(".year").text(year);

    if(!result){                //if result === false
      $(".not").text("not");
    }else{
      $(".not").text("");
    }

    $("#initially-hidden").show();
  });
});

//commit after each passing bahavior

//when eval for x divisible by y use % op to check for 0

//if year is divisible by 100, return false
//if year is divisible by 4, return true

//becomes if year is not divisible by 100 % is divisible by 4 return true

//if year is divisible by 400 returns true

// Always keep your business and user interface logic separate.
// Follow the BDD process to clearly outline your program's intended
// behaviors. Focus on one behavior at a time. And write the minimum
// code to make each spec pass. Developing these habits now will make
// tackling the complex applications you'll soon build far easier!
