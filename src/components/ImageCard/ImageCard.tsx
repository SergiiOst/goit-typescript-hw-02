import s from "./ImageCard.module.css";

type ImageData = {
  urls: {
    small: string;
    regular: string;
  };
  description: string;
};

type ImageCardProps = {
  imageData: ImageData;
  handleOpenModal: (imageUrl: string) => void;
};

const ImageCard = ({ imageData, handleOpenModal }: ImageCardProps) => {
  return (
    <div className={s.imageCard}>
      <img
        src={imageData.urls.small}
        alt={imageData.description || "Image"}
        onClick={() => {
          handleOpenModal(imageData.urls.regular);
        }}
      />
    </div>
  );
};

export default ImageCard;
