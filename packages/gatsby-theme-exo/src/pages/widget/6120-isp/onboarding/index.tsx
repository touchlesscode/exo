import React, { useContext, useEffect, useState, useReducer } from 'react';
import Loading from '@exo/components/Loading';
import AddButton from '@exo/components/AddButton';
import { UserContext } from '@exo/context/UserContext';
import { MainWrapper } from '@exo/components/Wrappers';
import { ThemeProvider } from 'styled-components'
import { WidgetType, WidgetViewSize, WidgetEvents } from '@exo/hooks/widgetApi';
import axios from 'axios';
import { useFormik } from 'formik';
import Dropdown, { Option } from '@exo/components/Dropdown';
import TextInput from '@exo/components/TextInput';
import { createOptions, validationAddress, validationPrimary } from '@exo/utils';
import { GlobalStyle, defaultTheme as theme } from '@exo/theme'
import useWidgetReady from '@exo/hooks/useWidgetReady';
import useTextKitContext from '@exo/hooks/useTextKitContext';

const Index = () => {
     
     const ready = useWidgetReady({
        type: WidgetType.Default,
        label: "",
        header: "Details",
        footer: ""
     });

     const { postEvent, event } = useTextKitContext(UserContext);
     const { error, data, loading, reloadContact } = useTextKitContext();
     const [init, setInit] = useState<boolean>(false);
     const [state, setState] = useState<TState>('compact');
     const { expanded } = useContext(UserContext);
     
     useEffect(() => {
        if (!init && ready) {
            setInit(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [init, ready]);

    useEffect(() => {
        if (!expanded) {
            setState('compact');
        }

        if (expanded && state !== 'form' && state !== 'view') {
            setState('list');
        }
    }, [expanded, state]);

        
     return <div>Index Page</div>;
};

export default Index;
