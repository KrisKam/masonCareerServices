document.addEventListener("DOMContentLoaded", function(event) {

  const clientContact = JSON.parse(localStorage.getItem('clientContact')) || {};

  const form = document.querySelector("form");
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

  if (clientContact["individual"] === true) {
    individual.checked = clientContact["individual"];
  }
  if (clientContact["outplacement"] === true) {
    outplacement.checked = clientContact["outplacement"];
  }
  if (clientContact["recruitment"] === true) {
    recruitment.checked = clientContact["recruitment"];
  }
  if (clientContact["consulting"] === true) {
    consulting.checked = clientContact["consulting"];
  }

  if (clientContact["resume"] === true) {
    resume.checked = clientContact["resume"];
  }
  if (clientContact["cv"] === true) {
    cv.checked = clientContact["cv"];
  }
  if (clientContact["coverLetter"] === true) {
    coverLetter.checked = clientContact["coverLetter"];
  }
  if (clientContact["interview"] === true) {
    interview.checked = clientContact["interview"];
  }
  if (clientContact["coaching"] === true) {
    coaching.checked = clientContact["coaching"];
  }
  if (clientContact["other"] === true) {
    other.checked = clientContact["other"];
  }

  form.addEventListener("submit", function(event) {

    clientContact["name"] = name.value;
    clientContact["email"] = email.value;
    clientContact["phone"] = phone.value;
    clientContact["referral"] = referral.value;
    clientContact["discountCode"] = discountCode.value;
    clientContact["individual"] = individual.checked;
    clientContact["outplacement"] = outplacement.checked;
    clientContact["recruitment"] = recruitment.checked;
    clientContact["consulting"] = consulting.checked;
    clientContact["resume"] = resume.checked;
    clientContact["coverLetter"] = coverLetter.checked;
    clientContact["interview"] = interview.checked;
    clientContact["coaching"] = coaching.checked;
    clientContact["resume"] = resume.checked;
    clientContact["other"] = other.checked;
    
    localStorage.setItem('clientContact', JSON.stringify(clientContact));

  })

})