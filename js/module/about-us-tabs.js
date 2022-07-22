const advantageButtons = document.querySelectorAll('.advantage__button'); //  получили массив псевдоэлементов Nodelist [ button.advantage__button, ]
const advantageItemsContent = document.querySelectorAll('.advantage__item-content');


advantageButtons.forEach((btn, i) => { // перебираем кнпоки, метод  применяет  переданную колбэк фуницю к каждому элементу(кнопке) массива
    //console.log(btn, i);



    btn.addEventListener('click', () => { // на текующую кпноку навешиивем событие клика

        advantageItemsContent.forEach((advantageItem, j) => {
            console.log(btn, i);
            console.log(advantageItem, j);
            if (i === j) {
                advantageButtons[j].classList.add('advantage__button--active');
                advantageItemsContent[j].classList.add('advantage__item-content--active');
            }
            else {
                advantageButtons[j].classList.remove('advantage__button--active');
                advantageItemsContent[j].classList.remove('advantage__item-content--active');
            }
        });

    });

});