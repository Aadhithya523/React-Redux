import React from 'react';
import EmployeeBlock from '../EmployeeBlockItem';
import TableHeaderItem from '../TableHeaderItems';
const TABLE_TITLE = [
    {title:'Name'},
    {title:'Employee ID'},
    {title:'Email ID'},
    {title:'Mobile'},
    {title:'Joining Date'},
    {title:'Role'},
    {title:'Action'}
]

class TableBody extends React.Component {
    getEmployeeDeatiles() {
        let employeeBlocks = [];
        this.props.data.map(ele => {
            employeeBlocks.push(<EmployeeBlock data={ele} />);
        });
        return employeeBlocks;
    }
    render() {
        return (
            <div class="card-body">
                <ul class="grid-wrapper">
                    <TableHeaderItem TITLE={TABLE_TITLE}/>
                    {this.getEmployeeDeatiles()}
                </ul>
            </div>
        );
    }
}

export default TableBody;