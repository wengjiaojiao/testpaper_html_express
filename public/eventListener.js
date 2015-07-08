document.querySelector("#submit").addEventListener("click",function(evt) {
    window.scroll(0,0);
    //evt.preventDefault();
    if(document.getElementById("class").value == "") {
        alert("请输入班级");
        evt.preventDefault();
    }else if(document.getElementById("name").value == "") {
        alert("请输入姓名");
        evt.preventDefault();
    }else if(document.getElementById("id").value == "") {
        alert("请输入学号");
        evt.preventDefault();
    }else if(isNaN(document.getElementById("id").value)){
        alert("请输入数字");
        evt.preventDefault();
    }else {
        document.getElementById("score").value = "";
    }
});
