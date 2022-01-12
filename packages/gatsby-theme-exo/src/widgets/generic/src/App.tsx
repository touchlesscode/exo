import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { usePostEvent } from './hooks/widgetApi';
import useAuthorization from './hooks/useAuthorization'
import { GlobalStyle } from './theme'
import './widget'
import Root from './Root';
import './App.scss';
import DevToken from './components/DevToken';
import useScript from './hooks/useScript';
import Loader from './components/Loader';
import { defaultTheme as theme } from './theme'
import WidgetError from './components/WidgetError';

function App() {
    useScript("https://cdn.statflo.com/scripts/iframeResizer.contentWindow.min.js");
    const postEvent = usePostEvent(window);
    const widget = useAuthorization();
    const [ready, setReady] = useState<boolean>(false);
    const [dev, setDev] = useState<boolean>(false);

    useEffect(() => {
        const checkDevToken = async () => {
            let token: string | null = await sessionStorage.getItem('token');

            if (!token && process.env.NODE_ENV === 'development') {
                setDev(true);
            }
        }

        checkDevToken();
    }, []);

    useEffect(() => {
        if (widget.authorized && !widget.loading) {
            setReady(true);
        }
    }, [widget]);

    if (process.env.NODE_ENV === 'development' && dev) {
        return (
            <DevToken />
        );
    }

    const displayWidget = () => {
        if (!ready && !widget.loading && !widget.authorized) {
            return <WidgetError 
                message="We are unable to load this widget." 
                onRefresh={() => window.location.reload()} 
            />;
        }

        if (widget.authorized && widget.loading && !ready) {
            return <Loader />;
        }

        if (ready && !widget.loading && widget.authorized) {
            return <Root
                carrierId={widget.carrierId}
                dealerId={widget.dealerId}
                userId={widget.userId}
                token={widget.token}
                postEvent={postEvent}
            />;
        }

        return null;
    }

    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                {displayWidget()}
            </ThemeProvider>
        </>
    )
}

export default App
