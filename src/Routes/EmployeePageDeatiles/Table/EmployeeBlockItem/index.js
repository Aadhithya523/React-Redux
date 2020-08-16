import React from 'react';
import EmployeeBlockItem from '../EmployeeBlockItemFirst';
class EmployeeBlock extends React.Component {
    render() {
        return (
            <li class="grid-block">
                <EmployeeBlockItem data={this.props.data} />
                <div class="grid-block__item">{this.props.data.id}</div>
                <div class="grid-block__item">{this.props.data.email}</div>
                <div class="grid-block__item">{this.props.data.mobile}</div>
                <div class="grid-block__item">{this.props.data.dob}</div>
                <div class="grid-block__item">{this.props.data.designation}</div>
                <div class="grid-block__item"><i class="fas fa-ellipsis-v"></i></div>
            </li>
        );
    }
}
export default EmployeeBlock;
