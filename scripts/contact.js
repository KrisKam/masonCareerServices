document.addEventListener("DOMContentLoaded", function(event) {

  const clientContact = JSON.parse(localStorage.getItem('clientContact')) || {};

  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const phone = document.querySelector("#phone");
  const referral = document.querySelector("#referral");
  const discountCode = document.querySelector("#discountCode")

  if (clientContact["name"] !== undefined) {
    name.value = clientContact["name"];
  }
  if (clientContact["email"] !== undefined) {
    email.value = clientContact["email"];
  }
  if (clientContact["phone"] !== undefined) {
    phone.value = clientContact["phone"];
  }
  if (clientContact["referral"] !== undefined) {
    referral.value = clientContact["referral"];
  }
  if (clientContact["discountCode"] !== undefined) {
    discountCode.value = clientContact["discountCode"];
  }


  document.addEventListener("keyup", function(event) {

    clientContact["name"] = name.value;
    clientContact["email"] = email.value;
    clientContact["phone"] = phone.value;
    clientContact["referral"] = referral.value;
    clientContact["discountCode"] = discountCode.value;
  
    
    localStorage.setItem('clientContact', JSON.stringify(clientContact));

  })

})