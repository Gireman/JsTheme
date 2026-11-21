// Settings
const mainText = document.querySelector(".content__text");
const font_size = document.querySelector(".settings__font-size");
const text_color = document.querySelector(".settings__font-color");
const font_family = document.querySelector(".setting_font");
const interval = document.querySelector(".setting_interval");
const bg = document.querySelector("body");

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


