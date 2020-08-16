import React from "react";
import ReactPaginate from "react-paginate";
import constants from "../../../../Components/Components.constants";
class Footer extends React.Component {
  onPageChange = ({ selected }) => {
    this.props.getEmployee(selected * 3, 3);
  };

  getTotalPage = () => {
    return Math.ceil(7 / 3);
  };
  render() {
    return (
      <div class="card-footer">
        <ReactPaginate
          previousLabel={constants.PREVIOUS}
          nextLabel={constants.NEXT}
          pageCount={this.getTotalPage()}
          marginPagesDisplayed={constants.MARGIN}
          pageRangeDisplayed={constants.PAGERANGE}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousLinkClassName={"page-link"}
          onPageChange={this.onPageChange}
          nextLinkClassName={"page-link"}
        />
      </div>
    );
  }
}
export default Footer;
