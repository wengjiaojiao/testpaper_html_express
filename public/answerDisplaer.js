[].forEach.call(document.getElementsByName("radio1"), function(item, i) {
  item.onclick = function () {
      document.getElementById("answer1").value = item.value;
  };
});
[].forEach.call(document.getElementsByName("radio2"), function(item, i) {
  item.onclick = function () {
      document.getElementById("answer2").value = item.value;
  };
});
[].forEach.call(document.getElementsByName("check1"), function(item, i) {
  item.onclick = function () {
      var formvaluegetter = new FormValueGetter("form");
      var formvalues = formvaluegetter.getValues();
      document.getElementById("answer3").value = formvalues[4].value;
  };
});
[].forEach.call(document.getElementsByName("check2"), function(item, i) {
  item.onclick = function () {
    var formvaluegetter = new FormValueGetter("form");
    var formvalues = formvaluegetter.getValues();
    document.getElementById("answer4").value = formvalues[5].value;
  };
});
