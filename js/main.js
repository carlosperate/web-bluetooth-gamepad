(function() {
'use strict';

function dummyClickHandler(e) {
  console.log('click');
  window.navigator.vibrate(200);
}

$('#controller-button-up').click(dummyClickHandler);
$('#controller-button-down').click(dummyClickHandler);
$('#controller-button-left').click(dummyClickHandler);
$('#controller-button-right').click(dummyClickHandler);
$('#controller-button-centre').click(dummyClickHandler);
$('#controller-button-a').click(dummyClickHandler);
$('#controller-button-b').click(dummyClickHandler);
$('#controller-button-start').click(dummyClickHandler);
$('#controller-button-select').click(dummyClickHandler);

window.scrollTo(0,1);
})();