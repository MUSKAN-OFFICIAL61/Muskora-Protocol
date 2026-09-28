const input = document.getElementById("accessId");
const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", function () {

    const accessId = input.value;

    if (accessId === "") {
        alert("ACCESS ID REQUIRED");
        return;
    }

    localStorage.setItem("accessId", accessId);

    window.location.href = "page3.html";

});