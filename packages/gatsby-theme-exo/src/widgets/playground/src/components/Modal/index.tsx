import React from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { Backdrop, Container } from "./index.styled"

interface ModalProps {
    children: React.ReactNode;
}

export interface ModalHandle {
    open: () => void;
    close: () => void;
}

const Modal = ({ children }: ModalProps, ref: React.ForwardedRef<ModalHandle>) => {
    const containerRef = React.useRef(null);
    const [open, setOpen] = React.useState<boolean>(false);
    useOnClickOutside(containerRef, () => {
        setOpen(false);
    });

    React.useImperativeHandle(ref, () => ({
        open: () => { setOpen(true) },
        close: () => { setOpen(false) }
    }));

    return (
        <Backdrop visible={open}>
            <Container ref={containerRef}>
                {children}
            </Container>
        </Backdrop>
    )
}

export default React.forwardRef<ModalHandle, ModalProps>(Modal) 