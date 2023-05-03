
const basketBox = document.querySelector('.cart-box');
const addItem = document.querySelectorAll('.product-card-btn');

const cartTitle = document.createElement('h2');
cartTitle.textContent = 'Cart Items';
cartTitle.classList.add('cart-items-title');

addItem.forEach((element) => {
	element.addEventListener('click', () => {
		const basketItem = element.closest('.product-card-items');
		const itemInfo = {
			id: basketItem.dataset.id,
			image: basketItem.querySelector('.product-card-image').getAttribute('src'),
			name: basketItem.querySelector('.product-card-title').innerText,
			price: basketItem.querySelector('.product-card-price').innerText,
		};
		const basketEl = `
			<div class="product" data-id="${itemInfo.id}">
				<button class="btn-del" type="button">Удалить</button>
					<div class="product-content">
						<img class = "product-img" src="${itemInfo.image}" alt="${itemInfo.name}">
						<div class="product-info">
							<h2 class="product-name">${itemInfo.name}</h2>
							<p class="product-price-label">Price: <span class="product-price">${itemInfo.price}</span></p>
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
		basketBox.insertAdjacentHTML('beforeend', basketEl);
		if (basketBox.children.length > 1) {
			basketBox.appendChild(cartTitle);
		};
		basketBox.insertAdjacentElement('afterbegin', cartTitle);
		const delBtn = document.querySelectorAll('.btn-del');
		delBtn.forEach(button => {
			button.addEventListener('click', () => {
				const product = button.closest('.product');
				product.remove();
				if (basketBox.children.length === 1) {
					cartTitle.remove();
				};
			});
		});
	});
});