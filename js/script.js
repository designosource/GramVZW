$(document).ready(function() {


    if (window.matchMedia('(max-width: 768px)').matches)
    {
        $(".icon").click(function(){
            if($('#myMenu').is(':visible')) {
                $('#myMenu').hide(500)
                $('.icon').html('<i class="fas fa-bars"></i>');
            }
            else {
                $('#myMenu').show(500);
                $('.icon').html('<i class="fas fa-times"></i>');
            }
        });

        $('#myMenu a').on("click", function(){
            $('#myMenu').hide(400);
            $('.icon').html('<i class="fas fa-bars"></i>');
        });


    } else {

    }



    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
});