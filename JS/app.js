const menu = document.querySelector('#menu-btn');
const header = document.querySelector('.header');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
  document.body.classList.toggle('active');
};
window.onscroll = () => {
  if (window.innerWidth < 1200) {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
    document.body.classList.remove('active');
  }
};

const productPreviewContainer = document.querySelector(
  '.products-preview-container'
);
const prodcutPreview =
  productPreviewContainer.querySelectorAll('.product-preview');

document.querySelectorAll('.products .slide .btn').forEach((detailBtn) => {
  detailBtn.onclick = () => {
    productPreviewContainer.style.display = 'block';
    const name = detailBtn.getAttribute('data-product');
    prodcutPreview.forEach((preview) => {
      const target = preview.getAttribute('data-target');
      if (name == target) {
        preview.style.display = 'flex';
      }
    });
  };
});
document
  .querySelectorAll('.products-preview-container .product-preview .fa-times')
  .forEach((close) => {
    close.onclick = () => {
      productPreviewContainer.style.display = 'none';
      prodcutPreview.forEach((closePreview) => {
        closePreview.style.display = 'none';
      });
    };
  });

const swiperSlides = (id) => {
  const swiper = new Swiper(id, {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
};
swiperSlides('.products-slider');
swiperSlides('.review-slider');
