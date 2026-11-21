// Settings
const mainText = document.querySelector(".content__text");
const font_size = document.querySelector(".settings__font-size");
const text_color = document.querySelector(".settings__font-color");
const font_family = document.querySelector(".setting_font");
const interval = document.querySelector(".setting_interval");
const bg = document.querySelector("body");

const watchName = document.querySelector("#name");
const watchEmail = document.querySelector("#email");
const watchPassword = document.querySelector("#password");
const saveName = document.querySelector(".name");
const saveEmail = document.querySelector(".email");
const savePassword = document.querySelector(".password");

function changeTextStyle() {
    mainText.style.fontSize = font_size.value + "px";
    mainText.style.color = text_color.value;
    mainText.style.fontFamily = font_family.value;
    mainText.style.lineHeight = interval.value + "%";
}

function changeBackgroundStyle() {
    const selectedRadio = document.querySelector('input[name="font-color"]:checked');
    const label = selectedRadio.closest('label');
    const colorName = label.classList[1];
    bg.style.backgroundColor = colorName;
}

function togglePopup() {
    document.querySelector('.popup-bg').classList.toggle('show');
    saveName.innerHTML = watchName.value;
    saveEmail.innerHTML = watchEmail.value;
    savePassword.innerHTML = watchPassword.value;
}


