import React, { useCallback, useContext, useEffect, useState } from 'react';
import { CancelButton, Divider, FlexBox, FlexRow, SpacerGap, SubmitButton } from '../styles/addalead.style';
import Loading from '../components/Loading';
import { MainWrapper } from '../components/Wrappers';
import { ThemeProvider } from 'styled-components'
import { useOnEvent,usePostEvent,  WidgetType, WidgetEvents } from '../hooks/widgetApi';
import axios from 'axios';
import Dropdown, { Option } from '../components/Dropdown';
import TextInput from '../components/TextInput';
import Checkbox from '../components/Checkbox';
import { GlobalStyle, defaultTheme as theme } from '../theme'
import WidgetError from '../components/WidgetError';


const IndexPage = () => {

  const event = useOnEvent();
  const postEvent = (typeof window !== 'undefined') && usePostEvent(window);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const [maxHeight, setMaxHeight] = useState<any>();
  const [eventMessage, setEventMessage] = useState<any>();
  const [expanded, setExpanded] = useState<any>();
  const [stage, setStage] = useState<any>('initial');
  const [context, setContext] = useState<any>(false);
  

    useEffect(() => {
        setTimeout(() => {
            postEvent(WidgetEvents.widgetReady({
                type: WidgetType.Default,
                label: "",
                header: "Setting Them Now",
                footer: "View More",
            }))
            if (typeof window !== 'undefined') window.scrollTo(0, 0);
            setLoading(false)
        }, 500);
        
    }, []);

    useEffect(() => {
        if (event) {
            switch (event.type) {
                case WidgetEvents.WidgetPullEvents.widgetMinimized:
                    setExpanded(false);
                    setStage('initial');
                    setMaxHeight(null);
                    break;
                case WidgetEvents.WidgetPullEvents.widgetMaximized:
                    setExpanded(true);
                    setStage('maximized');
                    break;
                case WidgetEvents.WidgetPullEvents.setMaxHeight:
                    console.log('setMaxHeight', event.value);
                    setMaxHeight(event.value);
                    break;
                case WidgetEvents.WidgetPullEvents.updateContext:
                    console.log(event.value);
                    setContext(event.value);
                    break;
            }
            setEventMessage(event);
        }
    }, [event]);


  const handleCancel = () => { 
      
      postEvent(WidgetEvents.closeWidget());
      
  }

  return (
    <>
    <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Loading 
                loading={loading}
                error={error}
            >

            <MainWrapper style={{ flex: 1, padding: 16 }}>
                <h1 className="e-heading e-heading--h1">Mode: {stage}</h1>
                <SpacerGap height={12} />
                <p>conversation: {context?.conversationId}</p>
                <SpacerGap height={12} />
                <p>topic: {context?.campaignId}</p>
                <SpacerGap height={12} />
                {context && (
                    <>
                    <small>
                    
                    {context?.external && (<>
                        External ID: {context?.external.externalId}
                        
                        <SpacerGap height={12} />
                    
                        
                        </>
                    )}
                    {stage === "maximized" && (
                        <>
                        Metadata:
                        <SpacerGap height={12} />
                        <pre>{JSON.stringify(context.external.metadata)}</pre><br/>
                        <SpacerGap height={12} />
                        <img src="https://memecrunch.com/meme/BXYS7/party-time/image.gif" width="50%" />
                        </>
                    )}
                    </small>
                    </>
                )}
            </MainWrapper>
        </Loading>
        </ThemeProvider>
        </>
  )
}

export default IndexPage

