$(document).ready(function(){
  $("#leap-year").submit(function(event){
    event.preventDefault();

    var year = parseInt($("#userInput").val()); //note parseInt
    $("#initially-hidden").text(result); //displays returned boolean value
    var leapYear = function(year){
        return false;
    }
    var result = leapYear(year); //funct takes user input var as argument

    console.log(result);

  });
});

//commit after each passing bahavior