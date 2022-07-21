import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import s from './SeacrhForm.module.css'

const SearchForm = ({sendRequest}) => {
  const [request, setRequest] = useState('');

  const handleInputChange = e => {
    const value = e.currentTarget.value;

    setRequest(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

      if (request.trim() === '') {
      toast.error('Enter a valid search', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      return;
    }
    sendRequest(request)
    reset();
  };

  const reset = () => {
    setRequest('');
  };

  return (
    <>
        <form onSubmit={handleSubmit} className={s.SearchForm}>
            <input
                value={request}
                onChange={handleInputChange}
                className={s.SearchForm__input}
                type="text"
                placeholder='Введите имя репозитория'
            />
            <button type="submit" className={s.SearchForm__button}>Поиск</button>
          </form>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
    </>
  );
};

export default SearchForm;