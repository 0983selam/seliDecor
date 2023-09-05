if (email == "" || !regEmail.test(email)) {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
  }
  if (phone == "" || !regPhone.test(phone)) {
    alert("Please enter valid phone number.");
   phone.focus();
   return false;
 }
 if (address == "") {
   window.alert("Please enter your address.");
   address.focus();
   return false;}