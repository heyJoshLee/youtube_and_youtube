$(function(){

  var video_urls = [];

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
    $("#video-3-input").removeAttr("disabled");
    $("#video-4-input").attr("disabled", "disabled");
  }

  function fourInputs(){
    $("#video-3-input").removeAttr("disabled");
    $("#video-4-input").removeAttr("disabled");
  }

  function setupPage() {
    resize();
    fourInputs();
  }

  function changeYoutubeUrl(url){
    return url.replace("watch?v=", "embed/");
  }

  $("#menu-launcher").on("click", function() {
    $("#menu-launcher").css({"width": "1px"})
    $("#menu-launcher").html("");
    $("#menu").fadeToggle();
  })

  $(".layout-preview:not(:last-child)").on("click", function() {
    $(".layout-preview").removeClass("active-layout");
    $(this).addClass("active-layout");
  })

  $("#video-1-input").change(function(){
    $("#video_1").attr("src", changeYoutubeUrl($("#video-1-input").val()));
  });

  $("#video-2-input").change(function(){
    $("#video_2").attr("src", changeYoutubeUrl($("#video-2-input").val()));
  });

  $("#video-3-input").change(function(){
    $("#video_3").attr("src", changeYoutubeUrl($("#video-3-input").val()));
  });

  $("#video-4-input").change(function(){
    $("#video_4").attr("src", changeYoutubeUrl($("#video-4-input").val()));
  });

  $("#two-videos-layout").click(function() {
    $("#video_3").hide();
    $("#video_4").hide();
    $("#video_1").parent("li").removeClass("half-width").addClass("full-width");
    $("#video_2").parent("li").removeClass("half-width").addClass("full-width");
    twoInputs();
    resize();
  });

  $("#three-videos-layout").click(function() {
    console.log("three videos");
    $("#video_1").parent("li").removeClass("half-width").addClass("full-width");
    $("#video_2").parent("li").removeClass("full-width").addClass("half-width");
    $("#video_4").hide();
    threeInputs();
    resize();
  });

  $("#four-videos-layout").click(function() {
    $("#video_1").parent("li").removeClass("full-width").addClass("half-width");
    $("#video_2").parent("li").removeClass("full-width").addClass("half-width");
    $("#video_3").show();
    $("#video_4").show();
    fourInputs();
    resize();
  })

  $("#video-1-input").on("change", function() {
    console.log($("#video-1-input").val());
    $("#video_1").attr("src", changeYoutubeUrl($("#video-1-input").val()));
  })
  $("#video-2-input").on("change", function() {
    console.log($("#video-2-input").val());
    $("#video_2").attr("src", changeYoutubeUrl($("#video-2-input").val()));
  });
  $("#video-3-input").on("change", function() {
    console.log($("#video-3-input").val());
    $("#video_3").attr("src", changeYoutubeUrl($("#video-3-input").val()));
  });
  $("#video-4-input").on("change", function() {
    console.log($("#video-3-input").val());
    $("#video_4").attr("src", changeYoutubeUrl($("#video-4-input").val()));
  });
  

  setupPage();
  
});