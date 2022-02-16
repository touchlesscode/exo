import React, { FC, useEffect, useState, useRef, useContext } from "react";
import { Link } from "gatsby";
import { Text } from "theme-ui";

import SearchClose from "@assets/icons/search-close.svg";

import {
  AutocompleteWrapper,
  StyledInput,
  StyledSuggestionBox,
  StyledList,
  StyledListItem,
  CloseWrapper,
  StyledTrendingText,
} from "./style";
import ImageContainer from "@components/ImageContainer";
import useOnClickOutside from "@hooks/useOnClickOutside";
import useKeyPress from "@hooks/useKeyPress";
import useAutocomplete from "@hooks/useAutocomplete";
import useDropBgOverlay from "@hooks/useDropBgOverlay";
import useFocusTrap from "@hooks/useTrapFocusInside";
import useUpdateEffect from "@hooks/useUpdateEffect";

interface AutocompletePropType {
  placeholder: string;
}

const AutocompleteSearch: FC<AutocompletePropType> = ({ placeholder }) => {
  const [open, setOpen] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState<number>(-1);
  const escPressed = useKeyPress(["Esc", 'Escape'])
  const shiftPressed = useKeyPress(["Shift"]);
  const tabPressed = useKeyPress(["Tab"])

  const wrapperRef = useRef<HTMLDivElement>(null);
  const resultsRef = useFocusTrap(open, false)
  const { autocomplete, results, message, trending } = useAutocomplete()

  const closeSuggestions = () => {
    setOpen(false)
    setHighlightIndex(-1);
  };

  useEffect(() => {
    closeSuggestions();
  }, [escPressed]);

  useEffect(() => {
      (() => {
          if (!wrapperRef.current) return;
          const children = Array.from<HTMLElement>(wrapperRef.current.querySelectorAll('a, input, select, textarea, button, object, [tabindex]'));
          if(!children.includes(document.activeElement as HTMLElement)){
              closeSuggestions();
          }
      })()
  }, [shiftPressed])

  useOnClickOutside(wrapperRef, () => {
    if (!wrapperRef.current) return;
    closeSuggestions();
  })

  useDropBgOverlay(wrapperRef, open)
  useUpdateEffect(() => {
    results && setOpen(true)
  }, [results])

  return (
    <AutocompleteWrapper ref={wrapperRef}>
      <StyledInput
        name="search"
        placeholder={placeholder}
        onChange={autocomplete}
        onFocus={autocomplete}
        showSuggestions={false}
        autoComplete="off"
      />
      {open ? (
        <React.Fragment>
          {results ? (
            <StyledSuggestionBox className='search' ref={resultsRef}>
              {trending ? <StyledTrendingText>Trending Now</StyledTrendingText> : null}
              <StyledList>
                {!message ? (
                  results.map(({ id, item, to }, index) => (
                    <StyledListItem
                      key={id}
                      highlight={highlightIndex === index}
                    >
                      <Link
                        to={to}
                        dangerouslySetInnerHTML={{
                          __html: item,
                        }}
                        style={{ width: '100%' }}
                      />
                    </StyledListItem>
                  ))) : (
                  <Text
                    sx={{
                      px: 5,
                      fontFamily: 'Poppins'
                    }}
                  >
                    {message}
                  </Text>
                )}
              </StyledList>
            </StyledSuggestionBox>
          ) : null}
          <CloseWrapper onClick={closeSuggestions}>
            <ImageContainer source={SearchClose} alt="" />
          </CloseWrapper>
        </React.Fragment>
      ) : null}
    </AutocompleteWrapper>
  );
};

export default AutocompleteSearch;
