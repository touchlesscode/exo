import Button from '../components/Button';
import config from '../utils/config';
import { downloadObjectAsJson } from '../utils/files';
import { ActionBar, Copy, Title, Wrapper } from './index.styled';

const DownloadModal = () => {

    const handleDownloadWidgets = () => {
        const data = localStorage.getItem(config.storage.widgets);
        if (data) {
            downloadObjectAsJson(JSON.parse(data), config.export.widgets);
        }
    }

    const handleDownloadContacts = () => {
        const data = localStorage.getItem(config.storage.contacts);
        if (data) {
            downloadObjectAsJson(JSON.parse(data), config.export.contacts);
        }
    }

    return (
        <Wrapper>
            <Title>Download Configuration</Title>

            <Copy>Want to use our playground on another computer or browser download your configuration.</Copy>
            <Copy>Once downloaded import the file to configure another playground instance.</Copy>

            <ActionBar>
                <Button onClick={handleDownloadContacts}>
                    Download Contacts
                </Button>
                <Button onClick={handleDownloadWidgets}>
                    Download Widgets
                </Button>
            </ActionBar>
        </Wrapper>
    )
}

export default DownloadModal;