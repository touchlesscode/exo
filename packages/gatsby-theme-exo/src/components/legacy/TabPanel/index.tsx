/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, {
  FC,
  useEffect,
  useRef,
  useState,
  cloneElement,
  Children,
  ReactElement,
  PropsWithChildren,
} from "react";

import { Text } from "theme-ui";

import useWindowSize from "@hooks/useWindowSize";
import DownArrow from "@assets/icons/arrow-down_v2.svg";
import UpArrow from "@assets/icons/arrow-up.svg";
import {
  TabHeadingWrapper,
  TabHeadingItem,
  Tab,
  TabDropdownWrapper,
  TabDropdownItem,
  TabDropdownContainer,
  ArrowIcon,
} from "./style";
import { TabPanelPropType, OptionType } from "./type";

const TabPanel: FC<TabPanelPropType> = ({
  options,
  columns = 6,
  children,
  theme,
}) => {
  const ref = useRef<HTMLElement>();
  const { type } = useWindowSize();
  const [tabOptions, setTabOptions] = useState<OptionType[] | null>(null);
  const [activeOptionId, setActiveOptionId] = useState<any>(null); // string | null
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (isDropdownOpen && ref.current && !ref?.current?.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    if (options) {
      const activeOptionIndex = options.findIndex((opt) => opt.active);
      const activeId =
        activeOptionIndex >= 0 ? options[activeOptionIndex].id : options[0].id;
      setActiveOptionId(activeId);
      setTabOptions(JSON.parse(JSON.stringify(options)));
    }
  }, [options]);

  const onTabClickHandler = (optId: string) => {
    if (!tabOptions) return;
    const updatedOptions = tabOptions.map((opt) => {
      return {
        ...opt,
        active: opt.id === optId,
      };
    });
    setTabOptions(updatedOptions);
    setActiveOptionId(optId);
  };

  const childrenWithProps = Children.map(children, (child, index) => {
    return cloneElement(child as ReactElement<PropsWithChildren<any>>, {
      id: activeOptionId,
      active: Number(activeOptionId) === index + 1,
    });
  });

  return (
    <React.Fragment>
      {type === "sm" ? (
        <TabDropdownContainer ref={ref}>
          <TabDropdownItem
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            style={{ borderRadius: isDropdownOpen ? "8px 8px 0px 0px" : "8px" }}
          >
            <div
              style={{
                color: "#2a2a52",
                border: 0,
                overflowWrap: "anywhere",
                // borderRadius: 8,
              }}
            >
              {activeOptionId
                ? options?.[activeOptionId - 1]?.heading
                : options?.[0]?.heading}
              <span
                style={{
                  position: "absolute",
                  lineHeight: "10px",
                  verticalAlign: "middle",
                  right: "15px",
                }}
              >
                {isDropdownOpen ? (
                  <ArrowIcon src={UpArrow} />
                ) : (
                  <ArrowIcon src={DownArrow} />
                )}
              </span>
            </div>
          </TabDropdownItem>
          {isDropdownOpen && (
            <TabDropdownWrapper role="list">
              {tabOptions &&
                tabOptions.map(
                  (option, index) =>
                    option?.id !== activeOptionId && (
                      <TabDropdownItem
                        type="button"
                        role="tab"
                        aria-label={option.heading}
                        key={`${option.id}-${index}`}
                        disabled={option.disabled}
                        onClick={() => {
                          onTabClickHandler(option.id);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {option?.heading}
                      </TabDropdownItem>
                    )
                )}
            </TabDropdownWrapper>
          )}
        </TabDropdownContainer>
      ) : (
        <div
          style={{
            padding: "0px 24px",
          }}
        >
          <TabHeadingWrapper
            role="tabpanel"
            screenType={type}
            sx={theme?.tabHeadingWrapper}
          >
            {tabOptions &&
              tabOptions.map((option, index) => {
                return (
                  <TabHeadingItem
                    key={`${option.id}-${index}`}
                    role="tab"
                    active={activeOptionId === option.id}
                    disabled={option.disabled}
                    columns={columns}
                    aria-label={option.heading}
                    {...(!option.disabled && {
                      onClick: () => onTabClickHandler(option.id),
                    })}
                    screenType={type}
                  >
                    <Text
                      sx={{
                        fontSize: "1rem",
                        lineHeight: "1.313rem",
                        fontWeight: "600",
                        fontFamily: "Poppins",
                        // color: option.disabled
                        //   ? "#ccc"
                        //   : activeOptionId === option.id
                        //   ? "#2A2A52"
                        //   : "#656565",
                        ...theme?.tabHeadingText,
                      }}
                    >
                      {option.heading}
                    </Text>
                  </TabHeadingItem>
                );
              })}
          </TabHeadingWrapper>
        </div>
      )}
      {childrenWithProps}
    </React.Fragment>
  );
};

export { Tab };
export default TabPanel;