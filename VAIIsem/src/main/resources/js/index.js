const profileLink = document.getElementById("profile-link");
let userSignedIn = false;
function updateText() {
    if(!userSignedIn) {
        profileLink.textContent = "Sign in";
    } else {
        profileLink.textContent = "Profile";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    updateText();
});

