import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from './theme';
import Chat from './components/Chat';
import Body from './components/Body';
import RightColumn from './components/RightColumn';
import Navigation from './components/Navigation';
import Modal, { ModalHandle } from './components/Modal';
import ImportModal from './Modals/ImportModal';
import DownloadModal from './Modals/DownloadModal';

const Wrapper = styled.div`
    display: flex;
    align-items: items-stretch;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`

const Root = () => {
    const importRef = React.useRef<ModalHandle>(null);
    const downloadRef = React.useRef<ModalHandle>(null);

    return (
        <Wrapper>
            <GlobalStyle />
            <ThemeProvider theme={defaultTheme}>
                <Navigation 
                    onUpload={() => {
                        if (importRef.current) {
                            importRef.current.open();
                        }
                    }}
                    onDownload={() => {
                        if (downloadRef.current) {
                            downloadRef.current.open();
                        }
                    }}
                />
                <Chat />
                <Body />
                <RightColumn />
                <Modal ref={importRef}>
                    <ImportModal />
                </Modal>

                <Modal ref={downloadRef}>
                    <DownloadModal />
                </Modal>
            </ThemeProvider>
        </Wrapper>
    );
}

export default Root; 