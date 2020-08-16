import React from 'react';
import { NavLink } from 'react-router-dom';
class NavigationBlockContents extends React.Component {
    render() {
        return (
            <aside class="content-wrapper__navigation">
                <div class="navigation-block">
                    <ul>
                        <li><NavLink to="/dashboard">Dashboard</NavLink>{' '}</li>
                        <li><NavLink to="/employee">Employee</NavLink>{' '}</li>
                        <li><NavLink to="/clients">Clients</NavLink>{' '}</li>
                        <li><NavLink to="/projects">Projects</NavLink>{' '}</li>
                        <li><NavLink to="/tasks">Tasks</NavLink>{' '}</li>
                        <li><NavLink to="/calls">Calls</NavLink>{' '}</li>
                        <li><NavLink to="/contacts">Contacts</NavLink>{' '}</li>
                        <li><NavLink to="/settings">Settings</NavLink>{' '}</li>
                    </ul>
                </div>
            </aside>
        );
    }
}
export default NavigationBlockContents;