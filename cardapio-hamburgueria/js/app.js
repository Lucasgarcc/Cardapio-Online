// Menu
const menu =  document.querySelector('#menu');

// Button do carrinho
const buttonCart = document.querySelector('#cart-btn');

// Modal do carrinho
const cartModal = document.querySelector('#cart-modal');

// Cart do carrinho para pegar todos os items
const cartItemsContainer = document.querySelectorAll('#cart-items');

// Mostrar valor total que consta no carrinho
const cartTotal = document.querySelector('#cart-total');

// Button de enivo de compra do carrinho
const checkoutButton = document.querySelector('#checkout-btn');

// Button de fechar o carrinho
const closeModal = document.querySelector('#close-modal-btn');


// contador de quantridades de item que á no carrinho
const cartCounter = document.querySelector('#cart-count')

// input de endereço do usuario
const addressAlert = document.querySelector('#address');

// Emite uma menssagem de alerta para o usuario
const addressWarn = document.querySelector('#address-warn');


// Abrir o modal do carrinho
function buttonAdd() {
  cartModal.style.display ='flex';
}
buttonCart.addEventListener('click', buttonAdd); 


// Fecha o modal cliando fora do carrinho
function CloseModal(e) {
  if(e.target === cartModal)
    cartModal.style.display = 'none';
}
cartModal.addEventListener('click', CloseModal);

// Fecha o modal clicando no FECHAR do carrinho
function CloseButton(e) {
  cartModal.style.display = 'none';
}
closeModal.addEventListener('click', CloseButton)



function AddCart(e) {
  let parentButton = e.target.closest('.add-to-btn')
  if (parentButton) {
   const nome = parentButton.getAttribute('data-name');
   const price = parentButton.getAttribute('data-price');
   //add no carinho
  }
}
menu.addEventListener('click', AddCart);

