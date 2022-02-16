/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { FC, useRef, useState, useEffect } from "react";
import Close from "@components/Close";
import { Box, Flex } from "theme-ui";
import TextHeaderModal from "@components/TextHeaderModal";
import OverlayBlur from "@components/OverlayBlur";
import OverlayDark from "@components/OverlayDark";
import OverlayDarkBlur from "@components/OverlayDarkBlur";
import useWindowVh from "@hooks/useWindowVh";
import useSwipeable from "@hooks/useSwipeable";
import { isBrowser } from "@utils/isBrowser";
import { useCardViewContext } from "@contexts/CardViewContext";
interface modalProps {
  open: boolean;
  header?: string;
  styles?: {};
  mode: "full" | "lg" | "gallery";
  closeIcon?: "dark" | "white";
  backdrop?: "dark" | "darkBlur" | "blur";
  onClose?: () => void;
  onSwipUp?: () => void;
  renderData?: (props?: any) => React.ReactNode;
}

const Modal: FC<modalProps> = ({
  open,
  onClose,
  onSwipUp,
  backdrop,
  closeIcon,
  header,
  styles,
  mode,
  renderData,
  children,
}) => {
  useWindowVh();
  const { selectedMode } = useCardViewContext();
  const handlers = useSwipeable({
    onSwipedDown: () => (selectedMode === "lg" ? handleClose() : {}),
    onSwipedUp: () => (selectedMode === "lg" && onSwipUp ? onSwipUp() : {}),
  });
  const modalRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const focusRef =
    React.createRef() as React.MutableRefObject<HTMLButtonElement>;
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(mounted ? open : false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setShow(open);
    if (mounted && open) {
      focusRef.current.focus();
      setTimeout(() => {
        document.documentElement.style.overflowY = "hidden";
      }, 0);
    } else document.documentElement.style.overflowY = "scroll";
  }, [open]);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (show && e.key == "Escape") handleClose();
      if (show && e.keyCode === 9 && modalRef && modalRef.current) {
        const modalFocusableElements = (
          Array.from(
            modalRef.current.querySelectorAll(
              'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
            )
          ) as Array<HTMLElement>
        ).filter(
          (el) =>
            !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden")
        );
        const first = modalFocusableElements[0];
        const last = modalFocusableElements[modalFocusableElements.length - 1];
        const shift = e.shiftKey;
        // if the document focused element not inside the modal so focus on first element in modal
        if (
          isBrowser
            ? modalFocusableElements.indexOf(
                document.activeElement as HTMLElement
              ) === -1
            : false
        ) {
          first.focus();
          e.preventDefault();
        } else if (shift && e.target === first) {
          // shift-tab pressed on first input in dialog
          last.focus();
          e.preventDefault();
        } else if (!shift && e.target === last) {
          // tab pressed on last input in dialog
          first.focus();
          e.preventDefault();
        }
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  });
  const handleClose = () => {
    if (!isBrowser) return;
    document.documentElement.style.overflowY = "scroll";
    onClose && onClose();
    setShow(false);
  };
  return (
    <React.Fragment>
      <OverlayDark
        show={(!backdrop || backdrop === "dark") && show}
        onClick={handleClose}
      />
      <OverlayBlur show={show && backdrop === "blur"} onClick={handleClose} />
      <OverlayDarkBlur
        show={show && backdrop === "darkBlur"}
        onClick={handleClose}
      />
      <Box
        role="dialog"
        aria-label="Modal"
        aria-modal="true"
        ref={modalRef as React.MutableRefObject<HTMLDivElement>}
        tabIndex={-1}
        sx={{
          ...{
            touchAction: "pan-y",
            position: "fixed",
            top: [
              `${
                show
                  ? mode === "lg"
                    ? contentRef &&
                      contentRef.current &&
                      contentRef.current.clientHeight >
                        (isBrowser ? window.innerHeight : 0) - 175
                      ? (isBrowser ? window.innerHeight : 0) -
                          contentRef.current.clientHeight >
                        0
                        ? (isBrowser ? window.innerHeight : 0) -
                          contentRef.current.clientHeight +
                          "px"
                        : "20px"
                      : "175px"
                    : "0"
                  : "100%"
              }`,
              `${
                show
                  ? mode === "lg"
                    ? contentRef &&
                      contentRef.current &&
                      contentRef.current.clientHeight >
                        (isBrowser ? window.innerHeight : 0) - 175
                      ? (isBrowser ? window.innerHeight : 0) -
                          contentRef.current.clientHeight >
                        0
                        ? (isBrowser ? window.innerHeight : 0) -
                          contentRef.current.clientHeight +
                          "px"
                        : "20px"
                      : "175px"
                    : "0"
                  : "100%"
              }`,
              `${mode === "gallery" ? "0" : "50%"}`,
            ],
            left: ["0", "0", `${mode === "gallery" ? "0" : "50%"}`],
            opacity: `${show ? "1" : "0"}`,
            width: "100vw",
            maxWidth: [
              "100%",
              "100%",
              `${mode === "full" || mode === "gallery" ? "100vw" : "700px"}`,
              `${mode === "full" || mode === "gallery" ? "100vw" : "944px"}`,
            ],
            height: [
              `${
                mode === "lg"
                  ? contentRef &&
                    contentRef.current &&
                    contentRef.current.clientHeight >
                      (isBrowser ? window.innerHeight : 0) - 175
                    ? contentRef.current.clientHeight + "px"
                    : "calc(var(--vh, 1vh) * 100 - 175px)"
                  : "calc(var(--vh, 1vh) * 100)"
              }`,
              `${
                mode === "lg"
                  ? contentRef &&
                    contentRef.current &&
                    contentRef.current.clientHeight >
                      (isBrowser ? window.innerHeight : 0) - 175
                    ? contentRef.current.clientHeight + "px"
                    : "calc(var(--vh, 1vh) * 100 - 175px)"
                  : "calc(var(--vh, 1vh) * 100)"
              }`,
              `${
                mode === "full" || mode === "gallery"
                  ? "calc(var(--vh, 1vh) * 100)"
                  : "599px"
              }`,
            ],
            maxHeight: "calc(var(--vh, 1vh) * 100)",
            overflowY: "scroll",
            overflowX: [
              "unset",
              "unset",
              `${mode === "gallery" ? "unset" : "scroll"}`,
            ],
            borderRadius: [
              `${mode === "lg" ? "10px 10px 0px 0px" : "0"}`,
              `${mode === "lg" ? "10px 10px 0px 0px" : "0"}`,
              `${mode === "gallery" ? "0" : "10px"}`,
            ],
            boxShadow: [
              "0 -12px 30px rgba(58, 58, 58, 0.2)",
              "0 -12px 30px rgba(58, 58, 58, 0.2)",
              "0px 4px 5px rgba(58, 58, 58, 0.08), 0px 12px 30px rgba(80, 80, 80, 0.13)",
            ],
            backgroundColor: mode === "gallery" ? "grey" : "white",
            outline: " none",
            border: "unset",
            padding: "0",
            zIndex: "14",
            transition: [
              "top 100ms cubic-bezier(0.17, 0.04, 0.03, 0.94)",
              "top 100ms cubic-bezier(0.17, 0.04, 0.03, 0.94)",
              "opacity 100ms cubic-bezier(0.17, 0.04, 0.03, 0.94)",
            ],
            pointerEvents: `${show ? "auto" : "none"}`,
            transform: [
              `${
                !show || mode === "gallery"
                  ? "translate3d(0,-100,0)"
                  : "translate3d(0,0,0)"
              }`,
              `${
                !show || mode === "gallery"
                  ? "translate3d(0,-100,0)"
                  : "translate3d(0,0,0)"
              }`,
              `${mode === "gallery" ? "unset" : "translate(-50%, -50%)"}`,
            ],
            willChange: [
              `${!show || mode === "gallery" ? "unset" : "transform, top"}`,
              `${!show || mode === "gallery" ? "unset" : "transform, top"}`,
              `${!show || mode === "gallery" ? "unset" : "transform, opacity"}`,
            ],
            userSelect: "none",
            overscrollBehavior: `${mode === "gallery" ? "auto" : "none"}`,
            msScrollChaining: "none",
            WebkitTapHighlightColor: "transparent",
            WebkitTouchCallout: "none",

            "&::-webkit-scrollbar": {
              width: ["0", "0", `${mode === "gallery" ? "0" : "auto"}`],
              backgroundColor: ["transparent", "transparent", "auto"],
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: ["transparent", "transparent", "auto"],
              outline: "unset",
            },
            "&.gatsby-image-wrapper img": {
              minHeight: [
                "unset",
                "unset",
                `${mode === "gallery" ? "50vh" : "unset"}`,
              ],
            },
          },
          ...styles,
        }}
      >
        <Box ref={contentRef as React.MutableRefObject<HTMLDivElement>}>
          <Box {...(selectedMode === "lg" && mode === "lg" ? handlers : null)}>
            {mode === "lg" && (
              <Flex
                sx={{
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "11px 0 24px",
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    height: "3px",
                    width: "50px",
                    background: "rgb(216, 216, 216)",
                    borderRadius: "0.3rem",
                    margin: "0 auto",
                  }}
                ></Box>
              </Flex>
            )}
            <Flex
              sx={{
                ...{
                  position: "relative",
                  height: `${header ? "80px" : "auto"}`,
                  padding: mode === "lg" ? "0 0 5px" : "24px 0 5px",
                },
                ...(mode === "gallery" && {
                  position: "fixed",
                  top: "0",
                  right: "0",
                  zIndex: "2",
                }),
              }}
            >
              <TextHeaderModal
                textHeaderModalData={{ title: header }}
                textHeaderModalTheme={{ titleStyle: {} }}
              />
              <Close
                show={show}
                ref={focusRef as React.MutableRefObject<HTMLButtonElement>}
                closeTheme={{}}
                closeConfig={{
                  onClick: handleClose,
                  closeIcon: closeIcon,
                  align: "right",
                }}
              />
            </Flex>
          </Box>
          {renderData && renderData()}
          <Box
            sx={{
              display: `${mode === "gallery" ? "flex" : "block"}`,
              flexDirection: `${mode === "gallery" ? "column" : "unset"}`,
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default Modal;
