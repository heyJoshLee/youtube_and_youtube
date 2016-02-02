$(function(){

  $(window).on("resize", function(){
    resize(); 
  })

  function resize() {
    var vph = $(window).height();
    var vpw = $(window).width();
    $(".full-width iframe").attr("width", vpw + "px");
    $(".half-width iframe").attr("width", (vpw / 2) + "px");
    $(".full-height iframe").attr("height", vph + "px");
    $(".half-height iframe").attr("height", (vph / 2) + "px");
    $(".left + .left").css("top", vph/2 + "px");
    $(".right + .right").css("top", vph/2 + "px");
  }

  function twoInputs() {
    $("#video-3-input").attr("disabled", "disabled");
    $("#video-4-input").attr("disabled", "disabled");
  }

  function threeInputs(){
    $("#videos-container").html(three_videos());
    $("#video-3-input").removeAttr("disabled");
    $("#video-4-input").attr("disabled", "disabled");
  }

  function fourInputs(){
    $("#video-3-input").removeAttr("disabled");
    $("#video-4-input").removeAttr("disabled");
  }

  function setupPage() {
    $("#videos-container").html(two_videos());
    resize();
    twoInputs();
  }

  $("#menu-launcher").on("click", function() {
    $("#menu").fadeToggle();
  })

  $(".layout-preview:not(:last-child)").on("click", function() {
    $(".layout-preview").removeClass("active-layout");
    $(this).addClass("active-layout");
  })

  var two_videos = Handlebars.compile($("#two-videos").html());
  $("#two-videos-layout").on("click", function() {
    $("#videos-container").html(two_videos());
    twoInputs();
    resize();
  })

  var three_videos = Handlebars.compile($("#three-videos").html());
  $("#three-videos-layout").on("click", function() {
    threeInputs();
    resize();
  })

  var four_videos = Handlebars.compile($("#four-videos").html());
  $("#four-videos-layout").on("click", function() {
    $("#videos-container").html(four_videos());
    fourInputs();
    resize();
  })

  

  setupPage();
  
});