import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ContactContext, TContactContextState, TPlaygroundContact } from "../../providers/ContactProvider";
import Button from "../Button";
import TextInput from "../TextInput";
import { ContentBox, SuccessBox, TabContent } from "./index.styled";

const ContactTab = ({ visible = false }: { visible: boolean}) => {
    const { addContact } = React.useContext<TContactContextState>(ContactContext);
    const [external, setExternal] = React.useState<string>('');
    const [name, setName] = React.useState<string>('');
    const [tag, setTag] = React.useState<string>('');
    const [success, setSuccess] = React.useState<string|null>(null);

    React.useEffect(() => {
        if (success) {
            setTimeout(() => {
                setSuccess(null);
            }, 2500);
        }
    }, [success]);
    
    const handleAddContact = () => {
        const contact: TPlaygroundContact = {
            id: uuidv4(),
            name,
            external,
            tag
        }
        addContact(contact);
        setSuccess('Contact was added!');

        setExternal('');
        setName('');
        setTag('');
    }

    return (
        <TabContent visible={visible}>
            <h3>Add Contact</h3>

            {success && 
                <SuccessBox>{success}</SuccessBox>
            }

            <ContentBox>
                <div className="form">
                    <TextInput 
                        name="name"
                        label={'Name:'}
                        onChange={e => setName(e.currentTarget.value)}
                        value={name}
                        placeholder="Name of contact"
                    />
                    <TextInput 
                        name="external"
                        label={'External ID:'}
                        onChange={e => setExternal(e.currentTarget.value)}
                        value={external}
                        placeholder="Your contacts database ID"
                    />
                    <TextInput 
                        name="tag"
                        label={'Tag:'}
                        onChange={e => setTag(e.currentTarget.value)}
                        value={tag}
                        placeholder="Optional tag"
                    />
                    <div>
                        <Button onClick={handleAddContact}>Submit</Button>
                    </div>
                </div>
            </ContentBox>
        </TabContent>
    )
}

export default ContactTab;