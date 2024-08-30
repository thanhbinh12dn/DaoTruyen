import Header from './Header'
import Propose from './Propose'
import Outstanding from './Outstanding';
import NewUpdate from './NewUpdate';
import Category from './Category';
import Footer from './Footer'

function Home() {
    return (
        <div>
            <Header />
            <div className='bg-[#f7f7ff]'>
                <div className='p-6'>
                    <Propose />
                    <Outstanding />
                    <NewUpdate />
                    <Category />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;