function generatePassword() {
    var length = 12;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    var password = "";
    for (var i = 0; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    document.getElementById("password").innerText = password;
  }







 



