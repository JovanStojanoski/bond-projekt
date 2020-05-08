
function showSelectedImage(imageUrl, error) {
  if (error !== null) {
    alert(error);
  }

  document.getElementById("selected-image").src = imageUrl;
}

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
  // var skills = [];

  // var htmlCheckbox = form["html"];
  // if (htmlCheckbox.checked == true) {
  //   skills.push(htmlCheckbox.value);
  // }

  // var cssCheckbox = form.css;
  // if (cssCheckbox.checked) {
  //   skills.push(cssCheckbox.value)
  // }

  // var jsbasicCheckbox = form.jsbasic;
  // if (jsbasicCheckbox.checked) {
  //   skills.push(jsbasicCheckbox.value)
  // }
  // var jsadvCheckbox = form.jsadv;
  // if (jsadvCheckbox.checked) {
  //   skills.push(jsadvCheckbox.value)
  // }
  // var csbasicCheckbox = form.csbasic;
  // if (csbasicCheckbox.checked) {
  //   skills.push(csbasicCheckbox.value)
  // }
  // var csadvCheckbox = form.csadv;
  // if (csadvCheckbox.checked) {
  //   skills.push(csadvCheckbox.value)
  // }
  // var skills1Checkbox = form.skills1;
  // if (skills1Checkbox.checked) {
  //   skills.push(skills1Checkbox.value)
  // }

  // var skills2Checkbox = form.skills2;
  // if (skills2Checkbox.checked) {
  //   skills.push(skills2Checkbox.value)
  // }

  // var skills2Checkbox = form.skills2;
  // if (skills2Checkbox.checked) {
  //   skills.push(skills2Checkbox.value)
  // }

  // var skills4Checkbox = form.skills4;
  // if (skills4Checkbox.checked) {
  //   skills.push(skills4Checkbox.value)
  // }

  // var skills5Checkbox = form.skills5;
  // if (skills5Checkbox.checked) {
  //   skills.push(skills5Checkbox.value)
  // }

  // var skills6Checkbox = form.skills6;
  // if (skills6Checkbox.checked) {
  //   skills.push(skills6Checkbox.value)
  // }

  var skills = [];
  var skillsCheckboxes = document.querySelectorAll("input[data-courses]:checked");

  for (var i = 0; i < skillsCheckboxes.length; i++) {
    skills.push(skillsCheckboxes[i].value);
  }

  var errorParagraph = document.querySelector("p.error");
  var isValid = isFormValid(fullName, email, password, fbLink, ghLink, city, errorParagraph);

  if (!isValid) {
    return;
  }

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

