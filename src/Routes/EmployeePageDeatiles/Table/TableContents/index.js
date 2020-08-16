import React from "react";
import TableBody from "../TableBody";
import Footer from "../Footer";
import TableTitle from "../TableTitle";
class OuterWrapper extends React.Component {
  render() {
    return (
      <div class="content-block">
        <section class="card">
          <TableTitle />
          <TableBody data={this.props.data} />
          <Footer getEmployee={this.props.getEmployee} />
        </section>
      </div>
    );
  }
}
export default OuterWrapper;
