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
[].forEach.call(document.getElementsByName("checkbox1"), function(item, i) {
  item.onclick = function () {
      var ans = '';
      $(':input[name=checkbox1]').each(function () {
        ans += this.checked ? this.value : '';
      })
      document.getElementById("answer3").value = ans;
  };
});
[].forEach.call(document.getElementsByName("checkbox2"), function(item, i) {
  item.onclick = function () {
    var ans = '';
    $(':input[name=checkbox2]').each(function () {
      ans += this.checked ? this.value : '';
    })
    document.getElementById("answer4").value = ans;
  };
});
