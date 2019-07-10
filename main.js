$(document).ready(() => {
  $("form").on("submit", function(e) {
    e.preventDefault();
    let input1 = Number($("#input1").val());
    let input2 = Number($("#input2").val());

    $("#add").on("click", function() {
      $("#result").html(input1 + input2);
    });

    $("#sub").on("click", function() {
      $("#result").html(input1 - input2);
    });

    $("#mult").on("click", function() {
      return $("#result").html(input1 * input2);
    });
    $("#divi").on("click", function() {
      return $("#result").html(input1 / input2);
    });
  });
});
