import ReactPaginate from 'react-paginate';

function Pagination({ handlePageChange, totalPages }) {

    return (
        <div className="flex justify-center mt-5">
            <nav className="mb-3">

                <ReactPaginate 
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    pageCount={totalPages}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageChange}
                    disabledClassName={"!bg-[#E9ECEF] text-black"}
                    containerClassName={"flex border border-solid border-[#ccc] rounded-md overflow-hidden"}
                    pageClassName={"border-l-[1px] bg-white text-main"}
                    pageLinkClassName={"block px-3 py-1.5 mt-[3px]"}
                    previousClassName={"px-3 py-1.5 border-l-[1px] bg-white text-main"}
                    previousLinkClassName={"block mt-[3px]"}
                    nextClassName={"px-3 py-1.5 border-l-[1px] bg-white text-main"}
                    nextLinkClassName={"block mt-[3px]"}
                    breakClassName={"px-3 py-1.5 border-l-[1px] bg-white text-main"}
                    breakLinkClassName={"block mt-[3px]"}
                    activeClassName={"!bg-main text-white"}
                />
            </nav>
        </div>
    )
}

export default Pagination;