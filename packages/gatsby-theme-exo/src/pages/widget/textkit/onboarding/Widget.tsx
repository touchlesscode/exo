import React, { Fragment, useState } from 'react';
import { MediumContent, LargeContent, useTextKitWidget } from '@statflo/textkit-widget-sdk-react'

export default function Widget() {
    const { state, setHeader, setFooter, setLabel, setOpen, setSize, appendMessage, replaceMessage } = useTextKitWidget();
    const [headerReplaced, setHeaderReplaced] = useState<boolean>(false);

    const swapHeader = () => {
        if (headerReplaced) {
            setHeader('Your Standard Widget');
            setHeaderReplaced(false);
        } else {
            setHeader('My New Header');
            setHeaderReplaced(true);
        }
    }

    return (
        <Fragment>
            <MediumContent>
                <div>
                    Widget content when medium
                </div>
            </MediumContent>
            <LargeContent>
                <div style={{ height: state.maxHeight }}>
                    Widget content when opened
                    <button onClick={swapHeader}>switch header</button>
                </div>
            </LargeContent>
        </Fragment>
    )
}