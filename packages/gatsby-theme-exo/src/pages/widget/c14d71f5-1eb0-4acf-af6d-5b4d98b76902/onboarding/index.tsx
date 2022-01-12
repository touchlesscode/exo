import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '@exo/context/UserContext';
import { WidgetType } from '@exo/hooks/widgetApi';
import useWidgetReady from '@exo/hooks/useWidgetReady';
import useTextKitContext from '@exo/hooks/useTextKitContext';

const OnBoardingPage = () => {
     
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

export default OnBoardingPage;
