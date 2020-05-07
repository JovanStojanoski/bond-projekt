
// function showSelectedImage(imageUrl, error) {
//   if (error !== null) {
//     alert(error);
//   }

//   document.getElementById("selected-image").src = imageUrl;
// }




function createDeveloper(e) {
  e.preventDefault();
  var form = e.target;
  var fullName = form.fullName.value;
  var personalImage = document.getElementById("selected-image").src;
  var email = form.email.value;
  var password = form.password.value;
  var fbLink = form.fb.value;
  var ghLink = form.gh.value;
  var address = form.address.value;
  var city = form.city.value;
  var postal = form.postal.value;
  var mobile = form.mobile.value;
  var txt = form.txt.value;
  var errorParagraph = document.querySelector("p.error");
  var isValid = isFormValid(fullName, email, password, fbLink, ghLink, city, errorParagraph);

  if (!isValid) {
    return;
  }
  // var skills = form.skills.value;



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
    txt: txt,
    // skills: skills,

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
      if (data.error !== undefined) {
        var errorMessage = data.error.message.replace(/_/g, " ").toLowerCase();
        errorParagraph.innerText = errorMessage;
        return;
      }
    })
    .catch(function (error) {
      console.log(error)
    });
}

