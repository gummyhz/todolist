var container = $(".list-group");
var addButton = $("#button-addon2");
var clearButton = $("#button-addon3");


// Add a list item
addButton.on("click", addItem);

function addItem() {
  event.preventDefault();
  var task = $(".form-control").val();
  var taskIn = $(".form-control");
  container.append(
    `<li class="list-group-item"> 
        <input type="checkbox" class="defaultUnchecked"> 
          ${task}
        <button class="close" style="float:right">&times;</button>
    </li>`
  );
  $(".close").on("click", function() {
  $(this).parent().remove();
}); 
  taskIn.val("");
}


// Delete one list item using the x on the right side
$(".close").on("click", function() {
  $(this).parent().remove();
}); 


// Clear all list items
clearButton.on("click", clearList);
function clearList() { container.html(""); }

