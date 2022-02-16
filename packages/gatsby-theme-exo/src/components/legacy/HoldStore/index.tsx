/** @jsxRuntime classic */
/** @jsx jsx */
import { Text, Field, Flex, jsx, Label, ThemeUIStyleObject } from "theme-ui";
import React, {
  FC,
  useMemo,
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
} from "react";
import { Box, Select } from "theme-ui";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import styled from "@emotion/styled";
import ButtonVDP from "@components/ButtonVDP";
import GoBack from "../GoBack";
import { DatePicker, DatePickerInput } from "carbon-components-react";
import { useCardViewContext } from "@contexts/CardViewContext";
import { storeData } from "@constants/index";

dayjs.extend(dayOfYear);

type ReserveStatus = "Creating" | "Confirming";

type holdStoreThemeType = {
  holdStoreWrapper?: {};
};
interface Props {
  holdStoreTheme?: holdStoreThemeType;
}

interface TimeItem {
  label: string;
  value: number;
}

const RadioInput = styled.input`
  width: 14px;
  height: 14px;
  margin-right: 6px;
  margin-left: 18px;
  &:focus {
    border: unset;
    border-radius: 50% !important;
    box-shadow: 0 0 0 1px #151f2a, 0 0 0 3px #ffffff, 0 0 0 5px #eca400 !important;
  }
  @media screen and (min-width: 767.98px) and (max-width: 950px) {
    margin-left: auto;
  }
`;

const HoldStore: FC<Props> = ({ holdStoreTheme }) => {
  const containerEl = useRef();
  const { holdStoreWrapper } = holdStoreTheme as holdStoreThemeType;
  const {
    activeView,
    previousView,
    setPreviousView,
    selectedMode,
    setActiveView,
    setSelectedMode,
  } = useCardViewContext();
  const [showCalendar, setShowCalendar] = useState(false);
  const [checked, setChecked] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [types, setTypes] = useState("text");
  const [contactValue, setContactValue] = useState("");
  const [name, setName] = useState("");
  const [reserveStatus, setReserveStatus] = useState<ReserveStatus>("Creating");
  const [reservedDate, setReservedDate] = useState<string>("");
  const [reservedTime, setReservedTime] = useState<number | undefined>();

  const minDate = React.useMemo(() => {
    let date = dayjs();
    if (date.hour() >= storeData.endTime - storeData.nextReservedTimeDistance) {
      date = date.add(1, "day");
    }
    console.info("minDate", date);
    return date.format(storeData.dateFormat);
  }, []);
  const maxDate = dayjs().add(7, "day").format(storeData.dateFormat);

  const minTime = useMemo(() => {
    if (reservedDate === minDate) {
      const now = dayjs();
      let hour = now.hour();
      const minute = now.minute();
      // calculated next reserved start time
      if (minute === 0) {
        hour += storeData.nextReservedTimeDistance;
      } else if (minute <= 30) {
        hour += storeData.nextReservedTimeDistance + 0.5;
      } else {
        hour += storeData.nextReservedTimeDistance + 1;
      }

      // calculate when time is over 24 hours
      if (hour > 24) {
        hour -= 24;
      }

      // calculate when time is less than limit start time
      if (hour < storeData.startTime) {
        return storeData.startTime;
      }
      return hour;
    } else {
      return storeData.startTime;
    }
  }, [reservedDate, minDate]);

  const timeOptions = React.useMemo(() => {
    const options: Array<TimeItem> = [];
    for (
      let timeHour = minTime;
      timeHour <= storeData.endTime;
      timeHour += storeData.timeDistance
    ) {
      const hour = Math.floor(timeHour);
      const minute = timeHour > hour ? 30 : 0;
      options.push({
        label: `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`,
        value: timeHour,
      });
    }
    return options;
  }, [minTime]);

  const onFieldNameChangeHandle = React.useCallback((e) => {
    setName(e.target.value);
  }, []);

  const onFieldContactValueChangeHandle = React.useCallback((e) => {
    setContactValue(e.target.value);
  }, []);

  const onButtonReserveAppointmentClickHandle = React.useCallback(() => {
    if (reservedTime === undefined) {
      console.error("ReservedTime must be selected");
      return;
    }
    setReserveStatus("Confirming");

    const reservedDateTime = dayjs(reservedDate).add(reservedTime, "hour");
    console.info("reservedDateTime", reservedDateTime);
    console.info("name", name);
    console.info("contactType", types);
    console.info("contactValue", contactValue);
  }, [reservedDate, reservedTime, name, types, contactValue]);

  const handleChangeReservedDate = React.useCallback((e) => {
    setReservedDate(dayjs(e[0]).format(storeData.dateFormat));
  }, []);

  const handleChangeReservedTime = React.useCallback((e) => {
    setReservedTime(e.target.value);
  }, []);

  const onButtonConfirmClickHandle = React.useCallback(() => {
    setPreviousView({
      ...previousView,
      home: {
        prev: activeView,
        selectedMode: selectedMode,
      },
    });
    setActiveView("home");
    setSelectedMode("lg");
  }, []);

  useLayoutEffect(() => {
    if (containerEl.current) {
      setShowCalendar(true);
    }
  });

  useEffect(() => {
    if (reservedDate === "") {
      setReservedDate(minDate);
    }
    if (reservedTime === undefined) {
      setReservedTime(minTime);
    }
  }, [minDate, minTime]);

  return (
    <Box sx={holdStoreWrapper}>
      <GoBack text="Go back" title="Reserve Appointment" />
      {reserveStatus === "Creating" && (
        <Flex sx={theme.sectionWrapper as ThemeUIStyleObject}>
          <Box sx={theme.formFields as ThemeUIStyleObject}>
            <Label
              htmlFor="reserveDate"
              sx={theme.formLabel as ThemeUIStyleObject}
            >
              <Text sx={theme.label as ThemeUIStyleObject}>Date and Time</Text>
              <Box
                sx={theme.datepickerInput as ThemeUIStyleObject}
                ref={containerEl}
              >
                <Flex>
                  {showCalendar && (
                    <Box sx={{ flex: "auto" }}>
                      <DatePicker
                        light
                        appendTo={containerEl.current}
                        dateFormat="Y-m-d"
                        datePickerType="single"
                        minDate={minDate}
                        maxDate={maxDate}
                        onChange={handleChangeReservedDate}
                      >
                        <DatePickerInput
                          value={reservedDate}
                          labelText=""
                          autoComplete="off"
                          placeholder="YYYY-MM-DD"
                          id="date-picker-single"
                        />
                      </DatePicker>
                    </Box>
                  )}
                  <Box sx={{ flex: "3" }}>
                    <Select
                      value={reservedTime}
                      onChange={handleChangeReservedTime}
                      sx={theme.selectTimePicker}
                    >
                      {timeOptions.map((timeItem) => (
                        <option key={timeItem.value} value={timeItem.value}>
                          {timeItem.label}
                        </option>
                      ))}
                    </Select>
                  </Box>
                </Flex>
              </Box>
            </Label>
            <Label
              htmlFor="full_name"
              sx={theme.formLabel as ThemeUIStyleObject}
            >
              Your Full Name
              <Field
                label=""
                type="text"
                id="full_name"
                name="full_name"
                placeholder="Chris Jones"
                sx={theme.field as ThemeUIStyleObject}
                onChange={onFieldNameChangeHandle}
              />
            </Label>
            <Label htmlFor="method1" sx={theme.formLabel as ThemeUIStyleObject}>
              Preferred Method
              <Label sx={theme.toggleRadioLabel as ThemeUIStyleObject}>
                <Label
                  className={`radio-label ${checked ? "checked" : ""} ${
                    clicked ? " clicked" : ""
                  }`}
                  sx={theme.radioLabel as ThemeUIStyleObject}
                  htmlFor="method1"
                >
                  <RadioInput
                    type="radio"
                    name="method1"
                    id="method1"
                    checked={checked}
                    onChange={() => {
                      setChecked(!checked);
                      setTypes("text");
                    }}
                    onClick={() => setClicked(true)}
                    onBlur={() => setClicked(false)}
                  />

                  <Text sx={theme.radioText as ThemeUIStyleObject}>Mobile</Text>
                </Label>
                <Label
                  className={`radio-label ${checked ? "" : "checked"} ${
                    clicked ? " clicked" : ""
                  }`}
                  htmlFor="method2"
                  sx={theme.radioLabel as ThemeUIStyleObject}
                >
                  <RadioInput
                    type="radio"
                    name="method2"
                    id="method2"
                    checked={!checked}
                    onChange={() => {
                      setChecked(!checked);
                      setTypes("email");
                    }}
                    onClick={() => setClicked(true)}
                    onBlur={() => setClicked(false)}
                  />

                  <Text sx={theme.radioText as ThemeUIStyleObject}>Email</Text>
                </Label>
              </Label>
            </Label>
            {types === "text" ? (
              <Label htmlFor="phone" sx={theme.formLabel as ThemeUIStyleObject}>
                Mobile Number
                <Field
                  label=""
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="419-555-1212"
                  sx={theme.field as ThemeUIStyleObject}
                  onChange={onFieldContactValueChangeHandle}
                />
              </Label>
            ) : (
              <Label htmlFor="email" sx={theme.formLabel as ThemeUIStyleObject}>
                Email Address
                <Field
                  label=""
                  type="text"
                  id="email"
                  name="email"
                  placeholder="chris@jones.com"
                  sx={theme.field as ThemeUIStyleObject}
                  onChange={onFieldContactValueChangeHandle}
                />
              </Label>
            )}
            <ButtonVDP
              ButtonVDPConfig={{
                onClick: onButtonReserveAppointmentClickHandle,
                type: "primary",
                arrowIcon: false,
                attr: {
                  type: "submit",
                  disabled: false,
                },
              }}
              ButtonVDPData={{ buttonText: "Reserve Now" }}
              ButtonVDPTheme={{
                buttonStyle: {
                  borderRadius: "8px",
                },
                arrowStyle: {},
              }}
            />
          </Box>
        </Flex>
      )}
      {reserveStatus === "Confirming" && (
        <Flex sx={theme.sectionWrapper as ThemeUIStyleObject}>
          <Box sx={theme.formFields as ThemeUIStyleObject}>
            <Label htmlFor="optText" sx={theme.formLabel as ThemeUIStyleObject}>
              <Field
                label="One Time Code"
                type="text"
                id="optText"
                name="optText"
                placeholder="15263"
                sx={theme.field as ThemeUIStyleObject}
                // onChange={onFieldNameChangeHandle}
              />
            </Label>
            <ButtonVDP
              ButtonVDPConfig={{
                onClick: onButtonConfirmClickHandle,
                type: "primary",
                arrowIcon: false,
                attr: {
                  type: "submit",
                  disabled: true,
                },
              }}
              ButtonVDPData={{ buttonText: "Confirm & Create Account" }}
              ButtonVDPTheme={{
                buttonStyle: {
                  borderRadius: "8px",
                },
                arrowStyle: {},
              }}
            />
          </Box>
        </Flex>
      )}
      <Box sx={theme.boxPadding} />
    </Box>
  );
};

const theme = {
  sectionWrapper: {
    display: "flex",
    flexDirection: " column",
    width: "100%",
    background: "#f2f2f2",
    borderRadius: "8px",
    padding: "16px",
    marginTop: "24px",
    "@media screen and (max-width: 768px)": {
      maxWidth: "100%",
    },
  },
  rowContent: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "-0.02em",
    color: "#4f4f4f",
    paddingLeft: "28px",
    paddingRight: "28px",
    "&.form-Content": {
      paddingRight: "8px",
    },
  },
  formLabel: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "115%",
    letterSpacing: "0.01em",
    color: "#2d2d2d",
  },
  label: {
    marginBottom: "8px",
  },
  formFields: { display: "flex", flexDirection: "column" },
  field: {
    width: "100%",
    height: " 40px",
    background: "#ffffff !important",
    backgroundColor: "#ffffff !important",
    border: "1px solid #e6e6e6",
    boxSizing: "border-box",
    borderRadius: "8px",
    padding: "10px 36px 10px 16px !important",
    margin: "5px 0 24px !important",
    outline: "none",
    boxShadow: "unset",
    "&:hover": {
      border: "1px solid #e6e6e6",
      boxShadow: "unset !important",
    },
    "&:focus": {
      outline: " none",
      borderRadius: "2px",
      boxShadow:
        "0 0 0 1px #151f2a, 0 0 0 3px #ffffff, 0 0 0 5px #eca400 !important; !important",
    },
  },
  toggleRadioLabel: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: " 115%",
    letterSpacing: "0.01em",
    color: "#2d2d2d",
    margin: "5px 0 24px",
  },
  radioText: {
    marginRight: "auto",
  },
  radioLabel: {
    maxWidth: "145px",
    width: "48%",
    height: "36px",
    display: "flex",
    flexDirection: "row",
    background: "#ffffff",
    border: "1px solid #e6e6e6",
    borderRadius: "8px",
    justifyContent: "center",
    padding: "9px 0",
    cursor: "pointer",
    "&.checked": {
      background:
        "linear-gradient( 0deg, rgba(58, 95, 150, 0.15), rgba(58, 95, 150, 0.15)  ), #ffffff",
      border: "1px solid #3a5f96",
      color: "#3a5f96",
      "&.clicked": {
        border: "unset",
        borderRadius: "2px",
        boxShadow: "0 0 0 2px #eca400 !important",
      },
    },
  },
  radioInput: {
    width: "14px",
    height: "14px",
    marginRight: "6px",
    marginLeft: "18px",
    "&:focus": {
      border: "unset",
      borderRadius: "50% !important",
      boxShadow: "0 0 0 2px #eca400 !important",
      outline: "unset",
    },
  },
  datepickerInput: {
    marginBottom: "8px",
    background: "white",
    borderRadius: "10px",
    border: "1px solid #e6e6e6",
    padding: "4px 16px",
    position: "relative",
    "input, input:hover": {
      border: "none !important",
      cursor: "pointer",
      padding: "0px !important",
    },
    "span, span:hover": {
      border: "none !important",
      padding: "0px !important",
      marginBottom: "0px !important",
    },
  },
  selectTimePicker: {
    border: "none",
  },
  boxPadding: {
    paddingBottom: "50px",
  },
};

export default HoldStore;
