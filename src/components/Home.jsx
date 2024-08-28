import Header from './Header'
import Propose from './Propose'
import Outstanding from './Outstanding';
import NewUpdate from './NewUpdate';

function Home() {
    return (
        <div>
            <Header />
            <div className='bg-[#f7f7ff]'>
                <div className='p-6'>
                    <Propose />
                    <Outstanding />
                    <NewUpdate />
                </div>
            </div>
        </div>
    )
}

export default Home;