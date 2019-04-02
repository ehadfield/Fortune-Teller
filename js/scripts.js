$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();

    var badLuck = [];
    $("input:checkbox[name=work-transportation]:checked").each(function(){
        var workTransportationMode = $(this).val();
        badLuck.push(workTransportationMode);
      });

    var goodLuck = [];
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      goodLuck.push(funTransportationMode);
    });
    if(badLuck.length > goodLuck.length) {
      $("#unlucky").show();

    } else if (goodLuck.length > badLuck.length) {
        $("#lucky").show();

    } else if (goodLuck.length === badLuck.length) {
        $("#undecided").show();
      };

    $('#transportation_survey').hide();
  });
});
