const estado = document.querySelector('.estado');

const div1 = `<div class="estado__text">
          <h1 class="estado__title">Personal info</h1>
          <p class="estado__description">
            Please provide your name, email address, and phone number.
          </p>
        </div>

        <form action="#" class="form">
          <label for="form-name" class="input"
            ><span>Name</span>
            <input id="form-name" type="text" placeholder="e.g. Stephen King"
          /></label>

          <label for="form-email" class="input"
            ><span>Email</span>
            <input
              id="form-email"
              type="email"
              placeholder="e.g. stephenking@lorem.com"
          /></label>

          <label for="form-phone" class="input"
            ><span>Phone Number</span>
            <input
              id="form-phone"
              type="email"
              placeholder="e.g. +1 234 567 890"
          /></label>
        </form>`

const div2 = 
        `<div class="estado__text">
          <h1 class="estado__title">Select your plan</h1>
          <p class="estado__description">
            You have the option of monthly or yearly billing.
          </p>
        </div>`


const div3 = `<div><h1>Teste página 3</h1></div>`
const div4 = `<div><h1>Teste página 4</h1></div>`

const estados = [div1, div2, div3, div4]

let estadoAtual = 0;

function renderizaEstado(estadoAtual) {
  estado.innerHTML = estados[estadoAtual];
  if (estadoAtual < 3) {
    estado.innerHTML += `<input type="submit" value="Next Step" class="nextBtn"/>`
    let nextBtn = document.querySelector('.nextBtn');
    nextBtn.onclick = proximoEstado
  }
}

window.onload = renderizaEstado(estadoAtual);

function proximoEstado() {
  estadoAtual++
  renderizaEstado(estadoAtual);
}