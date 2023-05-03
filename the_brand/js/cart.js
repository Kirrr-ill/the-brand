
const cartBox = document.querySelector('.cart-box');
const addItem = document.querySelectorAll('.product-card-btn');

const cartTitle = document.createElement('h2');
cartTitle.textContent = 'Cart Items';
cartTitle.classList.add('cart-items-title');

addItem.forEach((element) => {
	element.addEventListener('click', () => {
		const cartItem = element.closest('.product-card-items');
		const cardInfo = {
			id: cartItem.dataset.id,
			image: cartItem.querySelector('.product-card-image').getAttribute('src'),
			name: cartItem.querySelector('.product-card-title').innerText,
			price: cartItem.querySelector('.product-card-price').innerText,
		};

		const itemInCart = cartBox.querySelector(`[data-id="${cardInfo.id}"]`);
		if (itemInCart) {
			// const value = itemInCart.querySelector('.input-qty').value;
			// const quantity = Number(value);
			// console.log(typeof quantity);
		} else {
			const cartEl = `
			<div class="product" data-id="${cardInfo.id}">
				<button class="btn-del" type="button">Удалить</button>
					<div class="product-content">
						<img class = "product-img" src="${cardInfo.image}" alt="${cardInfo.name}">
						<div class="product-info">
							<h2 class="product-name">${cardInfo.name}</h2>
							<p class="product-price-label">Price: <span class="product-price">${cardInfo.price}</span></p>
							<p class="product-color-label">Color: RED</p>
							<p class="product-size-label">Size: XL</p>
							<div class="product-qty-label">
								<label class="qty-label">Quantity: </label>
								<input class="input-qty" type="number" min="1" max="15" value = "1">
							</div>
						</div>
					</div>
				</div>
		`;
			cartBox.insertAdjacentHTML('beforeend', cartEl);
		}
		if (cartBox.children.length > 1) {
			cartBox.appendChild(cartTitle);
		}
		cartBox.insertAdjacentElement('afterbegin', cartTitle);


		const delBtn = document.querySelectorAll('.btn-del');
		delBtn.forEach(button => {
			button.addEventListener('click', () => {
				const product = button.closest('.product');
				product.remove();
				if (cartBox.children.length === 1) {
					cartTitle.remove();
				};
			});
		});
	});
});