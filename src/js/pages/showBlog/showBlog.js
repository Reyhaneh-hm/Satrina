import '../../../scss/components/pages/showBlog/showBlog.scss';
/*------------------------------------------------*/

window.addEventListener("DOMContentLoaded", () => {

    const filterBtn = document.querySelector("#filterBtn");
    const modalFilter = document.querySelector(".modalFilter");
    const overlay = document.querySelector(".overlay");
    filterBtn.addEventListener("click", () => {
        [overlay, modalFilter].forEach( (item) => item.classList.toggle("active"));
    }
    );
    overlay.addEventListener("click", () => {
        [overlay, modalFilter].forEach( (item) => item.classList.remove("active"));
    }
    );

}
)