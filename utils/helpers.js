export const isMobile = () => {
  if (!process.browser) return true;
  if (window.innerWidth <= 800 && window.innerHeight <= 600) {
    return true;
  }
  return false;
};

export const getImagePath = (img) => {
  if (img.indexOf('uploads') !== -1) {
    return `/api/${img}`;
  }
  return img;
};
