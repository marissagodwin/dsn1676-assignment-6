var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnCollapseExpand = $('.btn-collapse-expand');
var $panel = $('.panel');

var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');

var $btnAppend = $('.btn-append');
var $list = $('.list');


$btnShowHide.on('click', function () {
    $box.toggleClass('js-show-hide') 
});

$btnMove.on('click', function () {
    $diamond.toggleClass('js-move') 
});

$btnCollapseExpand.on('click', function () {
    $panel.toggleClass('js-collapse-expand') 
});

$btnBounce.on('click', function () {
    $circle.addClass('js-circle-bounce');
});

$circle.on('animationend', function () {
    $circle.removeClass('js-circle-bounce');
});

$btnAppend.on('click', function () {
    $list.toggleClass('js-append') 
    
    var $li = $('<li>').html('New List Items');
    $list.append($li);
  });