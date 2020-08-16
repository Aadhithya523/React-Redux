import React from "react";
import OuterWrapper from "./Table/TableContents";
class EmployeeDeatilesPage extends React.Component {
  constructor(props) {
    super(props);
    this.props.getEmployees(0, 3);
  }

  render() {
    return (
      <div>
        <OuterWrapper
          data={this.props.employeeList}
          getEmployee={this.props.getEmployees}
        />
      </div>
    );
  }
}
export default EmployeeDeatilesPage;
