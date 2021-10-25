import { Suspense, lazy } from 'react';

const Header = lazy(() => import('header/Header'));

const App = () => {
    return (
        <div style={{ backgroundColor: 'blue', height: '100px', width: '200px' }}>
            <Suspense fallback={"loading ..."}>
                <Header />
            </Suspense>
            This is main app
        </div>
    )
}

export default App;