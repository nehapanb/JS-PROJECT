$(document).ready(function(){
    $('.head1').html("hi all")
    $('.head1').css("background-color","peach")

    let a = $('#head2')
    a.html("Neha")
    a.css({
        "color":"pink",
        "background-color":"white",
        "padding":"20px"
    })
    $('#btn1').click(function(){
        $('#para').slideup(2000)

    })
    $('#btn2').click(function(){
        $('#para').slidedown(2000)
    })
    $('#btn3').click(function(){
        $('#para').slideToggle(2000)
    })
    $('#btn4').click(function(){
        $('#para').fadein(2000)
    })
    $('#btn5').click(function(){
        $('#para').fadeout(2000)
    })
    $('#btn6').click(function(){
        $('#para').fadeToggle(2000)
    })
})