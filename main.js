const   form = document.querySelector('.form'),
        formItems = document.querySelectorAll('.form-item'),
        myName = document.getElementById('name'),
        surname = document.getElementById('surname'),
        birth = document.getElementById('birth'),
        gender = form.gender,
        city = document.getElementById('cityList'),
        address = document.getElementById('textAreaAddress'),
        langs = form.lang,
        submitButton = document.getElementById('submit');



submitButton.addEventListener('click', (e) => {
    event.preventDefault();
    
    for (let el of formItems) {
        el.classList.add('submitted-form');
    }

    createTable();
    submitButton.classList.add('submitted-form');
});

function createTable() {

    let langList = [];
    for (el of langs) {
        if (el.checked) {
            langList.push(el.value)
        }
    };

    form.insertAdjacentHTML(
        'beforeend',
        `<table class="table">
            <tr>
                <td>Ім'я:</td>
                <td>${myName.value}</td>
            </tr>
            <tr>
                <td>Прізвище:</td>
                <td>${surname.value}</td>
            </tr>
            <tr>
                <td>Дата народження:</td>
                <td>${birth.value}</td>
            </tr>
            <tr>
                <td>Стать:</td>
                <td>${gender.value}</td>
            </tr>
            <tr>
                <td>Місто:</td>
                <td>${city.options[city.selectedIndex].text}</td>
            </tr>
            <tr>
                <td>Адреса:</td>
                <td>${address.value}</td>
            </tr>
            <tr>
                <td>Мови, якими володіє:</td>
                <td>${langList}</td>
            </tr>
        </table>`
    )
};