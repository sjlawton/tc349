
$('#my-div img').hover( function() {
    this.src = 'img/ryuanimation.gif'
}, function() {
    this.src = 'img/ryu.png'
})
$('#my-div img').mousedown( function() {
    this.src = 'img/ryuhad.png' 
})
$('#my-div img').mousedown(function() {
    $('.demo-hadouken').remove();
})
$('#my-div img').mousedown(function() {
    $('#my-div').append(
    '<img class="demo-hadouken" src="img/had.gif">'
    );
})
$('#my-div img').mousedown(function() {
    $('.demo-hadouken').animate( {
        "margin-left": "600px"
    }, 1000, 'swing', function() {
        this.remove();
    })
})
$('#my-div img').mouseup(function() {
    this.src = 'img/ryu.png'
})