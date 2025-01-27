let selectElem = document.querySelector("select");

function changeTheme(){
    let logo = document.querySelector("img");
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.className = 'dark';
        logo.setAttribute('src', 'byui-logo_white.png');
    } else {
        document.body.classList.remove('dark');
        logo.setAttribute('src', 'byui-logo_blue.webp');
    }


}

selectElem.addEventListener("change", changeTheme);
