$(function(){

    $('#first-btn').click(function(){
        $('.active').removeClass('active');
        $('.slide').eq(0).addClass('active');
    });
    $('#second-btn').click(function(){
        $('.active').removeClass('active');
        $('.slide').eq(1).addClass('active');
    });
    $('#third-btn').click(function(){
        $('.active').removeClass('active');
        $('.slide').eq(2).addClass('active');
    });

});