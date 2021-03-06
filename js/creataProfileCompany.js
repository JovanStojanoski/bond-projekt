
function showSelectedImage(imageUrl, error) {
    if (error !== null) {
      alert(error);
    }
  
    document.getElementById("selected-image").src = imageUrl;
  }

function createCompany(e) {
    e.preventDefault();
    var form = e.target;
    var logo = document.getElementById("selected-image").src;
    var company = form.company.value;
    var email = form.email.value;
    var password = form.password.value;
    var facebook = form.facebook.value;
    var website = form.website.value;
    var address = form.address.value;
    var mobile = form.mobile.value;
    var city = form.city.value;
    var postal = form.postal.value;
    var practice = form.practice.value;
    var job = form.job.value;
    var errorParagraph = document.querySelector("p.error");
    var isValid = isFormValid(company, email, password, facebook, website, city, errorParagraph);
  
    if (!isValid) {
      return;
    }


    var newCompany = {
        logo: logo,
        company: company,
        email: email,
        password: password,
        facebook: facebook,
        website: website,
        address: address,
        mobile: mobile,
        city: city,
        postal: postal,
        practice: practice,
        job: job,
        returnSecureToken: true

    };

    fetch("https://bond-project-938c1.firebaseio.com/company.json", {
        method: "POST",
        body: JSON.stringify(newCompany)
    })
        .then(function (response) {
            console.log(response.statusText, response.status);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.log(error)
        });
}