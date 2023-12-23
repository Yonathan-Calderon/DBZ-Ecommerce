
const {
    createItemElement,
    createProductElement,
    createNewArrivalElement,
  } = require('../public/Resources/js/main');
  
  test('createItemElement creates the correct HTML structure', () => {
    const item = {
      title: 'Sample Item',
      image: 'sample.jpg',
      price: 20,
    };
  
    const expectedHtml = `
      <article class="featured__card">
        <span class="featured__tag">Sale</span>
        <div class="featured__data item">
            <div>
                <img
                    src="${item.image}" 
                    alt=""
                    class="featured__img item-image"
                />
                <h3 class="featured__title item-title">${item.title}</h3>
                <span class="featured__price item-price">$${item.price}</span>
                <button class="button featured__button addToCart">ADD TO CART</button>
            </div>
        </div>
      </article>`;
  
    const result = createItemElement(item);
  
    expect(result.replace(/\s+/g, ' ')).toEqual(expectedHtml.replace(/\s+/g, ' '));
  });
  
  test('createProductElement creates the correct HTML structure', () => {
    const item = {
      title: 'Sample Product',
      image: 'product.jpg',
      price: 30,
    };
  
    const expectedHtml = `
      <article class="products__card">
        <div class="item">
            <img
                src="${item.image}"
                alt=""
                class="products__img item-image"
            />
            <h3 class="products__title item-title">${item.title}</h3>
            <span class="products__price item-price">$${item.price}</span>
            <button class="products__button addToCart">
                <i class="bx bx-shopping-bag"></i>
            </button>
        </div>
      </article>`;
  
    const result = createProductElement(item);
  
    expect(result.replace(/\s+/g, ' ')).toEqual(expectedHtml.replace(/\s+/g, ' '));
  });
  
  test('createNewArrivalElement creates the correct HTML structure', () => {
    const item = {
      title: 'New Arrival Item',
      image: 'new-arrival.jpg',
      price: 25,
    };
  
    const expectedHtml = `
      <article class="new__card swiper-slide">
        <div class="item">
            <span class="new__tag">New</span>
            <img src="${item.image}" alt="" class="new__img item-image" />
            <div class="new__data">
                <h3 class="new__title item-title">${item.title}</h3>
                <span class="new__price item-price">$${item.price}</span>
            </div>
            <button class="button new__button addToCart">ADD TO CART</button>
        </div>
      </article>`;
  
    const result = createNewArrivalElement(item);
  
    expect(result.replace(/\s+/g, ' ')).toEqual(expectedHtml.replace(/\s+/g, ' '));
  });
  