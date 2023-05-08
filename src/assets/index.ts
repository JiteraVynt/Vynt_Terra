import noImage from "./images/no-image.png"
import image1683536953306Png from "./images/1683536953306.png"

type AssetNames = 'no-image' | '1683536953306.png'
const assets = (name: AssetNames) => {
  switch (name) {
    case 'no-image':
      return noImage;
      case '1683536953306.png':
      return image1683536953306Png;
  }
};

export default assets;
