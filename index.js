// JavaScript code
const users = [
    {username: "sanju", password: "1234"},
    {username: "vimala", password: "pass"},
    {username: "bala", password: "1968"}
  ];
  
   function sub(event) {
    event.preventDefault(); 
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
      window.location.href = "products.html";
    } else {
      alert("Invalid username or password.");
    }
  }
 
function regsub(event) {
  event.preventDefault(); 
  const Username = document.getElementById("rusername").value;
  const Password = document.getElementById("rpassword").value;

  const user = { username:Username, password:Password};
  users.push(user);
  document.getElementById("rname").value = "";
  document.getElementById("rusername").value = "";
  document.getElementById("rpassword").value = "";

  alert("User registered successfully!");
}
