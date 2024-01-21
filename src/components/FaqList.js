import { useState, useEffect } from 'react';
import FaqItem from './FaqItem';
import FaqForm from './FaqForm';

function FaqList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList([
      { id: 1, question: 'чё?', answer: 'а, ни чё!' },
      { id: 2, question: 'где?', answer: 'где-где, в Караганде!' }
    ])
  }, []);

  function handleAdd(data) {
    let temp = Array.from(list);
    temp.push(data);
    setList(temp);
    };

  function handleDelete(id) {
    let temp = Array.from(list);
    let index = temp.findIndex(item => item.id === id);
    temp.splice(index, 1);
    setList(temp);
    };

  return (
    <div className='faq-list'>
      {list.map((item, key) => {
        return <FaqItem key={item.id} data={item} onDelete={handleDelete}/>
      })}
      <FaqForm
      onSave={handleAdd}
      formTitle={'Введите здесь вопрос и/или ответ'}
      />
    </div>
  )
}

export default FaqList;
