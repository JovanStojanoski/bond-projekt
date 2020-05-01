function login(e) {
    e.preventDefault();
    var form = e.target;
    var email = form.email.value;
    var password = form.password.value;
    var errorParagraph = document.querySelector("p.error");
    var isValid = isFormValid(email, password, errorParagraph);

    if (!isValid) {
        return;
    }
    var url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAfVRiMkezM0UP5Ro3HSwS5y20BxO_S8dk";

    var loginInfo = {
        email: email,
        password: password,
        returnSecureToken: true
    };

    fetch(url, {
        method: "POST",
        body: JSON.stringify(loginInfo)
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (data.error !== undefined) {
                var errorMessage = data.error.message.replace(/_/g, " ").toLowerCase();
                errorParagraph.innerText = errorMessage;
                return;
            }

            localStorage.setItem("email", data.email);
            localStorage.setItem("token", data.idToken);

            console.log(data);
            location.replace("index.html");
        })
        .catch(function (error) {
            console.log(error);
        });
}
