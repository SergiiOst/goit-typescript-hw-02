import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

type ImageData = {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
};

type ImageCardProps = {
  images: ImageData[];
  handleOpenModal: (url: string) => void;
};

const ImageGallery = ({ images, handleOpenModal }: ImageCardProps) => {
  return (
    <ul className={s.imagesContainer}>
      {images.map((image) => {
        return (
          <li key={image.id} className={s.imagesItem}>
            <ImageCard imageData={image} handleOpenModal={handleOpenModal} />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
