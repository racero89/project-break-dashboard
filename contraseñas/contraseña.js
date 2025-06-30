function generatePassword() {
  var length = document.getElementById("length").value;

  length = parseInt(length);

  if (isNaN(length) || length < 12 || length > 50) {
    alert("La longitud debe ser entre 12 y 50.");
    return;
  }

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*()_+=";
  var allChars = lowercase + uppercase + numbers + symbols;

  var password = "";

  password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
  password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
  password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  password += symbols.charAt(Math.floor(Math.random() * symbols.length));

  for (var i = 4; i < length; ++i) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  document.getElementById("password").innerText = password;
}
