import React from 'react';
import ListItem from '@exo/components/ListItem';
import { MainWrapper } from '@exo/components/Wrappers';

const Skeleton = () => {
    return (
        <MainWrapper>
            <ListItem title='Account ID' value="—" />
            <ListItem title='Current Rep' value="—" />
            <ListItem title='Store' value="—" />
        </MainWrapper>
    )
}

export default Skeleton;