

var Developers;
getDevelopers();

function getDevelopers() {
    fetch("https://bond-project-938c1.firebaseio.com/developers.json")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            Developer = Object.keys(data).map(function (key) {

                var newDeveloper = {
                    id: key,
                    fullName: data[key].fullName,
                    personalImage: data[key].personalImage,
                    email: data[key].email,
                    fbLink: data[key].fbLink,
                    ghLink: data[key].ghLink,
                    address: data[key].address,
                    city: data[key].city,
                    postal: data[key].postal,
                    email: data[key].email,
                    mobile: data[key].mobile,
                    skills: data[key].skills,

                };

                return newDeveloper;
            });

            drawDevelopersInHTML(Developer);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function drawDevelopersInHTML(arrayofDevelopers) {
    arrayofDevelopers.forEach(function (developer) {
        var card = createDeveloperCard(
            developer.personalImage,
            developer.fullName,
            developer.address,
            "../create-developer.html?id=" + developer.id
        );

        document.getElementById("developers").append(card);
    });
}
