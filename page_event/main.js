let header_element = document.querySelector("#head");
let buton = document.querySelector(".hello");
window.addEventListener("scroll", function () {
    const x = window.scrollX;
    const y = window.scrollY;
  
    if (this.window.innerWidth >= 1026) {
        if (Math.round(y) > 50) {
            header_element.classList.add("closes");
            buton.style.display = "flex";
        } else {
            header_element.classList.remove("closes");
            buton.style.display = "none";
        }
    } else {
        if (Math.round(y) > 10) {
            header_element.classList.add("close_mobile");
            buton.style.display = "flex";
        } else {
            header_element.classList.remove("close_mobile");
            buton.style.display = "none";
        }
    }
  });

// Xem thêm lịch
let isHidden1 = true;
function showMoreSchedule(){
    const items = document.querySelectorAll('.row-calen');
    const showMoreBtn = document.querySelector('.btn-show');

    items.forEach((item, index) => {
      if (isHidden1 || index < 5) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });

    isHidden1 = !isHidden1; // Đảo ngược trạng thái

    if (isHidden1) {
      showMoreBtn.textContent = 'XEM THÊM';
    } else {
      showMoreBtn.textContent = 'THU GỌN';
    }
}