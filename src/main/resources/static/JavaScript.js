let ticketArray = [];
ticketArray.push(`<tr><th >First name</th><th>Last name</th><th>Phone number</th><th>Email</th><th>Qty</th><th>Movie name</th></tr>`);


function checkBlank() {
    document.getElementById("quantityError").innerHTML = "";
    document.getElementById("firstNameError").innerHTML = "";
    document.getElementById("lastNameError").innerHTML = "";
    document.getElementById("phoneNumberError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    const movie = document.getElementById("movie").value;
    const quantityInput = document.getElementById("quantity").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;

    // Tester alle input verdier og gir tilbakemelding der det ikke er verdier skrevet.
    if (quantityInput === "") {
        document.getElementById("quantityError").innerHTML = "Cannot be left blank.";
    }
    if (firstName === "") {
        document.getElementById("firstNameError").innerHTML = "Please enter your first name here.";
    }
    if (lastName === "") {
        document.getElementById("lastNameError").innerHTML = "Please enter a last name here.";
    }
    if (phoneNumber === "") {
        document.getElementById("phoneNumberError").innerHTML = "Please enter a phone number here.";
    }
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Please enter an email adress.";
    }

    // Legger inn verdier dersom det er fylt inn verdier.
    if (movie !== "" && firstName !== "" && lastName !== "" && phoneNumber !== "" && email !== "") {
        ticketArray.push(
            `<tr><td>${firstName}</td>
            <td>${lastName}</td>
            <td>${phoneNumber}</td>
            <td>${email}</td>
            <td>${quantityInput}</td>
            <td>${movie}</td>
            </tr>`
        );
        let result = ticketArray.join("");
        document.getElementById("purchaseID").innerHTML = result;
    }
}

function emptyArray() {
    ticketArray = [];
    document.getElementById("purchaseID").innerHTML = "";
}
