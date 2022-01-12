import { useState, useEffect } from 'react';
import { AppContext, mainOptions, TRightTabs } from './providers/AppContext';
import { WidgetProvider } from './providers/WidgetProvider';
import { ContactProvider } from './providers/ContactProvider';
import { LogProvider } from './providers/LogProvider';
import { Option } from './components/Dropdown';
import Root from './Root';

declare global {
    interface Window {
        parentIFrame: any;
        iFrameResize: any;
    }
}

function App() {
    const [rightTab, setRightTab] = useState<TRightTabs>('widgets');
    const [selectedOption, setSelectedOption] = useState<Option>(mainOptions[0]);

    useEffect(() => {
        window.iFrameResize({
            autoResize: false,
            sizeWidth: true
        });
    }, []);

    return (
        <LogProvider>
            <ContactProvider>
                <WidgetProvider>
                    <AppContext.Provider value={{
                        selectedOption,
                        setSelectedOption,
                        mainOptions,
                        rightTab,
                        setRightTab,
                    }}>
                        <Root />
                    </AppContext.Provider>
                </WidgetProvider>
            </ContactProvider>
        </LogProvider>
    );
}

export default App;
