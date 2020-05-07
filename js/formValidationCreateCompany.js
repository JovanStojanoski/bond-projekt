

function isFormValid(company, email, password, facebook, website, city, errorParagraph) {
    if (company == "") {
        errorParagraph.innerText = "Company name field is required";
        return false;
    }
    if (email == "") {
        errorParagraph.innerText = "Email field is required";
        return false;
    }

    var emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if (!emailRegex.test(email)) {
        errorParagraph.innerText = "Email is invalid";
        return false;
    }

    if (password == "") {
        errorParagraph.innerText = "Password field is required";
        return false;
    }

    if (password.length < 6) {
        errorParagraph.innerText = "Password needs to be 6 characters";
        return false;
    }
    if (facebook == "") {
        errorParagraph.innerText = "Facebook link field is required";
        return false;
    }
    if (website == "") {
        errorParagraph.innerText = "Web site link field is required";
        return false;
    }
    if (city == "") {
        errorParagraph.innerText = "City field is required";
        return false;
    }

    return true;
}
