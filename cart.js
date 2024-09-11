function updateCartItemCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItemCount = cart.length;
  document.getElementById("cartItemCount").textContent = cartItemCount;
}

document.addEventListener("DOMContentLoaded", function () {
  updateCartItemCount();
});
