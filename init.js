window.onload = function()
{   
    document.getElementById('firstNameOutput').innerText = '-';
    document.getElementById('surnameOutput').innerText = '-';
    document.getElementById('patronOutput').innerText = '-';
    document.getElementById('genderOutput').innerText = '-';
    document.getElementById('birthYearOutput').innerText = '-';
    document.getElementById('profiOutput').innerText = '-';
    document.getElementById('birthMonthOutput').innerText = '-';
    document.getElementById('birthDayOutput').innerText = '-';
};


document.getElementById('btnGen').addEventListener('click', (event) => {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('patronOutput').innerText = initPerson.patronName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.yearOfBirth;
    document.getElementById('profiOutput').innerText = initPerson.profi;
    document.getElementById('birthMonthOutput').innerText = initPerson.monthOfBirth;
    document.getElementById('birthDayOutput').innerText = initPerson.dayOfBirth;
    event.preventDefault();
})

document.getElementById('btnReset').addEventListener('click', (event) => {
    document.getElementById('firstNameOutput').innerText = '-';
    document.getElementById('surnameOutput').innerText = '-';
    document.getElementById('patronOutput').innerText = '-';
    document.getElementById('genderOutput').innerText = '-';
    document.getElementById('birthYearOutput').innerText = '-';
    document.getElementById('profiOutput').innerText = '-';
    document.getElementById('birthMonthOutput').innerText = '-';
    document.getElementById('birthDayOutput').innerText = '-';
    event.preventDefault();
})