import React from 'react';
import styled from 'styled-components';
import Loader from './Loader';
import WidgetError from './WidgetError';

interface LoadingProps {
    error?: boolean;
    loading: boolean;
    showSkeleton?: boolean;
    skeleton?: React.ReactNode;
    children: JSX.Element;
    onRefresh?: () => void;
}

const Container = styled.div`
    display: block;
    width: 100%;
    box-sizing: border-box;
`

const Loading = ({ error = false, loading, showSkeleton = false, skeleton, children, onRefresh }: LoadingProps) => {
    if (error) {
        return (
            <Container>
                <WidgetError
                    message="There is a problem loading this content"
                    onRefresh={onRefresh}
                />
            </Container>
        )
    }

    if (!loading && showSkeleton && skeleton) {
        return (
            <Container>
                {skeleton}
            </Container>
        );
    }

    if (loading) {
        return (
            <Container>
                <Loader />
            </Container>
        );
    }

    return (
        <Container>{children}</Container>
    );
}

export default Loading;