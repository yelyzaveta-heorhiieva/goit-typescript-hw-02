import s from './ImageCard.module.css'


const ImageCard = ({ urls, alt_description }: Data) => {
  return (
    <>
          <img src={urls.small} alt={alt_description} className={s.img} />
    </>
  )
}

export default ImageCard
