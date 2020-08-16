import React from 'react';
import OuterWrapper from './Table/TableContents';
import data from '../../EmployeeData.json';
class EmployeeDeatilesPage extends React.Component {
    render() {
        return (
            <div>
                <OuterWrapper data={data} />
            </div>
        );
    }
}
export default EmployeeDeatilesPage;