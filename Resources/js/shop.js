
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (event) => {
        if (event.target && event.target.closest('.addToCart')) {
            addToCartClicked(event);
        }
    });

    const shoppingCartItemsContainer = document.querySelector('#shoppingCardItemsContainer');
    const addSuscribe = document.querySelector('#suscribe');

    if (addSuscribe) {
        addSuscribe.addEventListener('click', showAlertSuscribe);
    }

    function addToCartClicked(event) {
        event.preventDefault();
        const button = event.target.closest('.addToCart');
        const item = button.closest('.item');

        if (!item) {
            console.error("No se encontró el contenedor .item.");
            return;
        }

        const itemTitleElement = item.querySelector('.item-title');
        const itemPriceElement = item.querySelector('.item-price');
        const itemImageElement = item.querySelector('.item-image');

        if (!itemTitleElement || !itemPriceElement || !itemImageElement) {
            console.error("No se encontró uno de los elementos necesarios dentro del contenedor .item.");
            return;
        }

        const itemTitle = itemTitleElement.textContent;
        const itemPrice = itemPriceElement.textContent;
        const itemImage = itemImageElement.src;

        addItemShoppingCart(itemTitle, itemPrice, itemImage);
        showAlert();
    }

    function addItemShoppingCart(itemTitle, itemPrice, itemImage) {
        const shoppingCartRow = document.createElement('div');
        const shoppingCardContent = `
        <div class="cart__card shoppingCartItemGlobal">
            <div class="cart__box ">
                <img src="${itemImage}" alt="" class="cart__img">
            </div>

            <div class="cart__details">
                <div class="cart__title shoppingCartItemTitle">${itemTitle}</div>
                <div class="cart__price item-price shoppingCartItemPrice">${itemPrice}</div>

                <div class="cart__amount">
                    <div class="cart__amount-content">
                        <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" value="1">
                    </div>
                    <i class='bx bx-trash-alt cart__amount-trash buttonDelete'></i>
                </div>
            </div>
        </div>
        `;
        shoppingCartRow.innerHTML = shoppingCardContent;
        shoppingCartItemsContainer.append(shoppingCartRow);

        shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);
        shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged);

        updateShoppingCartTotal();
    }

    function updateShoppingCartTotal() {
        let total=0;
        const shoppingCartTotal= document.querySelector('.shoppingCartTotal');
        const shoppingCartItems = document.querySelectorAll('.shoppingCartItemGlobal');
        
        shoppingCartItems.forEach((shoppingCartItem) => {
            const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.item-price');
            const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$',''));
            const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');
            const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);

            total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
        });
        shoppingCartTotal.innerHTML = `${total} $`;
    }

    function removeShoppingCartItem(event) {
        const buttonClicked = event.target;
        buttonClicked.closest('.shoppingCartItemGlobal').remove();
        updateShoppingCartTotal();
    }

    function quantityChanged(event) {
        const input = event.target;
        input.value <= 0 ? (input.value = 1) : null;
        updateShoppingCartTotal();
    }

    function showAlertSuscribe() {
        location.reload();
    }
});






