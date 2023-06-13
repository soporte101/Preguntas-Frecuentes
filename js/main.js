function PreguntasFrecuentes() {
  $.ajax({
    url:
      location.protocol +
      "//" +
      location.host +
      "/_api/web/lists/getbytitle('PreguntasFrecuentes')/items?$select=ID,Pregunta,Respuesta&$orderby=Pregunta%20asc",
    method: "GET",
    headers: { Accept: "application/json; odata=verbose" },
    success: onSuccessPF,
  });
}

function onSuccessPF(data) {
  var html = "";
  var resultados = data.d.results;
  for (var i = 0; i < resultados.length; i++) {
    html +=
      "<div class='accordion-container' style='width:100% !important;'><a href='#' class='accordion-toggle'>" +
      resultados[i].Pregunta +
      "<span class='toggle-icon'><i class='fa fa-plus-circle'></i></span></a><div class='accordion-content'><p>" +
      resultados[i].Respuesta +
      "</p></div></div>";
  }
  $("#AcordeonPreguntasFrecuentes").html(html);
 
  
   $(".accordion-toggle").on("click", function (event) {
    event.preventDefault();
    // create accordion variables
    var accordion = $(this);
    var accordionContent = accordion.next(".accordion-content");
    var accordionToggleIcon = $(this).children(".toggle-icon");

    // toggle accordion link open class
    accordion.toggleClass("open");
    // toggle accordion content
    accordionContent.slideToggle(250);

    // change plus/minus icon
    if (accordion.hasClass("open")) {
      accordionToggleIcon.html("<i class='fa fa-minus-circle'></i>");
    } else {
      accordionToggleIcon.html("<i class='fa fa-plus-circle'></i>");
    }
  });
   $("#AcordeonPreguntasFrecuentes").jPaginate();
}
