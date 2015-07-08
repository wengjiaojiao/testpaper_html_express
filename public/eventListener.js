//document.querySelector("#submit").addEventListener("click",function(evt) {
$("#submit").on("click",function(evt){
    window.scroll(0,0);
    //evt.preventDefault();
    if($(":input[id=class]").val() == "") {
        alert("请输入班级");
        evt.preventDefault();
    }else if($(":input[id=name]").val() == "") {
        alert("请输入姓名");
        evt.preventDefault();
    }else if($(":input[id=id]").val() == "") {
        alert("请输入学号");
        evt.preventDefault();
    }else if(isNaN(parseInt($(":input[id=id]").val()))){
        alert("请输入数字");
        evt.preventDefault();
    }else {
        $.post("/result", $("form").serialize(), function(sumScore) {
          $(":input[id=score]").prop("value",sumScore);
        })
        $("#submit").prop("disabled",true);
    }
});
