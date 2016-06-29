var beNice = require('./data.js');
var output = document.getElementById('output');
function compliment() {
    var nice = beNice();
    output.innerHTML = nice;
}

compliment();
$('body').css({
    display: 'none'
});

$('#getNewButton').on('click', function() {
    loadNewQuote();

});
$(document).ready(function() {
    var color1 = randomColor();
    var color2 = randomColor();
    $('body').css({
        backgroundColor: color1
    });
    $('body').css({
        display: 'inherit'
    });
});


function bounceOut() {
    $('.column').addClass('animated bounceOutDown');
}

function reset() {
    bounceOut();
    $('.column').removeClass('animated bounceOutDown');
    compliment();
    $('.column').addClass('animated zoomInDown');
    var color1 = randomColor();
    $('body').hide().css({
        backgroundColor: color1
    }).removeClass('loading').show('fast');
    console.log('resettting!!')
}

function loadNewQuote() {
    $('body').addClass('loading');
    bounceOut();
    setTimeout(reset, 1000);

}

var colors = [
    '#B03060',
    '#FE9A76',
    '#FFD700',
    '#32CD32',
    '#016936',
    '#008080',
    '#0E6EB8',
    '#EE82EE',
    '#B413EC',
    '#FF1493',
    '#A52A2A',
    '#A0A0A0',
    '#000000'
];

var random = function() {
    return Math.floor(Math.random() * colors.length) - 1;
}

function randomColor() {
    var num = random();
    var color = colors[num] || colors[1];
    return color;
}
