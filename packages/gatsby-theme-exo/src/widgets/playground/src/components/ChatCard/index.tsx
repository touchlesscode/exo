import { TPlaygroundContact } from "../../providers/ContactProvider";
import Button from "../Button";
import { Wrapper } from "./index.styled";

interface ChatCardProps {
    active?: boolean;
    contact: TPlaygroundContact;
    onClick: () => void;
    onRemove: (e: any) => void;
}

const ChatCard = ({ active = false, contact, onClick, onRemove }: ChatCardProps) => {
    return (
        <Wrapper active={active} onClick={onClick}>
            <div className="content">
                <div className="row">
                    <div className="title">{contact.name}</div>
                    {contact.tag && <div className="tag">{contact.tag}</div>}
                </div>
                <div className="description">External ID: {contact.external}</div>
                <div className="action">
                    <Button cancel={active} onClick={onRemove}>Remove</Button>
                </div>
            </div>
        </Wrapper>
    );
}

export default ChatCard;