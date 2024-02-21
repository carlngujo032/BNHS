function submitForm() {
    var name = document.getElementById("formGroupExampleInput").value;
    var email = document.getElementById("formGroupExampleInput2").value;
    var number = document.getElementById("formGroupExampleInput3").value;
    var message = document.getElementById("exampleFormControlTextarea1").value;

    // Here, you can perform actions like validation or simply display the submitted data
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Contact Number: " + number);
    console.log("Message: " + message);

    // Optionally, you can reset the form fields after submission
    document.getElementById("formGroupExampleInput").value = "";
    document.getElementById("formGroupExampleInput2").value = "";
    document.getElementById("formGroupExampleInput3").value = "";
    document.getElementById("exampleFormControlTextarea1").value = "";
}