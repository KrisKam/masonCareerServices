document.addEventListener("DOMContentLoaded", function (event) {
  
  const submit = document.querySelector("#companySubmit");

  submit.addEventListener("click", function (event) {
    event.preventDefault();
    const companySize = document.querySelector("input[name= 'sizeRadio']");
    console.log(companySize)
    const description = document.querySelector("#description")
    axios.get("https://api-v2.themuse.com/companies?api_key=3e6d0622728f87213ce3f2fb40fd7eae7a99abb95cc75fa1b04f0d159639954f&page=1")
      .then(result => {
        description.textContent = result["data"]["results"][0]["description"];
        console.log(result)
      })
      .catch(result => {
        console.log(result.response)
      })
  })

})