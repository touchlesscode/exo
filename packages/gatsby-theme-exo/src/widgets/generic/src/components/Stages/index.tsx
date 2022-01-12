import React, { useEffect, useState } from 'react';
import { Stage, Wrapper } from './index.styles';

interface StagesProps {
    completed: number;
    stages: number;
}

const Stages = ({ completed = 0, stages = 5 }: StagesProps) => {
    const [items, setItems] = useState<number[]>([]);
    useEffect(() => {
        const list = [];
        for(let i = 0; i < stages; i++) {
            list.push(i);
        }

        setItems(list);
    }, [stages]);

    return (
        <Wrapper>
            {items.map(item => (
                <Stage key={`id-${item.toString()}`} completed={completed === stages} active={item <= (completed - 1)} />
            ))}
        </Wrapper>
    );
}

export default Stages;