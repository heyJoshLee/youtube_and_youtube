$(function(){
  var templates = {};
  // Check for local storage, if none set to empty array
  var todos = JSON.parse(localStorage.getItem("todo_items")) || [];
  function Todo(params) {
    this.title = params.title;
    this.id = todos.length;
  };

  // Create examples if there are no todos
  if (todos.length < 1) {
    todos.push(new Todo({title: "Example 1"}));
    todos.push(new Todo({title: "Example 2"}));
    console.log("Creating sample items");
  }

  $("[type*=x-handlebars-template]").each(function(){
    $template = $(this);
    templates[$template.attr("id")] = Handlebars.compile($template.html());
  });

  Handlebars.registerPartial("todo", $("#todo").html());

  function updateTodos(){
    $("#todos_container").html(templates.all_todos({todos: todos}));
  };

  $("form").on("submit", function(e) {
    e.preventDefault();
    var todo_title = $("#todo_name").val();
    todos.push(new Todo({title: todo_title}));
    $("#todo_name").val("");
    updateTodos();
  });

  $("#todos_container").on("click", "a.remove", function(e){
    e.preventDefault();
    var want_to_delete = confirm("Are you sure you want to delete this todo?");
    if (want_to_delete) {
      $(this).parent().remove();
      todos.splice($(this).attr("id"), 1);
    }
  });

  updateTodos();

  $(window).unload(function() {
    localStorage.setItem("todo_items", JSON.stringify(todos));
  });

});