import FaqList from './FaqList';

function Main() {
  const tempList = {}

  return (
    <main className="content">
      <h2 className='content__title'>Список часто задаваемых вопросов.</h2>
      <FaqList />
    </main>
  )
}

export default Main;
