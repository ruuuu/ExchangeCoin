export const accordeon = () => {

    // мой вариант решения:
    // const faqQuestions = document.querySelectorAll('.faq__question'); // псевдомассив кнопок
    // const faqItems = document.querySelectorAll('.faq__item'); // псевдомассив item-ов

    // faqQuestions.forEach((faqQuestion, i) => { // на каждую кнопку вешаем обработчик

    //     faqQuestion.addEventListener('click', () => {
    //         //console.log(faqQuestion, i);

    //         faqItems.forEach((faqItem, j) => {
    //             if (i === j) {
    //                 faqItem.classList.add('faq__item--show');
    //             }
    //             else {
    //                 faqItem.classList.remove('faq__item--show');
    //             }
    //         })

    //     });
    // });




    //  ВАРИАНТ РЕШЕИЯ МАКСА:

    const hide = (item, answer) => {

        if (!item.classList.contains('faq__item--show')) return; // если нет класса faq__item--show, ничего не делаем

        answer.style.height = `${answer.offsetHeight}px`; // высота блока answer
        answer.offsetHeight; // браузер пересчитывает высоту

        answer.style.display = 'block';

        answer.style.height = 0; // тк нам нужна анимация, поэтому обнуляем

        answer.style.overflow = 'hidden'; // overflow:hidden чтобы элеметы из блока answer  не выпадвли

        answer.style.transition = 'height 0.36s ease-in-out'; // анимация для height у answer



        setTimeout(() => {
            // когда жмем на открытый элемент, то будут такие стили:
            item.classList.remove('faq__item--show');
            answer.style.display = '';
            answer.style.height = '';
            answer.style.overflow = '';
            answer.style.transition = '';

        }, 360); //  через 0.36 функция запуститься
    };



    const show = (item, answer) => {
        if (item.classList.contains('faq__item--show')) return; // ничге  не делаем

        answer.style.display = 'block';
        const height = answer.offsetHeight; //  получили высоту элемента answer

        answer.style.height = 0; // тк нам нужна анимация transition: 'height 0.36s ease-in-out'
        answer.style.overflow = 'hidden'; // overflow:hidden чтобы элеметы из блока не выпадвли
        answer.style.transition = 'height 0.36s ease-in-out'; // анимация для height у answer
        answer.offsetHeight; //  браузер высоту пересчитывет
        answer.style.height = `${height}px`;



        setTimeout(() => {
            // когда жмем на открытый элемент, то будут такие стили:
            item.classList.add('faq__item--show');
            answer.style.display = '';
            answer.style.height = '';
            answer.style.overflow = '';
            answer.style.transition = '';

        }, 360); //  через 0.36 отработает эта функция
    };



    const list = document.querySelector('.faq__list'); // ul
    const faqItems = document.querySelectorAll('.faq__item'); // псевдоэемент [li, li, li]



    //  используем делегировнаие -  вметсто того чтобы вешать событие на каждый li, повесим обработчик на их родителя, те на ul
    list.addEventListener('click', (evt) => { // evt -  объект собвтия, в нашем случае клика

        const button = evt.target.closest('.faq__question'); // проверяем есть ли у нажатого элемента(или у его родителя) класс .faq__question. Если такого элемента нет, то получим null, null прерватится в false


        if (button) { // если нашелся такой элемент
            const item = button.closest('.faq__item'); // li, есть ли у button(или у его родителей) класс .faq__item
            // console.log('item ', item);
            // item.classList.toggle('faq__item--show'); // отобразим текст вопроса
            faqItems.forEach((faqItem, i) => {
                // если нужна чтобы была плавность :
                const answer = faqItem.querySelector('.faq__answer');
                if (faqItem === item) { // item - контстанта
                    item.classList.contains('faq__item--show') ? hide(item, answer) : show(item, answer); //  есть ли у элемента item класс faq__item--show, то его скрыввем. Иначе  открываемs
                }
                else {
                    hide(faqItem, answer);
                }
            });


        }
    });


};


