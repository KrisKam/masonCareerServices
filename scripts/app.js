document.addEventListener("DOMContentLoaded", function (event) {
  
  const submit = document.querySelector("#infoSubmit");

  submit.addEventListener("click", function (event) {
    event.preventDefault();
    
    const industry = document.querySelectorAll("input[name='industryRadio']");
  
    const companySize = document.querySelectorAll("input[name='sizeRadio']");

for (let i = 0; i < industry.length; i++) {
  if (industry[i].checked) {
    console.log(industry[i]["value"])
  }
}

    // if (document.querySelectorAll("input[name='industryRadio']").checked) {
    //   let a =document.querySelectorAll("input[name='industryRadio']")
    //   console.log("a is equal to :", a)
    // }
    // console.log("industry: ", industry.checked)
    // console.log("size: ", companySize.value);
    


    const description = document.querySelector("#description")

    axios.get(`https://api-v2.themuse.com/companies?api_key=3e6d0622728f87213ce3f2fb40fd7eae7a99abb95cc75fa1b04f0d159639954f&industry=${industry.value}&page=1`)
      .then(result => {
        // description.textContent = result["data"]["results"][0]["description"];
        console.log("result:  ", result)
      })
      .catch(result => {
        console.log(result.response)
      })
  })

})