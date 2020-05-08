

var developer;
getDevelopers();

function getDevelopers() {
    fetch("https://bond-project-938c1.firebaseio.com/developers.json")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            developer = Object.keys(data).map(function (key) {
                var newDeveloper = {
                    id: key,
                    fullName: data[key].fullName,
                    personalImage: data[key].personalImage,
                    address: data[key].address,
                    skills: data[key].skills

                };
                return newDeveloper;
            });

            drawDevelopersInHTML(developer);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function drawDevelopersInHTML(arrayofDevelopers) {
    const allDevelopers = document.getElementById("developer");
    allDevelopers.innerHTML = "";

    arrayofDevelopers.forEach(function (developer) {

        allDevelopers.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="${developer.personalImage}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${developer.fullName}</h5>
          <p class="card-text">${developer.address}</p>
          <p class="card-text">${developer.skills}</p>
          <a href="developers.html?id=${developer.id}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `;

    });
}
