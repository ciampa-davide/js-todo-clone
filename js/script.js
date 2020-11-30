$(document).ready(
  function(){

    var list = [
      "comprare il pane",
      "comprare l'acqua",
      "comprare il pasta",
      "comprare le uova",
      "comprare i pomodori",
      "comprare le patate"
    ];

    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    for (var i = 0; i < list.length; i++){

      var context = {
        text: list[i]
      };
      var html = template(context);
      $("#list").append(html);
    }


    $(document).on("click", ".delete",
      function() {
        $(this).parent().remove();
      }
    )

    $("input").keypress(function(event){
      if (event.which == 13 || event.keyCode == 13){
        var newItem = $("[name='add']").val();
        var context = {
          text: newItem
        };
        var html = template(context);
        $("#list").append(html);

      }
    });
  }
);
