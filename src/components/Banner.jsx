import BANNER from '../img/banner.jpg'

function Banner() {
    return (
        <div className="mx-6 mt-6">
            <a href="#">
                <img className='w-full max-w-lg my-0 mx-auto rounded-md' src={BANNER} alt="banner" />
            </a>
        </div>
    )
}

export default Banner;