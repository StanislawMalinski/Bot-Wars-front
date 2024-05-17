import ReactPaginate from 'react-paginate';
import "./Paginator.scss";

export default function Paginator({ pageCount, handlePageClick }) {
    return (
        <ReactPaginate
            className='paginator'
            previousLabel={'≪'}
            nextLabel={'≫'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2   }
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
        />
    );
}