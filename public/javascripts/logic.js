$(function() {
  var bands = [0, 0, 0],
      multiplier = 1,
      tolerance = "";
  
  function updateOhms() {
    var ohms = ((bands[0] * 100 + bands[1] * 10 + bands[2]) * multiplier)
    var ohmText = "";
    if (multiplier < 1) {
      ohmText = ohms.toFixed(2) + " ";
    }      
    else if (ohms >= 1000000) {
      ohmText = (ohms / 1000000).toString() + " M"; 
    }
    else if (ohms >= 1000) {
      ohmText = (ohms / 1000).toString() + " K"; 
    }
    else {
      ohmText = ohms.toString() + " ";
    }
    $("#ohms").text(ohmText + "Ω " + tolerance); 
  }    
  
  function select(cell) {
    var index = $(cell).data("band");
    var color = $(cell).css("background-color");
    $("[data-band='" + index + "']").removeClass("selected");
    $(cell).addClass("selected");
    
    var bandCount = $("#bandTable").data("bandcount");
    if (index === bandCount - 1) {
      tolerance = $(cell).text();
      $(".band5").css("background-color", color);
    }
    else if (index === bandCount - 2) {
      multiplier = $(cell).data("value");
      $(".band4").css("background-color", color);
    }
    else {
      var i = 5 - bandCount + index;
      bands[i] = $(cell).data("value");
      $(".band" + i).css("background-color", color);
    }
    updateOhms();
  }  
  
  $("td[data-value!='-1']").addClass("selectable").click(function() {
    select(this);
  });
  // Init
  $(".col1.selectable").each(function() {
    select(this);
  });
})