import React from 'react';
import Refresh from '../../icons/Refresh';
import Warning from '../../icons/Warning';
import { useTheme } from 'styled-components';
import { ReloadButton, ReloadWrapper, WarningCopy, WarningWrapper, Wrapper } from './index.styled';

interface WidgetErrorProps {
    message: string;
    onRefresh?: () => void;
}

const WidgetError = ({ message, onRefresh }: WidgetErrorProps) => {
    const theme = useTheme();

    return (
        <Wrapper>
            <WarningWrapper>
                <Warning width={32} height={32} color='#FE9B6C' />
                <WarningCopy>{message}</WarningCopy>
            </WarningWrapper>
            {onRefresh && 
                <ReloadWrapper>
                    <ReloadButton onClick={onRefresh}>
                        <Refresh width={16} height={16} color={theme.colors.primary.default} />
                        Reload Widget
                    </ReloadButton>
                </ReloadWrapper>
            }
        </Wrapper>
    );
}

export default WidgetError;