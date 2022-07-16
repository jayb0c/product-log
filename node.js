const form = document.getElementById('form');
const save = document.getElementById('save');
const prodName = document.getElementById('prodName');
const prodDescription = document.getElementById('description');
const prodImage = document.getElementById('image');
const imagePreview = document.getElementById('imageUp');
const prodPrice = document.getElementById('price');

prodImage.addEventListener('input', function(event, err){
  console.log(isImage(prodImage.value));
  imagePreview.style.backgroundSize = 'cover';
  imagePreview.style.backgroundImage = 'url(' + prodImage.value + ')';
})

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let product = { name: prodName.value, description: prodDescription.value, image: prodImage.value, price: prodPrice.value };
  console.log(product);
})

function isImage(url) {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}
