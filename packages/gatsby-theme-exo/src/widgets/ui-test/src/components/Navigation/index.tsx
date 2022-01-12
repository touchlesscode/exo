import React from 'react';
import { Avatar, Bottom, Container, Logo, Top } from './index.styled';

const Navigation = () => {
    return (
        <Container>
            <Top>
                <Logo>
                    <svg width={32} data-name="Layer 1" viewBox="0 0 279.35 242.04">
                        <defs>
                            <clipPath id="prefix__a" transform="translate(-72.82 -86.16)">
                                <path fill="none" d="M72.82 86.16h279.34V328.2H72.82z"></path>
                            </clipPath>
                        </defs>
                        <g clip-path="url(#prefix__a)">
                            <path d="M115.95 241.24c0 .26 0 .53.08.8H.23v-.64h111.5c1.42 0 2.81-.09 4.23-.14" fill="#e4f2f2"></path>
                            <path d="M116.07 157c.87-.8 1.77-1.57 2.61-2.4q38.53-38.5 77-77.06c2-2 2.88-1.78 4.73.08q38.64 38.83 77.5 77.46c1.93 1.93 1.9 2.82 0 4.72q-39 38.76-77.71 77.72c-2 2-2.85 1.44-4.47-.19q-38.46-38.57-77-77c-.84-.84-1.75-1.61-2.62-2.41v-.89" fill="#293c89"></path>
                            <path d="M34.23 58.01c0-18.3 0-36.61-.06-54.92 0-2.4.58-3.1 3.05-3.09q55.11.12 110.22 0c2.38 0 3.09.53 3.09 3q-.12 54.93 0 109.84c0 2.39-.54 3.08-3 3.07q-55.11-.12-110.21 0c-2.76 0-3.13-1-3.12-3.34.09-18.19 0-36.39 0-54.59" fill="#e1207b"></path>
                            <path d="M116.07 157v.89l-.12 45.72v37.63c-1.4.05-2.81.14-4.21.14l-111.56.03c-.05-1.08-.14-2.16-.14-3.25 0-36.28 0-72.57-.08-108.86 0-3 .8-3.74 3.76-3.74q54.3.17 108.59 0c3.13 0 3.7 1 3.67 3.82-.13 9.21 0 18.42 0 27.62" fill="#3fb8c0"></path>
                        </g>
                    </svg>
                </Logo>
            </Top>
            <Bottom>
                <Avatar src="https://s.gravatar.com/avatar/7225325ef2451454df41e900ef8cf5c1?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fbf.png" alt="Avatar" />
            </Bottom>
        </Container>
    );
}

export default Navigation;