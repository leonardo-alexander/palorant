let form = document.getElementById("report");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let server = document.getElementById("server").value.trim().toUpperCase();
  let desc = document.getElementById("desc").value.trim();
  let checkbox = document.getElementById("checkbox");

  if (!name || !email || !server || !desc) {
    alert("Please fill in all fields");
    return;
  }

  if (name.includes(" ") || !/^[a-zA-Z0-9]+$/.test(name)) {
    alert(
      "Invalid username! Username must not contain spaces or special characters"
    );
    return;
  }

  if (!email.endsWith("@gmail.com")) {
    alert("Invalid email! Please enter a valid email address");
    return;
  }

  const validServers = ["NA", "EU", "LATAM", "BR", "KR", "AP"];
  if (!validServers.includes(server)) {
    alert("Invalid server! Please select a valid server");
    return;
  }

  if (desc.length < 10 || desc.length > 300) {
    alert(
      "Invalid description! Description must be between 10 and 300 characters long"
    );
    return;
  }

  if (!checkbox.checked) {
    alert("Please checked the agreement box");
    return;
  }

  alert("Report submitted successfully");
  location.reload();
});
