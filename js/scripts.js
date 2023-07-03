const openModalButton = document.querySelector("#open-modal")
const closeModalButton = document.querySelector("#close-modal")
const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade")

let array = [openModalButton, closeModalButton, fade]
let arrayModalFade = [modal, fade]

let toggleModal = () => {
    arrayModalFade.forEach((el) => el.classList.toggle("hide"))

}

array.forEach((el) => {
    el.addEventListener("click", () => toggleModal())
})
