const heroBtn = document.querySelector('.hero__btn'); // кнопка Зарегитриватся
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal'); // модалка


modal.getElementsByClassName.transitionDuration = '0.36s';
overlay.getElementsByClassName.transitionDuration = '0.36s';


heroBtn.addEventListener('click', () => {
    overlay.classList.add('overlay-open');
    modal.classList.add('modal-open');
});


overlay.addEventListener('click', (evt) => { // по нажатию на оверлей, модалка убирается
    // evt-обхект события, он создается при наступлени события

    const target = evt.target; // выдаст элемкнт на который мы кликнули
    //console.log(target);

    if (target === overlay || target.closest('.modal__close')) { // если нажали на оверлей или на кнопку закрытия Крестик. Метод elem.closest('.selector') проверяет наличиеselector-a у элемента. если у него нет сектора, то он идет выше и смотрит  а есть ли селеткор у родителя  и тд . Если ткfого элемента нет, то вернет null
        //console.log('нажали  на оверлей');
        overlay.classList.remove('overlay-open');
        modal.classList.remove('modal-open');
    }

});





const form = document.querySelector('.modal__form'); // форма отпрвки
const modalTitle = document.querySelector('.modal__titile');


form.addEventListener('submit', (evt) => { // событие отрпавки формы

    evt.preventDefault(); // отменеям действие по умолчанию(презагрузка страницы)

    const data = { // здесь будем хранить  данные формы (объект)
        name: form.name.value,
        surename: form.surename.value,
        phone: form.phone.value,
    };

    fetch('https://api-form-order.herokuapp.com/api/order', { // отправляем данные на этот сервер
        method: 'post',
        body: JSON.stringify(data),  // на сервер отправляем  тело запроса: json-строку, не объект. JSON.stringify(obj) преобразовывает объект в строку
    })
        // метод fetch отправляет даные на сервер , ждет ответа и  возвращет промис, его обраббатываем  в методе then() ответ от сервера
        .then((response) => response.json())  // response - ответ от сервера, его обрабабтываем в виде response.json()  вернет промис, привели в  json

        .then((person) => { // то что от сервера получили person = {name: "Руфина", surname: "Давлетова", phone: "89275434322", id: "09876"}
            console.log('person ', person);
            modalTitle.textContent = `${person.name}, ваша заявка успешно отправлена! номер заявки ${person.id}`;

            form.remove(); // удалеяем форму

            setTimeout(() => { // через 3 сек выполняется эта фукнция
                overlay.classList.remove('overley-open'); // удаляем класс 
                modal.classList.remove('modal-open');
            }, 3000);

        })





});
