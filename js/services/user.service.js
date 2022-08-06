'use strict'

const STORAGE_KEY = 'userData'
let gUserData


function getDataFromUser(userData) {
    gUserData = userData
    getBirthDateTime()
}


function _saveData() {
    saveToStorage(STORAGE_KEY, gUserData)
}

function getBirthDateTime() {
    const birthDate = gUserData.date + ' ' + gUserData.time
    console.log(new Date(birthDate));
    console.log(new Date());
    const secLeft = Math.abs(new Date() - new Date(birthDate))
    const hour = (secLeft / (1000 * 60 * 60))

    console.log(hour)
}