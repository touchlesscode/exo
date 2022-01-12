import React from "react";
import { TWidgetContextState, TWidgetUrl, WidgetContext } from '../providers/WidgetProvider';
import { ContactContext, TContactContextState, TPlaygroundContact } from '../providers/ContactProvider';
import { handleFileSelect, validateContactsFile, validateWidgetFile } from '../utils/files';
import { ActionBar, Copy, InputLabel, Title, Wrapper } from "./index.styled";

const ImportModal = () => {
    const { uploadWidgets } = React.useContext<TWidgetContextState>(WidgetContext);
    const { uploadContacts } = React.useContext<TContactContextState>(ContactContext);

    const handleUploadContacts = (evt: any) => {
        const input = evt.currentTarget;
        handleFileSelect(evt, (data) => {
            const contacts: TPlaygroundContact[] = JSON.parse(data);
            if (validateContactsFile(contacts)) {
                uploadContacts(contacts);
            } else {
                alert('invalid file');
            }
        });
        input.value = '';
    }

    const handleUploadWidgets = (evt: any) => {
        const input = evt.currentTarget;
        handleFileSelect(evt, (data) => {
            const widgets: TWidgetUrl[] = JSON.parse(data);
            if (validateWidgetFile(widgets)) {
                uploadWidgets(widgets);
            } else {
                alert('invalid file');
            }
        });
        input.value = '';
    }

    return (
        <Wrapper>
            <Title>Import Configuration</Title>

            <Copy>Did you download a previous configuration?</Copy>
            <Copy>Click an option below to upload your configuration file.</Copy>

            <ActionBar>
                <InputLabel htmlFor="contactsUpload">
                    Import Contacts
                    <input id="contactsUpload" type="file" name="file" onChange={handleUploadContacts} />
                </InputLabel>
                <InputLabel htmlFor="widgetsUpload">
                    Import Widgets
                    <input id="widgetsUpload" type="file" name="file" onChange={handleUploadWidgets} />
                </InputLabel>
            </ActionBar>
        </Wrapper>
    );
}

export default ImportModal;