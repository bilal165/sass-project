$(function () {

  $("section.works").find(".box").each(function () {
    $(this).children().find("button").click(function () {
      // set the src of the image in the pop up
      $(".popUp")
      .find("img")
      .attr(
        "src", $(this).
          parents(".box")
          .find("img")
          .attr("src")
      );

      // triger the pop up and the over layer
      $("body > .popUp, body > div.overlay").addClass("active");
    });
  });

  // close the pop up
  $("body > div.popUp").find("button").click(function () {
    $(this).parent().removeClass("active");
    $("body > div.overlay").removeClass("active");
  })

});

