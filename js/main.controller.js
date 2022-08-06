'use strict'



function redirect(id) {
    console.log(id);
    switch (id) {
        case 'settings':
            console.log(id);
            window.location.href = "user-settings.html";
            break;
        case 'map':
            location.href = "map.html";
            break;
        default:
            break;
    }
}

function save(ev) {
    ev.preventDefault()
    const userData = {}
    userData.email = onSetEmail()
    userData.age = onSetAge()
    userData.bgColor = onSetBackgroundColor()
    userData.txtColor = onSetTextColor()
    userData.date = onSetDate()
    userData.time = onSetTime()

    getDataFromUser(userData)
}

function onSetEmail() {
    const elEmail = document.querySelector('[name=email]')
    const emailAdd = elEmail.value

    elEmail.value = ' '
    return emailAdd
}

function onSetAge() {
    const elAge = document.querySelector('[name=age]')
    const age = elAge.value
    elAge.value = elAge.min

    return age
}

function onSetAgeValue(age) {
    console.log(age)
    document.querySelector('.age-res').textContent = age
}
function onSetBackgroundColor() {
    const elBgColor = document.querySelector('[name=backgroundColor]')
    const bgColor = elBgColor.value

    const elLabel = document.querySelectorAll('label')
    elLabel.forEach(label => label.style.backgroundColor = bgColor)

    return bgColor
}

function onSetTextColor() {
    const elTxtColor = document.querySelector('[name=textColor]')
    const txtColor = elTxtColor.value

    const elLabel = document.querySelectorAll('label')
    elLabel.forEach(label => label.style.color = txtColor)

    return txtColor

}

function onSetDate() {
    const elDate = document.querySelector('[name=date]')
    return elDate.value
}

function onSetTime() {
    const elTime = document.querySelector('[name=time]')
    return elTime.value
}

function renderTimeToBirthDay() {
    document.querySelector('body > section.timeLeft > div').textContent = getBirthDateTime()
}