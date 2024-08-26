import Header from './components/Header'
import Propose from './components/Propose'
import Outstanding from './components/Outstanding';

function App() {
  return (
    <div>
      <Header />
      <div className='bg-[#f7f7ff]'>
        <div className='p-6'>
          <Propose />
          <Outstanding />
        </div>
      </div>
    </div>
  );
}

export default App;
