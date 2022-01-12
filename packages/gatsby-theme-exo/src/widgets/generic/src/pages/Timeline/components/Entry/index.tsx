import { Transition } from '@headlessui/react';
import React from 'react';
import { InfoContainer, IconHolder, Title, Wrapper } from './index.styled';

interface EntryProps {
    children: React.ReactNode;
    icon: React.ReactNode;
    open?: boolean;
    title: string;
}

const Entry = ({ children, icon, open = false, title }: EntryProps) => {
    return (
        <Wrapper>
            <IconHolder>
                {icon}
            </IconHolder>
            <InfoContainer>
                <Title dangerouslySetInnerHTML={{ __html: title }} />
                <Transition
                    show={open}
                    enter="transition-opacity duration-100"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    {children}
                </Transition>
            </InfoContainer>
        </Wrapper>
    );
};

export default Entry;