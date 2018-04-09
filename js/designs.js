// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var color = "#27ae60";
$("#colorPicker").val(color);

function makeGrid() {

// Your code goes here!
var height = $("#inputHeight").val();
var width = $("#inputWeight").val();
var table = $("#pixelCanvas");
table.html("");

for(var i = 0; i < height; i++){
    table.prepend("<tr></tr>");
}

for(var j = 0; j < width; j++){

    $("tr").append("<td></td>");
}

$("#colorPicker").on('change', function(){
    color = $(this).val();
});

$('td').on("click",function(e){
    

$(this).css("background-color",color);

     
});

$('td').on("dblclick",function(e){
    
     
    $(this).css("background-color","white");
    
         
    });

}

//Make a grid when user submit the button

$("#submit").on("click",function(e){
  
e.preventDefault();
makeGrid();
   
    
});


