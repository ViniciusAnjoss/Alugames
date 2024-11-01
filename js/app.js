function alterarStatus(id) {
    let gameSelecionado = document.getElementById(`game-${id}`);
    let img = gameSelecionado.querySelector(".dashboard__item__img");
    let button = gameSelecionado.querySelector(".dashboard__item__button");

    if (img.classList.contains("dashboard__item__img--rented")) {
        img.classList.remove("dashboard__item__img--rented");
        button.classList.remove("dashboard__item__button--return");
        button.textContent = "Alugar";
    } else {
        img.classList.add("dashboard__item__img--rented");
        button.classList.add("dashboard__item__button--return");
        button.textContent = "Devolver";
    }
}
