import { lazy } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Sample from '@Components/Sample';

const Page404 = lazy(() => import('@Pages/Page404'));

const Routing = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Sample} />
                <Route component={Page404} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routing;
