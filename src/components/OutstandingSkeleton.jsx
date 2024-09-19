import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function OutstandingSkeleton({ cards }) {
    return (
        Array(cards).fill(0).map((_,i) => (
            <div key={i}>
                <div className="relative">
                    <Skeleton width={'100%'} height={224}/>
                    <div className="absolute left-0 right-0 bottom-0 flex px-3 py-1.5">
                        <Skeleton/>
                    </div>
                </div>
                <Skeleton style={{ marginTop: '12px' }}/>
            </div>
        ))
    )
}

export default OutstandingSkeleton;