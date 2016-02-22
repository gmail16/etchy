$(document).ready(function(){               //draw first board

    loadGrid(16);

    $('.square').hover(function(){
        $(this).css("opacity", ".75");
        
    });

});

function loadGrid(gridSize) {               //initialize grid

    var squareSize = (960/gridSize) - 2;

    for(var i = 0; i < (gridSize * gridSize); i++) { 
            $("#container").append("<div class='square'></div>");
        }

    $('.square').width(squareSize);
    $('.square').height(squareSize);

}

