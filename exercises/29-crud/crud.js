!(function () {
  /**
   * You will be using the Dummy Product API. You can find the documentation here:
   * @see https://dummyjson.com/docs/products
   *
   * You will be building a Create Update Read Delete (CRUD) application.
   * You will need to make three AJAX requests using the Dummy Product API.
   *
   * 1. Make an AJAX request to get a list of products.
   *    Display the list of products in the table below.
   *    See the sample table row HTML below.
   *    Each row must have a "Delete" button.
   *
   * 2. When the user clicks on a "Delete" button,
   *    it should make an AJAX request to delete the product.
   *
   * 3. When the user fills out and submits the "Add Product" form,
   *    send an AJAX request to add the new product.
   *
   * You can use Axios if you like to solve this problem. (You will need to get the library from a CDN.)
   * You can choose to use promise or async and await.
   *
   * HINT: You might want to embed the product ID somewhere in the HTML
   * @see https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
   *
   * Sample table row HTML:
   * @example
   * <tr>
   *   <td>1</td>
   *   <td>iPhone 9</td>
   *   <td>An apple mobile which is nothing like apple</td>
   *   <td>$549.00</td>
   *   <td>12.96</td>
   *   <td>4.69</td>
   *   <td>94</td>
   *   <td>Apple</td>
   *   <td>smartphones</td>
   *   <td>
   *     <button class="btn btn-danger btn-sm delete-product-btn">Delete</button>
   *   </td>
   * </tr>
   */

  const getProducts = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    console.log(data.products);
    showProducts(data.products);
  };
  
  const showProducts = (products) => {
    const table = document.querySelector('#productTableBody');
    table.innerHTML = '';
    products.forEach((product) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td data-id=${product.id}>${product.id}</td>
        <td>${product.title}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td>${product.discountPercentage}</td>
        <td>${product.rating}</td>
        <td>${product.stock}</td>
        <td>${product.brand}</td>
        <td>${product.category}</td>
        <td>
          <button class="btn btn-danger btn-sm delete-product-btn">Delete</button>
        </td>
      `;
      table.appendChild(row);
    });
    // delete product
    const deleteBtns = document.querySelectorAll('.delete-product-btn');
    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const tdElement = e.target.parentElement.parentElement.firstElementChild;
        const id = tdElement.dataset.id;
        deleteProduct(id);
        btn.parentElement.parentElement.remove();
      });
    });
  };
  
  const deleteProduct = async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
  };
  
  const getFormData = () => {
    const form = document.querySelector('#productForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value,
        discountPercentage: form.discountPercentage.value,
        rating: form.rating.value,
        stock: form.stock.value,
        brand: form.brand.value,
        category: form.category.value,
      };
      console.log(formData);
      addProduct(formData);
    });
  };
  
  const addProduct = async (product) => {
    const response = await fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    console.log(data);
    addSingleProduct(data);
  }
  
  const addSingleProduct = (product) => {
    const table = document.querySelector('#productTableBody');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td data-id=${product.id}>${product.id}</td>
      <td>${product.title}</td>
      <td>${product.description}</td>
      <td>$${product.price}</td>
      <td>${product.discountPercentage}</td>
      <td>${product.rating}</td>
      <td>${product.stock}</td>
      <td>${product.brand}</td>
      <td>${product.category}</td>
      <td>
        <button class="btn btn-danger btn-sm delete-product-btn">Delete</button>
      </td>
    `;
    table.appendChild(row);
  }
  
  getProducts();
  getFormData();

})();
