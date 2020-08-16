import { connect } from "react-redux";
import { employeeData } from "../../Redux/actions";
import EmployeeDeatilesPage from "./EmployeeDeatilesPage";

const mapStateToProps = (state) => {
  return {
    employeeList: state.EmployeeReducer.employeeData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEmployees: (from, size) => {
      dispatch(employeeData(from, size));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeDeatilesPage);
