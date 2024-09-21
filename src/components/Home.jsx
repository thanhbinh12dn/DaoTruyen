import Header from './Header'
import CarouselSlider from './CarouselSlider';
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
                <div className='lg:p-6'>
                    <CarouselSlider />
                    <Propose />
                    <NewUpdate />
                    <Outstanding />
                    <Category />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;