import jpg from '../img/1mb .jpg';

$("#jpg").on("click", () => {
    $(`<img src='${jpg}'>`).appendTo("#imgs");
})