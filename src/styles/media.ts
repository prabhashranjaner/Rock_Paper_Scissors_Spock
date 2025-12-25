function customMedia(width: string) {
  return `@media (min-width:${width})`;
}

const media = {
  mobile: customMedia("500px"),
  tablet: customMedia("768px"),
  desktop: customMedia("1080px"),
  large: customMedia("1440px"),
};

export default media;
