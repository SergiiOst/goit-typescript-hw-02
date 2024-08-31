import s from "./LoadMoreBtn.module.css";

type Click = {
  onClick: () => void;
};

const LoadMoreBtn = ({ onClick }: Click) => {
  return (
    <button className={s.loadMoreBtn} type="button" onClick={onClick}>
      Load more...
    </button>
  );
};

export default LoadMoreBtn;
