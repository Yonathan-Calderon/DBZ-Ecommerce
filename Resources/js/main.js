// Delete serverUrl y paths
const paths = ['items', 'products', 'newArrivals'];

const pathConfig = {
    'items': {
        containerId: '#itemsContainer',
        createElementFunction: createItemElement
    },
    'products': {
        containerId: '#productsContainer',
        createElementFunction: createProductElement
    },
    'newArrivals': {
        containerId: '#newArrivalsContainer',
        createElementFunction: createNewArrivalElement
    }
};

document.addEventListener('DOMContentLoaded', () => {
    paths.forEach(path => getData(path));
});

// Update getData
function getData(path) {
    const config = pathConfig[path];
    if (!config) {
        console.error('Path not recognized:', path);
        return;
    }

    // Cargar el archivo JSON localmente
    fetch(`resources/mock/bd.json`)
        .then((res) => res.json())
        .then((data) => printData(data[path], config.containerId, config.createElementFunction))
        .catch(error => console.error("Error fetching data:", error));
}


function printData(data, containerId, createElementFunction) {
    const container = document.querySelector(containerId);
    if (!container) {
        console.error("No se encontró el contenedor:", containerId);
        return;
    }

    data.forEach(item => {
        const itemHtml = createElementFunction(item);
        container.insertAdjacentHTML('beforeend', itemHtml);
    });
}

function createItemElement(item) {
    return `
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
}

function createProductElement(item) {
    return `
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
}

function createNewArrivalElement(item) {
    return `
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
}

// window.onload eliminado
