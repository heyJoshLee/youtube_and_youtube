$(function(){

  $(".full-width iframe").attr("width", "100%");
  $("iframe.half-width").attr("width", "50%");

  $(".half-height").attr("height", "50%");

  $(window).on("resize", function(){
    var vph = $(window).height();
    var vpw = $(window).width();

    console.log("height" + vph);
    console.log("width" + vpw);

    $(".full-width iframe").attr("width", vpw + "px");
    $(".half-width iframe").attr("width", (vpw / 2) + "px");
    $(".full-height iframe").attr("height", vph + "px");
    $(".half-height iframe").attr("height", (vph / 2) + "px");

    $(".left + .left").css("top", vph/2 + "px");
    $(".right + .right").css("top", vph/2 + "px");

  })

  $("#menu-launcher").on("click", function() {
    $("#menu").fadeToggle();
  })


  //Handlebars.compile($("[script*=x-handlebars-template"]).html());
  //Handlebars.registerPartial("name", $([script*=x-handlebars-partial"]).html());
  // $("div").html(template_function({key: value}));
});