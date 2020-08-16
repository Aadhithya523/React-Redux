import React from 'react';
import ReactPaginate from 'react-paginate'
import constants from '../../../../Components/Components.constants'
class Footer extends React.Component {
    render() {
        return (
            <div class="card-footer">
                <ReactPaginate
                    previousLabel={constants.PREVIOUS}
                    nextLabel={constants.NEXT}
                    pageCount={constants.PAGECOUNT}
                    marginPagesDisplayed={constants.MARGIN}
                    pageRangeDisplayed={constants.PAGERANGE}
                    containerClassName={'pagination'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousLinkClassName={'page-link'}
                    nextLinkClassName={'page-link'}
                />
            </div>
        );
    }
}
export default Footer;