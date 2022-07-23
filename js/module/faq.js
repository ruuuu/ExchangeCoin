export const accordeon = () => {

    // мой вариант решения:
    // const faqQuestions = document.querySelectorAll('.faq__question');
    // const faqItems = document.querySelectorAll('.faq__item');

    // faqQuestions.forEach((faqQuestion, i) => { // на каждуюкнопку веаме обработчик

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


    //  вариант рещения Макса:
    const list = document.querySelector('.faq__list'); // ul


    //  используем делегировнаие-  вметсто того чтобы вешать событие на каждый li, повесим обработчик на их родителя, те на ul
    list.addEventListener('click', (evt) => { // evt -  объект собвтия, в нашем случае клика

        const button = evt.target.closest('.faq__question'); // проверяем есть ли у нажатого элемента(или у его родителя) класс .faq__question. Если такого элемента нет, о полуим null, null прерватится в false
        //console.log('target', target);
        console.log(button);
        if (button) {
            console.log(1);
            const item = button.closest('.faq__item'); // есть ли у button(или у его родителей) класс .faq__item
            console.log('item ', item);
            item.classList.toggle('faq__item--show');
        }


    });


};


