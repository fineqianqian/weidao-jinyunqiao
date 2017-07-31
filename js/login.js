$(function() {
    $("#text1").click(function() {
        var code = "";
        var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D',
            'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
            'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
        for (var i = 0; i < 4; i++) {
            var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35） 
            code += random[index]; //根据索引取得随机数加到code上 
        }
        $("#txt2").html(code); //把code值赋给验证码

    });



})



function checkInput() {
    localStorage.setItem("temp", $("#phone").val());

    return checkcode() && checkphone() && checkpassword();


}


function checkcode() {
    var inputcode = $("#code").val().toUpperCase();

    if (inputcode.length <= 0) {
        $("#codeInfo").html("验证码为必填项");
        $("#codeInfo").css("color", "#a94442");
        $("#code").css("border", "2px solid #a94442");
        $("#icode").css("background-color", "#f2dede");
        $("#icode").css("color", "#a94442");
        $("#icode").css("border", "2px solid #a94442");
        return false;

    } else {
        if (inputcode != $("#txt2").html()) {
            $("#codeInfo").html("验证码错误");
            $("#codeInfo").css("color", "#a94442");
            $("#code").css("border", "2px solid #a94442");
            $("#icode").css("background-color", "#f2dede");
            $("#icode").css("color", "#a94442");
            $("#icode").css("border", "2px solid #a94442");
            return false;
        } else {
            $("#codeInfo").html("成功！");
            $("#codeInfo").css("color", "#3c763d");
            $("#code").css("border", "2px solid #3c763d");
            $("#icode").css("background-color", "#d3eec8");
            $("#icode").css("color", "#3c763d");
            $("#icode").css("border", "2px solid #3c763d");
            return true;
        }

    }


}


function checkphone() {

    if ($("#phone").val() == "") {
        $("#phoneInfo").html("手机号码为必填项");
        $("#phoneInfo").css("color", "#a94442");
        $("#phone").css("border", "2px solid #a94442");
        $("#icphone").css("background-color", "#f2dede");
        $("#icphone").css("color", "#a94442");
        $("#icphone").css("border", "2px solid #a94442");
        return false;
    } else {
        if (localStorage.getItem($("#phone").val()) == null) {
            /*alert("该号码没有被注册!");*/
            $("#phoneInfo").html("手机号码没有被注册！");
            $("#phoneInfo").css("color", "#a94442");
            $("#phone").css("border", "2px solid #a94442");
            $("#icphone").css("background-color", "#f2dede");
            $("#icphone").css("color", "#a94442");
            $("#icphone").css("border", "2px solid #a94442");
            return false;
        } else {

            $("#phoneInfo").html("成功！");
            $("#phoneInfo").css("color", "#3c763d");
            $("#phone").css("border", "2px solid #3c763d");
            $("#icphone").css("background-color", "#d3eec8");
            $("#icphone").css("color", "#3c763d");
            $("#icphone").css("border", "2px solid #3c763d");
            return true;
        }
    }



}


function checkpassword() {


    if ($("#password").val() == "") {
        $("#passwordInfo").html("密码为必填项");
        $("#passwordInfo").css("color", "#a94442");
        $("#password").css("border", "2px solid #a94442");
        $("#icpassword").css("background-color", "#f2dede");
        $("#icpassword").css("color", "#a94442");
        $("#icpassword").css("border", "2px solid #a94442");
        return false;
    } else {
        if (localStorage.getItem($("#phone").val()) != $("#password").val())

        {
            $("#passwordInfo").html("密码不正确！");
            $("#passwordInfo").css("color", "#a94442");
            $("#password").css("border", "2px solid #a94442");
            $("#icpassword").css("background-color", "#f2dede");
            $("#icpassword").css("color", "#a94442");
            $("#icpassword").css("border", "2px solid #a94442");
            return false;

        } else {
            $("#passwordInfo").html("成功！");
            $("#passwordInfo").css("color", "#3c763d");
            $("#password").css("border", "2px solid #3c763d");
            $("#icpassword").css("background-color", "#d3eec8");
            $("#icpassword").css("color", "#3c763d");
            $("#icpassword").css("border", "2px solid #3c763d");
            return true;
        }
    }
}
