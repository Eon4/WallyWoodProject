import { useState } from 'react';
import style from '../styles/toast.module.scss';

export function Toast() {
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState('');

  const showToastMessage = (msg) => {
    setMessage(msg);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000); 
  };

  return (
    <>
      <div
        className={`${style['toast-container']} ${showToast ? style['show-toast'] : ''}`}
      >
        {message}
      </div>
      <div className={style['button-container']}>
        <button onClick={() => showToastMessage('Tak for din besked. Vi vender tilbage til dig hurtigst muligt.😊')}>
          Send
        </button>
      </div>
    </>
  );
}




