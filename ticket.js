const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')
// tạo biến mới chạy qua các danh sách-+
// hàm hiển thị form 
function showBuyTickets(){
    // alert("hello tta")
    modal.classList.add('open')
    
}
//hàm ẩn
function exit(){
    modal.classList.remove('open')
}
for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}
modalClose.addEventListener('click', exit)
modal.addEventListener('click',exit)
modalContainer.addEventListener('click',function(event){
    event.stopPropagation()
})