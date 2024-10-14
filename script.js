const accardionArray = document.querySelectorAll(".accordion__item");

function removeAccardionArrayItemShow(id) {
  if (!id) return
  accardionArray.forEach((accardion) => {
    if (accardion.closest('.accordion').id === id) {
      accardion.querySelector(".accordion__body").classList.remove("accordion__item_show");
    }
  })
}

document.addEventListener('click', (event) => {
  if (event.target.closest('.accordion__item')) {
    const accardion = event.target.closest('.accordion__item');
    const accardionBody = accardion.querySelector('.accordion__body');
    if (!accardionBody.classList.contains('accordion__item_show')) {
      removeAccardionArrayItemShow(accardion.closest('.accordion').id)
      accardionBody.classList.add('accordion__item_show')
    } else {
      accardionBody.classList.remove('accordion__item_show')
    }
  }
})



