const chooseColor = document.querySelectorAll(".choose-color__small");
//нашли кнопки, по которым будем кликать
const contentItem = document.querySelectorAll(".content-item");
//нашли весь контент, который будем менять

chooseColor.forEach(function (element) {
  element.addEventListener("click", open);
  //пробегаемся циклом, чтобы отслеживать события(если бы этой строчки не было, то менялось бы только по первому)
});

function open(event) {
  const target = event.currentTarget;
  //находим элемент, на который тыкнули, с помощью currentTarget
  const button = target.dataset.button;
  //const button будет содержать в себе значение color--green... и тд
  const contentActive = document.querySelectorAll(`.${button}`);
  //то, на что нажали(color--green)
  chooseColor.forEach(function (item) {
    item.classList.remove("choose-color__small--active");
    //убераем у всех класс активности
  });

  target.classList.add("choose-color__small--active");
  //добавляем класс эктив

  contentItem.forEach(function (item) {
    item.classList.remove("content-item__active");
  });

  contentActive.forEach(function (item) {
    item.classList.add("content-item__active");
  });
  
}
