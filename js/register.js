$(function() {
    var clock;
    var count = 12;
    $("#obtain").click(function() {
        $("#validated").css("width", "120px");
        $("#validatenum").css("display", "block");
        var code = Math.floor(Math.random() * 9000) + 1000;
        $("#validatenum").html(code);
        clearInterval(clock);
        clock = setInterval(function() {
            $("#obtain").html((count - 2) + "s");
            count--;
            $("#obtain").attr("disabled", true);
            if (count == 0) {
                clearInterval(clock);
                $("#obtain").attr("disabled", false);
                $("#obtain").html("重新获取");
                count = 12;
            }
        }, 1000);
    })
})


// localStorage.setItem('temp',$(#phone).val())//login
// $('#showName').val( localStorage.getItem('temp') );	//homepage的showName
// localStorage.removeItem('temp');//
function checkInput() {
    if (checktel() && checkpassword() && confirmpassword() && checkvali()) {
        var registername = $("#phone").val();
        var registerpwd = $("#password").val();
        localStorage.setItem(registername, registerpwd);
        return true;
    } else {
        return false;
    }
}

function checktel() {
    var regTelnum = /^[1]\d{10}$/;
    if ($("#phone").val() == "") {
        $("#telInfo").html("手机号码为必填项");
        $("#telInfo").css("color", "#a94442");
        $("#phone").css("border", "2px solid #a94442");
        $("#icphone").css("background-color", "#f2dede");
        $("#icphone").css("color", "#a94442");
        $("#icphone").css("border", "2px solid #a94442");
        return false;
    } else {
        if (!regTelnum.test($("#phone").val())) {
            $("#telInfo").html("手机号码不合法！");
            $("#telInfo").css("color", "#a94442");
            $("#phone").css("border", "2px solid #a94442");
            $("#icphone").css("background-color", "#f2dede");
            $("#icphone").css("color", "#a94442");
            $("#icphone").css("border", "2px solid #a94442");
            return false;
        } else {
            if (localStorage.getItem($("#phone").val())) {
                $("#telInfo").html("手机号码已经被注册！");
                $("#telInfo").css("color", "#a94442");
                $("#phone").css("border", "2px solid #a94442");
                $("#icphone").css("background-color", "#f2dede");
                $("#icphone").css("color", "#a94442");
                $("#icphone").css("border", "2px solid #a94442");
                return false;
            } else {
                $("#telInfo").html("成功！");
                $("#telInfo").css("color", "#3c763d");
                $("#phone").css("border", "2px solid #3c763d");
                $("#icphone").css("background-color", "#d3eec8");
                $("#icphone").css("color", "#3c763d");
                $("#icphone").css("border", "2px solid #3c763d");
                return true;
            }
        }
    }
}



function checkpassword() {
    var regPassword = /^[\da-z]{6,14}$/i;
    if (!regPassword.test($("#password").val())) {
        if ($("#password").val() == "") {
            $("#psdInfo").html("密码为必填项");
            $("#psdInfo").css("color", "#a94442");
            $("#password").css("border", "2px solid #a94442");
            $("#icpassword").css("background-color", "#f2dede");
            $("#icpassword").css("color", "#a94442");
            $("#icpassword").css("border", "2px solid #a94442");
            return false;
        } else {
            $("#psdInfo").html("密码不合法");
            $("#psdInfo").css("color", "#a94442");
            $("#password").css("border", "2px solid #a94442");
            $("#icpassword").css("background-color", "#f2dede");
            $("#icpassword").css("color", "#a94442");
            $("#icpassword").css("border", "2px solid #a94442");
        }
    } else {
        $("#psdInfo").html("成功！");
        $("#psdInfo").css("color", "#3c763d");
        $("#password").css("border", "2px solid #3c763d");
        $("#icpassword").css("background-color", "#d3eec8");
        $("#icpassword").css("color", "#3c763d");
        $("#icpassword").css("border", "2px solid #3c763d");
        return true;
    }
}

function confirmpassword() {
    if ($("#confirm").val() == "") {
        $("#compsdInfo").html("密码为必填项");
        $("#compsdInfo").css("color", "#a94442");
        $("#confirm").css("border", "2px solid #a94442");
        $("#icconfirm").css("background-color", "#f2dede");
        $("#icconfirm").css("color", "#a94442");
        $("#icconfirm").css("border", "2px solid #a94442");
        return false;
    } else {
        if ($("password").value != $("confirm").value) {
            $("#compsdInfo").html("两次密码不一致");
            $("#compsdInfo").css("color", "#a94442");
            $("#confirm").css("border", "2px solid #a94442");
            $("#icconfirm").css("background-color", "#f2dede");
            $("#icconfirm").css("color", "#a94442");
            $("#icconfirm").css("border", "2px solid #a94442");
        } else {
            $("#compsdInfo").html("成功！");
            $("#compsdInfo").css("color", "#3c763d");
            $("#confirm").css("border", "2px solid #3c763d");
            $("#icconfirm").css("background-color", "#d3eec8");
            $("#icconfirm").css("color", "#3c763d");
            $("#icconfirm").css("border", "2px solid #3c763d");
            return true;
        }
    }
}


function checkvali() {
    if ($("#validated").val() == "") {
        $("#valiInfo").html("验证码为必填项");
        $("#valiInfo").css("color", "#a94442");
        $("#validated").css("border", "2px solid #a94442");
        $("#icvalidated").css("background-color", "#f2dede");
        $("#icvalidated").css("color", "#a94442");
        $("#icvalidated").css("border", "2px solid #a94442");
        return false;
    } else {
        if ($("#validated").val() == $("#validatenum").html()) {
            $("#valiInfo").html("成功！");
            $("#valiInfo").css("color", "#3c763d");
            $("#validated").css("border", "2px solid #3c763d");
            $("#icvalidated").css("background-color", "#d3eec8");
            $("#icvalidated").css("color", "#3c763d");
            $("#icvalidated").css("border", "2px solid #3c763d");
            return true;
        } else {
            $("#valiInfo").html("验证码错误");
            $("#valiInfo").css("color", "#a94442");
            $("#validated").css("border", "2px solid #a94442");
            $("#icvalidated").css("background-color", "#f2dede");
            $("#icvalidated").css("color", "#a94442");
            $("#icvalidated").css("border", "2px solid #a94442");
            return false;
        }
    }


}
