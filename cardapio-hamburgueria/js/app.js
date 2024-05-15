// Menu
const menu =  document.querySelector('#menu');

// Button do carrinho
const buttonCart = document.querySelector('#cart-btn');

// Modal do carrinho
const cartModal = document.querySelector('#cart-modal');

// Cart do carrinho para pegar todos os items
const cartItemsContainer = document.querySelector('#cart-items');

// Mostrar valor total que consta no carrinho
const cartTotal = document.querySelector('#cart-total');

// Button de enivo de compra do carrinho
const checkoutButton = document.querySelector('#checkout-btn');

// Button de fechar o carrinho
const closeModal = document.querySelector('#close-modal-btn');


// contador de quantridades de item que á no carrinho
const cartCounter = document.querySelector('#cart-count')

// input de endereço do usuario
const addressInput = document.querySelector('#address');

// Emite uma menssagem de alerta para o usuario
const addressWarn = document.querySelector('#address-warn');

let cart = [];


// Abrir o modal do carrinho
function buttonAdd() {
  cartModal.style.display ='flex';
}
buttonCart.addEventListener('click', buttonAdd); 


// Fecha o modal cliando fora do carrinho
function CloseModal(e) {
  if(e.target === cartModal)
    cartModal.style.display = 'none';
  UpadateCartModal();
}
cartModal.addEventListener('click', CloseModal);

// Fecha o modal clicando no FECHAR do carrinho
function CloseButton(e) {
  cartModal.style.display = 'none';
}
closeModal.addEventListener('click', CloseButton)


// Adicionar no carrinho

function AddCart(e) {
  let parentButton = e.target.closest('.add-to-btn')
  if (parentButton) {
   const nome = parentButton.getAttribute('data-name');
   const price = parseFloat(parentButton.getAttribute('data-price'));
   //add no carinho
   addCart(nome, price);
  }
}
menu.addEventListener('click', AddCart);


// Função para adicionar no carrinho
function addCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
   } else {
    cart.push({
      name, 
      price,
      quantity: 1,
    })
  }
  UpadateCartModal();
};

// Atualiza o carinho 
function UpadateCartModal() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach(item => { 
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add("flex", "justify-between", "mb-4", "flex-col")
    cartItemElement.innerHTML = 
    `
    <div class="flex items-center justify-between">
      <div>
        <p class="font-Poppins font-semibold">${item.name}</p>
        <p>Quantidade: ${item.quantity}</p>
        <p class="font-Poppins font-medium">R$ ${item.price.toFixed(2)}</p>
      </div>
      <button class="font-semibold remove-btn" data-name="${item.name}">
        Remover
       </button>
    </div>
    `
    total += item.price * item.quantity;
    cartItemsContainer.appendChild(cartItemElement)
  });

  cartTotal.textContent = total.toLocaleString("PT-BR", {
    style: "currency",
    currency: "BRL"
  });

  cartCounter.textContent = cart.length;
};


// Function remove item do carrinho (cart)
function removeItemCart(name) {

  const index = cart.findIndex(item => item.name == name)
  const item = cart[index]
  index !== -1 ? item : item;
  if ( item.quantity > 1) {
    item.quantity -=1;
    return UpadateCartModal();
  ;
  }
  cart.splice(index, 1);
  UpadateCartModal();
}
function checkoutButtonClick() {
  const isOpen = checkRestaurantOpen();
    if(!isOpen){
        Toastify({
            text: "Restaurante fechado! Consulte o horário de funcionamento.",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#ef4444",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return;
    }
  
  if(cart.length === 0) return;
  if (addressInput.value === ""){
      addressWarn.style.display = "flex"
      addressInput.classList.add("border-red-500")
      return;
  }

  // enviar o pedido para api do zapzap
  const cartItems = cart.map((item) => {
      return (
          ` ${item.name} Quantidade: (${item.quantity}) Preço: R$${item.price} |`
      )
  }).join("")

  const menssage = encodeURIComponent(cartItems);
  const phone = "16991355605";

  window.open(`https://wa.me/${phone}?text=${menssage} Endereço: ${addressInput.value}`, "_blank");

  cart = [];
  addressInput.value = " ";
  UpadateCartModal();
  
}

checkoutButton.addEventListener("click", checkoutButtonClick)



// verificar a hora e manipular o card horario
function checkRestaurantOpen(){
  const data = new Date();
  const hora = data.getHours();
  return hora >= 18 && hora < 24; // boolean true/false

}


const spanItem = document.querySelector('#date-span')
const isOpen = checkRestaurantOpen();


function OpenCheckout( ){
if (!isOpen) {
  cartModal.style.display ='none';
  checkoutButtonClick()
}
return isOpen;
}
buttonCart.addEventListener('click', OpenCheckout)



if(isOpen){
  spanItem.classList.remove("bg-red-500");
  spanItem.classList.add("bg-green-600")
}else{
  spanItem.classList.remove("bg-green-600")
  spanItem.classList.add("bg-red-500")

}