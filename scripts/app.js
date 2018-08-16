document.addEventListener("DOMContentLoaded", function (event) {

  const submit = document.querySelector("#infoSubmit");

  submit.addEventListener("click", function (event) {
    event.preventDefault();

    const industry = document.querySelectorAll("input[name='industryRadio']");
    const companySize = document.querySelectorAll("input[name='sizeRadio']");

    const industryValue = assignValue(industry);
    const sizeValue = assignValue(companySize);
    console.log("industry: ", industryValue, "size: ", sizeValue);

    if (industryValue === undefined || sizeValue === undefined) {
      const requireSelection = document.querySelector(".errorMessage");
      requireSelection.textContent = "You must select an industry and size."
      requireSelection.style = "color: red"
      return;
    }

    function assignValue(radioInput) {
      for (let i = 0; i < radioInput.length; i++) {
        if (radioInput[i].checked) {
          return radioInput[i]["value"];
        }
      }
    }

    axios.get(`https://api-v2.themuse.com/companies?api_key=3e6d0622728f87213ce3f2fb40fd7eae7a99abb95cc75fa1b04f0d159639954f&industry=${industryValue}&size=${sizeValue}&page=1`)
      .then(result => {
        const resultArray = result["data"]["results"];
        const tableBody = document.querySelector("tbody");
        const tableChildren = tableBody.querySelectorAll("tr");
        tableChildren.forEach(child => {
          tableBody.removeChild(child)
        })
       
        if (resultArray.length > 0) {
          resultArray.forEach(item => {
            const newRow = document.createElement("tr");
            tableBody.appendChild(newRow);
            const newCell = document.createElement("td");
            newCell.textContent = item["name"];
            newRow.appendChild(newCell);
            const newCell2 = document.createElement("td");
            newCell2.textContent = locations(item["locations"]);
            newRow.appendChild(newCell2);
            const newCell3 = document.createElement("td");
            newCell3.textContent = item["description"];
            newRow.appendChild(newCell3);

            function locations(arr) {
              let locationList = "";
              arr.forEach(location => {
                locationList += location["name"] + " "
              })
              return locationList;
            }
          })      
        } else {
          const newRow = document.createElement("tr");
          tableBody.appendChild(newRow);
          const newCell = document.createElement("td");
          newCell.textContent = "No data available for this industry.";
          newRow.appendChild(newCell);
        }
      })
      .catch(result => {
        const errorMessage = document.querySelector(".errorMessage");
        errorMessage.textContent = result.response;
      })
  })

})