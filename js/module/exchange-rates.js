const exchangeRatesList = document.querySelector('.exchange-rates__list'); // ul

const socket = new WebSocket('ws://web-socket-current.herokuapp.com'); // сокет это постоянное соединние


const renderExchange = (wrapper, data) => { // data(строка) - данные с сервера

    const { from, to, rate, change } = JSON.parse(data); // деструктуризация-когда вытаскиваем данные из объекта. JSON.parse(string) и полуичм объект
    // console.log(JSON.parse(data)) // полуичм из строки объект
    console.log(from, to, rate, change);

    const li = document.createElement('li'); // <li></li>
    li.classList.add('exchange-rates__item', change === 1 ? 'exchange-rates__item--up' : 'exchange-rates__item--down');

    const currency = document.createElement('span');
    currency.classList.add('exchange-rates__currency');
    currency.textContent = `${from}/${to}`;

    const value = document.createElement('span');
    value.classList.add('exchange-rates__value');
    value.textContent = rate;

    li.append(currency, value); // порядоок добавления эелментов важен!!!

    wrapper.prepend(li); // добавляем li в wrapper(ul) в начало


    if (wrapper.children.length > 4) { //  если в  ul  li  больше чем  4
        wrapper.children[4].remove(); // удаляем последний элемент
    }
};



//  соединянмся с сервером, елси сервер присылает нам сообщение, то сработает обработчик события 'message'. То что придет с сервера, будет содержаться в evt
socket.addEventListener('message', (evt) => { //   у сокета есть событие 'message', как только сервре пришлет сообщение, событие  'message' произодйет
    //console.log('evt ', evt.data);
    renderExchange(exchangeRatesList, evt.data);
});



socket.addEventListener('error', (error) => {
    console.log(error);
});