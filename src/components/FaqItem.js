import { useState } from 'react';
import FaqForm from './FaqForm';

function FaqItem(props) {
  const [faq, setFaq] = useState(props.data);
  const [isEdit, setIsEdit] = useState(false);

  if (isEdit) return (
    <FaqForm data={faq}
      formTitle='Измените вопрос и/или ответ'
      onCancel={() => setIsEdit(false)}
      onSave={(obj) => {
        setFaq(obj);
        setIsEdit(false);
      }}
    />
  )

  return (
    <div className='faq-list__item'>
      <p className='faq-list__item-question'>
        {faq.question ? faq.question : '<текст вопроса не введен>'}
      </p>
      <p className='faq-list__item-answer'>
        {faq.answer ? faq.answer : '<текст ответа не введен>'}
      </p>
      <div className='faq-list__item-menu'>
        <button
          onClick={() => setIsEdit(true)}
          className='faq-list__item-button button link-decoration'
        > Редактировать </button>
        <button
          onClick={() => props.onDelete(faq.id)}
          className='faq-list__item-button button link-decoration'
        > Удалить </button>
      </div>
    </div>
  )
}

export default FaqItem;
