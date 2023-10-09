function contact() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  if (name == "") {
    return alert("Name cannot be blank");
  } else if (email == "") {
    return alert("Email cannot be blank");
  } else if (phone == "") {
    return alert("Phone cannot be blank");
  } else if (message == "") {
    return alert("message cannot be blank");
  }

  let emailReceiver = "ibnuhakim81@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?&body=Hello, My name is ${name}, ${message}, Please contact me or send me a message to my phone number bellow ${phone}`;
  a.click();

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(message);

  let emailer = {
    name,
    email,
    phone,
    message,
  };

  console.log(emailer);
}
