var company;
getCompany();

function getCompany() {
    fetch("https://bond-project-938c1.firebaseio.com/company.json")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            company = Object.keys(data).map(function (key) {
                var newCompany = {
                    id: key,
                    company: data[key].company,
                    logo: data[key].logo,
                    address: data[key].address

                };
                return newCompany;
            });

            drawCompaniesInHTML(company);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function drawCompaniesInHTML(arrayofCompanies) {
    const allCompanies = document.getElementById("company");
    allCompanies.innerHTML = "";

    arrayofCompanies.forEach(function (company) {

        allCompanies.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="${company.logo}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${company.company}</h5>
          <p class="card-text">${company.address}</p>
          <a href="developers.html?id=${company.id}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `;

    });
}