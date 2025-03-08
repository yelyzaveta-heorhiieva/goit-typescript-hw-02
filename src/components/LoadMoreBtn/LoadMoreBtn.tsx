import s from './LoadMoreBtn.module.css'

type Props = {
  onClick: () => void;
};

const LoadMoreBtn = ({ onClick }: Props) => {
  return (
    <>
      <button type='button' onClick={onClick} className={s.btn}>Load more</button>
    </>
  )
}

export default LoadMoreBtn
