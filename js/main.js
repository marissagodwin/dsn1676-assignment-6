var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnCollapseExpand = $('.btn-collapse-expand');
var $panel = $('.panel');

$btnShowHide.on('click', function () {
    $box.toggleClass('js-show-hide') 
});

$btnMove.on('click', function () {
    $diamond.toggleClass('js-move') 
});

$btnCollapseExpand.on('click', function () {
    $panel.toggleClass('js-collapse-expand') 
});