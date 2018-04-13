// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(function() {
  
	var color = "#000";
$("#colorPicker").val(color);

function makeGrid() {

// Your code goes here!
var height = $("#inputHeight").val();
var width = $("#inputWeight").val();
var table = $("#pixelCanvas");
table.html("");

//Makes a grid 
for(var i = 0; i < height; i++){
    table.prepend("<tr></tr>");
}

for(var j = 0; j < width; j++){

    $("tr").append("<td></td>");
}

//Changes color
$("#colorPicker").on('change', function(){
    color = $(this).val();
});

//Apply color when clicked


$('td').on("click",function(e){
    

$(this).css("background-color",color);
    
});

	
	//Use brush feature
	$('#use-brush').hover(function(e){
		
		$("#use-brush").addClass("add-brush");
	});
	  
  $('#use-brush').on("click",function(e){
	  
	  e.preventDefault();
	  
	  $("body").addClass("add-brush");
	  
	  $("td").mouseover(function(e) {
  
		$(this).css("background-color",color);
		});

		$('td').on("click",function(e){
 
			$(this).css("background-color",color);
	
	
			});
	
  });
	//Eraser feature
  $('#reset-brush').hover(function(e){
	
	$("#reset-brush").removeClass("add-brush");
	$("#reset-brush").addClass("add-eraser");

  });
	  $('#reset-brush').on("click",function(e){
		  
		  e.preventDefault();
		  $("body").removeClass("add-brush");
		  $("body").addClass("add-eraser");
		$('td').mouseover(function(e){
 
		$(this).css("background-color","transparent");


		});

		$('td').on("click",function(e){
 
			$(this).css("background-color","transparent");
	
	
			});
  });
	
	
}


//Make a grid when user submit the button

$("#submit").on("click",function(e){
  
e.preventDefault();
$("body").removeClass("add-eraser");
$("body").removeClass("add-brush");
$("body").addClass("add-normal");
makeGrid();
   
    
});


});   
 
