
//coding for activating table reservation

$("#reservation").click(function(){

    $("#tablesreservation").modal("show");
});



// coding for activating log in
$("#loginModalClicker").click(function(){
    $("#loginModal").modal("show");
});

//coding for login form closing

$("#closeLogin").click(function(){
    $("#loginModal").modal('hide');
});


// coding for table reservation form closing

$("#closeReservation").click(function(){
    $("#tablesreservation").modal("hide");
});