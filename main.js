  $("#showCounty").click(function() {
    $.ajax({
        type: "GET",
        dataType: 'json',
       // headers: {'Access-Control-Allow-Origin': '*',},
        url: "https://api.usa.gov/crime/fbi/sapi/api/data/nibrs/robbery/offense/agencies/SC0040300/count?api_key=9iBXbhKIro3zFm3GXgoyF7VtvsIo62iPf4D4bYVS",
        /*The data for the offense type per ORI is handled in the function specified in success*/
        success : function(data){
            getCountyInfo(data);
        }, 
        error: function() {
            console.log("ERROR. Could not GET crime info per ORI");
        }
      });

  })

  function getCountyInfo (data) {

    var ori = data.results[22].ori;
  $.ajax({
      type: "GET",
      dataType: 'json',
      url: "https://api.usa.gov/crime/fbi/sapi/api/agencies/" +ori +"?api_key=9iBXbhKIro3zFm3GXgoyF7VtvsIo62iPf4D4bYVS",
      success : function(data) {
        handleCrimeData(data);
    },
    error: function() {
        console.log("ERROR. Could not GET ORI information");
    }
  })
  }

  function handleCrimeData(data) {
      document.getElementById("crimeParagraph").innerHTML = data.ori;
  }
