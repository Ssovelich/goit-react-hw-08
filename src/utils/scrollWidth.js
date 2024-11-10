const getPageScrollbarWidth = () => {
  const viewportWidth = window.innerWidth;
  const documentWidth = document.documentElement.clientWidth;
  return viewportWidth - documentWidth;
};

// Зберігаємо значення ширини смуги прокрутки + 20px у змінну
const scrollbarWidthPlus20 = getPageScrollbarWidth() + 20;
console.log(scrollbarWidthPlus20);

export default scrollbarWidthPlus20;
