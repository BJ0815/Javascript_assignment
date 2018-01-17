"use strict";

function validate() {
  var input = document.getElementById("nric").value;
  if (input == ""){
    return alert("內容是空的，請輸入身分證字號！");
  }else if(!isNaN(input)){
    return alert("內容不能全是數字")
  }else if(input.length != 10) {
    return alert("身分證字號長度不符");
  }else{
    //驗證除了第一位以外都必須是數字
    if(isNaN(input.slice(1,10))){
      alert("驗證失敗");
      document.getElementById("nric").value = "";
      return;
    }

    //驗證第一位是否符合縣市且不能為數字
    var char = input[0];
    var city = findCity(char);
    if(!city){
      return alert("縣市錯誤，這不是一個正確的身分證字號！");
    }
    document.getElementById("city").innerHTML = "來自" + city;
    //驗證身分證持有人是男性還是女性
    if (input[1] === "1"){
      document.getElementById("gender").innerHTML = "男性";
    }else if (input[1] === "2"){
      document.getElementById("gender").innerHTML = "女性";
    }else{
      return alert("身分證字號格式不符合！");
    }
  }
  document.getElementById("result").innerHTML = "通過驗證";
}

function findCity(char) {
  char = char.toLowerCase();
  switch(char){
    case "a": return "臺北市";
    case "b": return "臺中市";
    case "c": return "基隆市";
    case "d": return "臺南市";
    case "e": return "高雄市";
    case "f": return "新北市";
    case "g": return "宜蘭縣";
    case "h": return "桃園縣";
    case "i": return "嘉義市";
    case "j": return "新竹縣";
    case "k": return "苗栗縣";
    case "l": return "臺中縣";
    case "m": return "南投縣";
    case "n": return "彰化縣";
    case "o": return "新竹市";
    case "p": return "雲林縣";
    case "q": return "嘉義縣";
    case "r": return "臺南縣";
    case "s": return "高雄縣";
    case "t": return "屏東縣";
    case "u": return "花蓮縣";
    case "v": return "臺東縣";
    case "w": return "金門縣";
    case "x": return "澎湖縣";
    case "y": return "陽明山";
    case "z": return "連江縣";
    default: return false;
  }
}