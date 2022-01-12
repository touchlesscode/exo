import React, { FormEvent, useState } from 'react';
import { Button, Input, Text, Wrapper } from './index.styled';

const DevToken = () => {
    const [devToken, setDevToken] = useState<string>('');

    const onSetToken = (e: FormEvent<HTMLInputElement>) => {
        setDevToken(e.currentTarget.value);
    }

    const saveDevToken = async () => {
        await sessionStorage.setItem('token', devToken);
        window.location.reload();
    }
    
    return (
        <Wrapper>
            <Text>You are in development mode enter a token from <strong>app.test.statflo.com</strong>.</Text>
            <Input type="text" placeholder="Token..." value={devToken} onChange={onSetToken} />
            <Button onClick={saveDevToken}>Use Token</Button>
        </Wrapper>
    );
}

export default DevToken;