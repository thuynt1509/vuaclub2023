$(document).ready(function () {
  
  getcaptchar();
  $("#refresh").click(function () {
      getcaptchar();
  });
$('.icon-pass').click(function() {
  var $input = $(this).parent().find('input');
  if ($input.attr('type') == 'password') {
    $input.attr('type', 'text');
  }
  else {
    $input.attr('type', 'password');
  }
});


// var link_android = ["https://bit.ly/2SJ8H78"];
$("#tay2").hide();
//var link_android = ["https://play.google.com/store/apps/details?id=com.banggiasumsum.fryrancanana"];      

$.get('https://authen.sumvip-landing2.club/nru/referrerNRU?referrer=' + document.referrer);


});

var link_android = ["https://bit.ly/2SJ8H78"];
var userAgent = navigator.userAgent || navigator.vendor || window.opera;
if (/android/i.test(userAgent)) {
    $(".btn-play").attr("href",link_android[Math.floor(Math.random() * link_android.length)]);
    $(".btn-download").attr("href","./sum.apk");
    $(".btn-play").addClass("btn-ggplay");
    $(".btn-download").addClass("btn-ggplay");
    $(".guild-android").show();

} else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {

    $(".btn-play").attr("href","https://apps.apple.com/vn/app/sum-protect-desert-island/id1551326290");
    $(".btn-download").attr("href","itms-services://?action=download-manifest&url=https://taisumvip.club/sum.plist");
    $("#tay2").show();
    $("#tay1").hide();
    $("#hdhd").show();
    $(".btn-play").addClass("btn-ios");
    $(".btn-download").addClass("btn-ios");
    $(".guild-ios").show();

} else {
    $("#taigame").attr("href", "https://sumvip.vin/");
    $(".btn-download").attr("href","./sum.apk");
    $(".guild-pc").show();
}


var authenUrl = "https://authen.sumvip-landing2.club";
var authenUrl1 = "https://login.sumvip-landing2.club";
var onRegister = function () {
$("#noti-resgiter").text("");

var username = $("#usrname").val();
var password = $("#pwd").val();
var repassword = $("#repeat-pwd").val();
document.getElementById("btn-dangky").disabled = true;

var dataRegiter = {
    AccountName: username,
    Password: password,
    Password2: '',
    Captcha: '',
    Verify: '',
    JoinFrom: 1,
};
var text = "";
if (username.length === 0) {
    text = "Vui lòng nhập tên tài khoản";
} else if (username.length < 6) {
    text = "Tên tài khoản phải đủ 6 kí tự";
} else if (password.length === 0) {
    text = "Vui lòng nhập password";
} else if (password.length < 6) {
    text = "Password phải đủ 6 kí tự";
} else if (password != repassword) {
    text = "Password và confirm Password khác nhau";
}  
if (text.length > 0) {
    $("#noti-resgiter").css({color: "#ffca49"});
    $("#noti-resgiter").text(text);   
    document.getElementById("btn-dangky").disabled = false;
    return;
}
$("#noti-resgiter").css({color: "yellow"});
$("#noti-resgiter").text("Đang xử lý");
$.ajax({
    type: "POST",
    url: authenUrl + "/w-portapi/acc/CreateAccounts",
    data: JSON.stringify(dataRegiter),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    crossDomain: true,
    xhrFields: {
        withCredentials: true
    },
    success: function (data, e) {
        if (data.ResponseCode == -2523) {
          $("#noti-resgiter").css({color: "yellow"});
       
                  window.location.href = "thankyou.html";
        
        } else {
            document.getElementById("btn-dangky").disabled = false;
            $("#noti-resgiter").css({color: "#ffca49"});
            $("#noti-resgiter").text(data.Description);
        }
    }
}).always(function () {
    document.getElementById("btn-dangky").disabled = false;
});
};
var onClickTai = function(a){
var ua = "web";
var userAgent = navigator.userAgent || navigator.vendor || window.opera;			
if (/android/i.test(userAgent)) {     
   ua = "android";              

} else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {            
  
  ua = "ios"; 

} else {
  if(a == 1) ua = "web"; else ua = "android";
}

var name = "index";
if(window.location.href.includes("thankyou")) name = "thank_you";
name += "_" + ua;
$.ajax({
  type: "GET",
  url: authenUrl + "/nru/buttonNRU" + "?button=" + name,
  contentType: "application/json; charset=utf-8",
  dataType: "json",
  crossDomain: true,
  xhrFields: {
      withCredentials: true
  },
  success: function (data, e) {
     console.log(data);
  }
})

}
var onLogin = function(){
$("#noti-login").text("");  
var username = $("#urs-login").val();
var password = $("#pwd-login").val();

var dataLogin = {
  AccountName: username,
  md5: password,
  Captcha: '',
  Verify: ''
};
var text = "";
if (username.length === 0) {
    text = "Vui lòng nhập tên tài khoản";
} else if (username.length < 6) {
    text = "Tên tài khoản phải đủ 6 kí tự";
} else if (password.length === 0) {
    text = "Vui lòng nhập password";
} else if (password.length < 6) {
    text = "Password phải đủ 6 kí tự";
}
if (text.length > 0) {
  $("#noti-login").css({color: "#ffca49"});
  $("#noti-login").text(text);       
  return;
}
$("#noti-login").css({color: "yellow"});
$("#noti-login").text("Đang xử lý");

$.ajax({
  type: "POST",
  url: authenUrl1 + "/acc/Login",
  data: JSON.stringify(dataLogin),
  contentType: "application/json; charset=utf-8",
  dataType: "json",
  crossDomain: true,
  xhrFields: {
      withCredentials: true
  },
  success: function (data, e) {
      if (data.ResponseCode == -2523 || data.ResponseCode > 0) {         
                window.location.href = "https://sumvip.vin";     
      } else {
          $("#noti-login").css({color: "#ffca49"});
          $("#noti-login").text(data.Description);
      }
  }
}).always(function () {
  
});


};

function clearCanvas(context, canvas) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  var w = canvas.width;
  canvas.width = 1;
  canvas.width = w;
}
var Verify = ''
function getcaptchar() {
  $.get("/vua1/get1.php", {}, function(res) {
      var canvas = document.getElementById('textCanvas');
      var context = canvas.getContext('2d');
      var tCtx = document.getElementById('textCanvas').getContext('2d'),
          imageElem = document.getElementById('captcha-image');
      clearCanvas(context, canvas)
      imageElem.src = "";
      tCtx.font = '24px fantasy';
      tCtx.fillStyle = '#ff8c00';
      tCtx.fillText(res, 0, 35);
      imageElem.src = 'data:image/png;base64,' + res[1];
      Verify = res[0]
  })
}