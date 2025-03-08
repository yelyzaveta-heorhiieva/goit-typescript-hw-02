import ImageCard from '../ImageCard/ImageCard'
import s from './ImageGallery.module.css'

type Props = {
  data: Data[];
  openModal: (item: Data) => void;
};

const ImageGallery = ({ data, openModal }: Props) => {

  const newData = [...new Map(data.map((obj) => [obj.id, obj])).values()];
  
  return (
    <ul className={s.list}>
      {newData.map((item) => (
        <li key={item.id} onClick={() => openModal(item)}>
          <ImageCard {...item} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery
