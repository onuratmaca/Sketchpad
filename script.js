var gridSize = 16;

$(document).ready(function () {
    createGrid();
    updateGrid();
    colorGrid();
    clearGrid();
});

//Rgb color generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createGrid(){

	if (gridSize <= 64) {
		for (var i = 0; i < gridSize; i++) {
        $('#grid').append('<div class="row"><div>');
        $('.row').height((600 / gridSize) - 1);
      };
      for (var x = 0; x < gridSize; x++) {
        $('.row').append('<div class="column"><div>');
        $('.column').width((600 / gridSize) - 1);
      };
  	} else {
  		alert('Grid number must be below 64');
  		gridSize = 16;
  		createGrid();
  	}
}
function updateGrid(){
	$('#update').click(function(){
		gridSize = $('#gridAdjuster').val();
		$('#grid').empty();
		createGrid();
		colorGrid();
	});
}

function colorGrid(){
	$('.column').hover(function (){
		$(this).css('background-color', getRandomColor());
	});
}

function clearGrid(){
	$('#clear').click(function(){
		$('.column').css('background-color', '');
		//console.log('clear');
	});
	
}
