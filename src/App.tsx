import { useEffect, useState } from "react";
import fetchImages, { ImageResponse } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

interface ImageData {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
}

interface ModalState {
  isOpen: boolean;
  modalData: string | null;
}

export default function App() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    modalData: null,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const response: ImageResponse = await fetchImages(query, page);

        setImages((prev) => [...prev, ...response.results]);
        setTotal(response.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const handleSetQuery = (query: string): void => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const handleOpenModal = (url: string): void => {
    setModal({ isOpen: true, modalData: url });
  };

  const handleCloseModal = (): void => {
    setModal({ isOpen: false, modalData: null });
  };

  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ImageGallery images={images} handleOpenModal={handleOpenModal} />
      {total > page && !isLoading && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}
      <ImageModal
        handleCloseModal={handleCloseModal}
        modalData={modal.modalData}
        isOpen={modal.isOpen}
      />
    </>
  );
}
