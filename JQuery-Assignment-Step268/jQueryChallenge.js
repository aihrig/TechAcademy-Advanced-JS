$(document).ready(function() {
    // Select first h1 tag and change the html to 'Good bye!'
    $('h1:first').html('Good bye!');

    $('#para').text('I REALLY am a paragraph!');

    $('.myDivClass').css('border', '3px solid red');

    $('ul:nth-child(2) li:nth-child(2)').text('Found it!');

    $('#clickMe').click(() => alert('You clicked me!'));

    $('#hoverMe').hover(
        function() {
            $(this).css('color', 'green');
        },
        function() {
            $(this).css('color', 'black');
        }
    );

    $('#blurMe').blur(() => {
        $('#blurMe').val('Come back!');
    });

    $('#hideMe').click((evt) => {
        $('#hideMe').hide();
    });

    $('#showMe').click(() => {
        $('#notHiding').show();
    });

    $('#toggleMe').click(() => {
        $('#toggler p').toggle();
    });

    $('#fadeOutButton').click(() => {
        $('#fadeOut').fadeOut();
    });

    $('#slideItDown').click(function() {
        $('#slide').slideDown('slow');
    });

    $('#growButton').click(() => {
        $('#growMe').animate({height: '100px', width: '100px'})
            .css('background', 'green');
    });

    $('#growMeButton').click(() => {
        $('#stopMeGrowing').animate({height: '200px', width: '200px'}, 5000, () => {
            alert('All done!');
        });
    });
    $('#stopGrowingButton').click(() => {
        $('#stopMeGrowing').stop();
    });

    $('#showTextButton').click(() => {
        alert( $('#showTextInput').val() );
    });

    $('#changeText').click(() => {
        $('#changeText').text('I\'ve changed!');
    });

});