import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Page2 from '@Pages/Page2';
import Page404 from '@Pages/Page404';
import Sample from '@Components/Sample';

const Routing = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Sample} />
                <Route path="/page2" component={Page2} />
                <Route component={Page404} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routing;
