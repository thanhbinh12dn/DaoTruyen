import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function NewUpdateSkeleton({ cards }) {
    return (
       Array(cards).fill(0).map((_, index) => (
            <div key={index}>
                <div className='mb-6 px-2 rounded-lg shadow-[0_2px_6px_0_rgb(218_218_253/65%),0_2px_6px_0_rgb(206_206_238/54%)]'>
                    <div>
                        <Skeleton width={'100%'} height={'195px'}/>
                    </div>
                    <div className='p-4'>
                        <Skeleton width={'100%'} style={{ marginTop: '8px' }}/>
                        <Skeleton width={'100%'} style={{ marginTop: '6px' }}/>
                        <Skeleton width={'100%'} style={{ marginTop: '6px' }}/>
                    </div>
                </div>
            </div>
       ))
    )
}

export default NewUpdateSkeleton;