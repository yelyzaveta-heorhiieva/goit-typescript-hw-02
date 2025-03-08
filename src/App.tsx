import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import ImageModal from './components/ImageModal/ImageModal'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import toast from 'react-hot-toast';
import { fetchImages } from './services/api';

  type Response = {
    total_pages: number;
    results: Data[];
  };

function App() {
  const [images, setImages] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [item, setItem] = useState<Data | null>(null);

  useEffect(() => {
    if (query) {
      const getImages = async (searchParam: string, searchPage: number) => {
        try {
          setLoading(true);
          setError(false);
          const { total_pages, results }: Response = await fetchImages(searchParam, searchPage);
          if (!results.length) {
            return toast.error('No images found for your request');
          }
          setTotalPages(total_pages);
          setImages((prev: Data[]) => [...prev, ...results])
        } catch (error) {
         setError(true);
      } finally {
      setLoading(false);
      }
    } 
      getImages(query, page);
    }
  }, [query, page])

  
  const onSubmit = (newQuery: string) => {
    setQuery(newQuery);
    if (query !== newQuery) {
      setImages([]);
    }
    setPage(1);
  };

  
  const openModal = (item: Data) => {
    setIsOpen(true);
    setItem(item);
  }


  return (
    <>
      <SearchBar onSubmit={onSubmit} onLoad={loading} />
      {!error && images.length > 0 && <ImageGallery data={images} openModal={openModal} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {!error && images.length > 0 && totalPages > page && <LoadMoreBtn onClick={() => setPage(prev => prev + 1)} />}
      {item !==null && <ImageModal onOpen={modalIsOpen} closeModal={() => setIsOpen(false)} item={item} />}
    </>
  )
}

export default App
