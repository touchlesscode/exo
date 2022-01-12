import Button from "../Button";
import Conversations from "./Conversations";
import { Wrapper } from "./index.styled";
import Mailbox from "./Mailbox";

interface EmptyProps {
    buttonLabel?: string;
    title: string;
    type: 'mailbox' | 'conversation';
    onButtonPress?: () => void;
}

const Empty = ({ buttonLabel, title, type, onButtonPress }: EmptyProps) => {
    return (
        <Wrapper>
            {type === 'conversation' && 
                <Conversations width={250} />
            }
            {type === 'mailbox' && 
                <Mailbox width={150} />
            }
            <h4>{title}</h4>
            {onButtonPress && buttonLabel && 
                <Button onClick={onButtonPress}>
                    {buttonLabel}
                </Button>
            }
        </Wrapper>
    );
}

export default Empty;