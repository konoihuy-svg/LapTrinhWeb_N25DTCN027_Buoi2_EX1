// Bài tập 1 & 2: Nút xóa giỏ hàng và Xác nhận
const clearCartBtn = document.getElementById('clear-cart');
if (clearCartBtn) {
    clearCartBtn.addEventListener('click', function() {
        if (confirm("Xóa toàn bộ giỏ hàng?")) {
            localStorage.removeItem('CART_KEY');
            alert("Đã xóa giỏ hàng thành công!");
            // Cập nhật giao diện...
        }
    });
}

// Bài tập 4: Kiểm tra form liên hệ
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        const messageInput = document.querySelector('textarea');
        if (messageInput && messageInput.value.length < 10) {
            event.preventDefault();
            alert("Nội dung tin nhắn phải từ 10 ký tự trở lên.");
        }
    });
}

// Câu 8: Kiểm tra bảng trước khi thao tác
const cartTable = document.getElementById('cart-table');
if (cartTable) {
    console.log("Đã tìm thấy bảng giỏ hàng trên trang này.");
}
