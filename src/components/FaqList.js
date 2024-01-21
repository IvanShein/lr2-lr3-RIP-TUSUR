import { useState, useEffect } from 'react';
import FaqItem from './FaqItem';
import FaqForm from './FaqForm';
import api from '../utils/Api';

function FaqList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    api.getAllFaqs()
      .then((allFaqs) => {
        setList(allFaqs.path);
      })
      .catch((error) => {
        console.log(`К сожалению, возникла ошибка: ${error}`);
      })
  }, []);

  function handleAdd(data) {
    api.sendNewFaq(data)
      .then((respData) => {
        let temp = Array.from(list);
        temp.push(respData.path);
        setList(temp);
      })
      .catch((error) => {
        console.log(`К сожалению, возникла ошибка: ${error}`);
      })
  };

  function handleDelete(id) {
    api.deleteFaq(id)
      .then((respData) => {
        let temp = Array.from(list);
        let index = temp.findIndex(item => item.id === id);
        temp.splice(index, 1);
        setList(temp);
      })
      .catch((error) => {
        console.log(`К сожалению, возникла ошибка: ${error}`);
      })

  };

  return (
    <div className='faq-list'>
      {list.map((item, key) => {
        return <FaqItem key={item.id} data={item} onDelete={handleDelete} />
      })}
      <FaqForm
        onSave={handleAdd}
        formTitle={'Введите здесь вопрос и/или ответ'}
      />
    </div>
  )
}

export default FaqList;
