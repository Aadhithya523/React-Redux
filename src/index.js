import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import ReduxProvider from './configureRedux';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/scss/bootstrap.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.scss';
import EmployeeDeatilesPage from './Routes/EmployeePageDeatiles';
import MainHeaderBlock from './Components/MainHeader';
import NavigationBlockContents from './Components/NavigationBlock';
import DashboardData from './Routes/Dashboard';
import Clients from './Routes/Clients'
import Projects from './Routes/Projects'
import Tasks from './Routes/Tasks'
import Calls from './Routes/Calls'
import Contacts from './Routes/Contacts'
import Settings from './Routes/Settings'



ReactDOM.render(
    <ReduxProvider>
        <Router>
            <div class="outer-wrapper">
                <MainHeaderBlock />
                <main class="content-wrapper">
                    <NavigationBlockContents />
                    <section class="content-wrapper__body">
                        <Switch>
                            <Route exact path='/dashboard' component={DashboardData} />
                            <Route exact path='/employee' component={EmployeeDeatilesPage} />
                            <Route exact path='/clients' component={Clients} />
                            <Route exact path='/projects' component={Projects} />
                            <Route exact path='/tasks' component={Tasks} />
                            <Route exact path='/calls' component={Calls} />
                            <Route exact path='/contacts' component={Contacts} />
                            <Route exact path='/settings' component={Settings} />
                        </Switch>
                    </section>
                </main>
            </div>
        </Router>
    </ReduxProvider>,
    document.getElementById('root')
);

/* If you want your app to work offline 
and load faster, you can change*/
/* unregister() to register() below.
 Note this comes with some pitfalls.*/
/* Learn more about service workers:
 https://bit.ly/CRA-PWA*/
serviceWorker.unregister();
