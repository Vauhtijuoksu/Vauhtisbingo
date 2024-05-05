let username
const year = "2024"
$(document).ready(function(){
    $("#username").on("input", function(){
        username = $(this).val()
        if (username){
            $("#go").removeClass("disabled")
        } else {
            $("#go").addClass("disabled")
        }
    });
    $("#go").on( "click", function() {
        if (username){
            localStorage.setItem('username-' + year, username);
            window.location.href = "speed/play.html";
        }
    });
});