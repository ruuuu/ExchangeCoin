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

        answer.style.height = `${answer.offsetHeight}px`;
        answer.offsetHeight; // браузер пересчитывает высоту

        answer.style.display = 'block';

        answer.style.height = 0; // тк нам нужна анимация

        answer.style.overflow = 'hidden'; // overflow:hidden чтобы элеметы из блока не выпадвли

        answer.style.transition = 'height 0.36s ease-in-out';

        item.classList.remove('faq__item--show');

        setTimeout(() => {
            // когда жмем на открытый элемент, то будут такие стили:
            answer.style.display = '';
            answer.style.height = '';
            answer.style.overflow = '';
            answer.style.transition = '';

        }, 360); //  через 0.36 стили сбросяться
    };



    const show = (item, answer) => {
        if (item.classList.contains('faq__item--show')) return; // ничге  не делаем

        answer.style.display = 'block';
        const height = answer.offsetHeight; //  получили высоту элемента answer

        answer.style.height = 0; // тк нам нужна анимация transition: 'height 0.36s ease-in-out'
        answer.style.overflow = 'hidden'; // overflow:hidden чтобы элеметы из блока не выпадвли
        answer.style.transition = 'height 0.36s ease-in-out';
        answer.offsetHeight; //  браузер высоту пересчитывет
        answer.style.height = `${height}px`;



        setTimeout(() => {
            // когда жмем на открытый элемент, то будут такие стили:
            item.classList.add('faq__item--show');
            answer.style.display = '';
            answer.style.height = '';
            answer.style.overflow = '';
            answer.style.transition = '';

        }, 360); //  через 0.36 стили сбросяться
    };



    const list = document.querySelector('.faq__list'); // ul


    //  используем делегировнаие -  вметсто того чтобы вешать событие на каждый li, повесим обработчик на их родителя, те на ul
    list.addEventListener('click', (evt) => { // evt -  объект собвтия, в нашем случае клика

        const button = evt.target.closest('.faq__question'); // проверяем есть ли у нажатого элемента(или у его родителя) класс .faq__question. Если такого элемента нет, о полуим null, null прерватится в false
        //console.log('target', target);
        console.log(button);
        if (button) {
            const item = button.closest('.faq__item'); // есть ли у button(или у его родителей) класс .faq__item
            // console.log('item ', item);
            // item.classList.toggle('faq__item--show');

            // если нужна чтобы была плавность :
            const answer = item.querySelector('.faq__answer');
            item.classList.contains('faq__item--show') ? hide(item, answer) : show(item, answer); //  есть ли у элемента item класс faq__item--show
        }
    });


};


