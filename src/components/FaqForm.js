import { useState } from 'react';

function FaqForm(props) {
  const [question, setQuestion] = useState(props.data ? props.data.question : '');
  const [answer, setAnswer] = useState(props.data ? props.data.answer : '');

  function handleSave() {
    let newFaq = Object.assign({}, props.data);
    newFaq.question = question;
    newFaq.answer = answer;
    props.onSave(newFaq);
    setQuestion('');
    setAnswer('');
  };

  return (
    <div className='faq-form'>
      <h2 className='faq-form__title'>{props.formTitle}</h2>
      <textarea className='faq-form__input'
        type='text'
        maxLength='150'
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder='Введите сюда Ваш вопрос'
      />
      <textarea className='faq-form__input'
        type='text'
        maxLength='150'
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder='Введите сюда ответ'
      />
      <button
        onClick={handleSave}
        className='faq-form__button button link-decoration'
      > Сохранить </button>
      {props.data &&
        <button
          onClick={() => props.onCancel()}
          className='faq-form__button button link-decoration'
        > Отменить </button>}
    </div>
  )
}

export default FaqForm;
