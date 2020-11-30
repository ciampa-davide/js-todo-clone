$(document).ready(
  function(){

    var list = [
      "comprare il pane",
      "comprare l'acqua",
      "comprare il pasta",
      "comprare le uova",
      "comprare i pomodori",
      "comprare le patate"
    ]

    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    for (var i = 0; i < list.length; i++){
      var context = {
      text: list[i]
    };
    }
    var html = template(context);
    $("#list").append(html);
  }
);
