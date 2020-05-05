

function createDeveloper(e) {
  e.preventDefault();
  var form = e.target;
  var fullName = form.fullName.value;
  var personalImage = form.image.value;
  var email = form.email.value;
  var password = form.password.value;
  var fbLink = form.fb.value;
  var ghLink = form.gh.value;
  var address = form.address.value;
  var city = form.city.value;
  var postal = form.postal.value;
  var mobile = form.mobile.value;
  var skills = form.skills.value;
 

  var newDeveloper = {
    fullName: fullName,
    personalImage: personalImage,
    email: email,
    password: password,
    fbLink: fbLink,
    ghLink: ghLink,
    address: address,
    city: city,
    postal: postal,
    mobile: mobile,
    skills: skills,
    returnSecureToken: true

  };

  fetch("https://bond-project-938c1.firebaseio.com/developers.json", {
    method: "POST",
    body: JSON.stringify(newDeveloper)
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
