import { registerRootComponent } from 'expo';
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux';
import App from "./App"
import LoaderCMP from './components/loader';
import store from './store';
import { initApp } from './utils/helper';

const Root = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        initApp(setLoading)
    }, [])

    if (loading) {
        return <LoaderCMP/>
    }
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}
registerRootComponent(Root);

