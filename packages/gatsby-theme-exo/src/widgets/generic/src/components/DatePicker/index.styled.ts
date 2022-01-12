import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    padding-top: 10px;
    width: 340px;

    .react-datepicker-wrapper {
        width: 100%;
    }

    .react-datepicker {
        box-shadow: 3px 2px 11px rgb(0 0 0 / 30%);
        width: 100%;
    }
    .react-datepicker__input-container input {
        width: 100%;
        height: 40px;
        vertical-align: middle;
        padding: 0 40px 0 16px;
        border-radius: 6px;
        border-width: 1px;
        border-style: solid;
        border-color: ${ p => p.theme.colors.backgrounds.spacer };
        font-size: ${ p => p.theme.fontSize.regular};
        box-sizing: border-box;
        ::placeholder {
            font-size: ${ p => p.theme.fontSize.regular};
        }

        &:focus {
            outline: none;
            border-color: ${ p => p.theme.colors.primary.default };
        }
    }

    & svg {
        position: absolute;
        top: 38px;
        width: 16px;
        height: 16px;
        right: 12px;
    }

    .react-datepicker__triangle {
        display: none;
    }

    .react-datepicker-popper {
        transform: translate3d(0px, 54px, 0px) !important;
        &[data-placement^="bottom"] {
            padding: 0;
            width: 345px;
        }
        &[data-placement^="top"] {
            padding: 0;
            width: 345px;
        }
    }

    .react-datepicker {
        box-shadow: 0px 4px 8px rgba(128, 128, 128, 0.2);
        border: 1px solid ${ p => p.theme.colors.backgrounds.spacer};
    }

    .react-datepicker__header {
        background-color: #fff;
        border-bottom: none;
        font-size: ${ p => p.theme.fontSize.small};
        font-weight: ${ p => p.theme.fontWeight.medium};
        line-height: 16px;
    }

    .react-datepicker__navigation-icon {
        &:before{
            border-color: ${ p => p.theme.colors.text.default};
        }
    }

    .react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
        right: 102px;
    }

    .react-datepicker__month-container {
        padding: 5px;
        border-right: 1px solid ${ p => p.theme.colors.shadow.default };
    }

    .react-datepicker__day-names {
        padding-top: 8px;
    }

    .react-datepicker__time-list-item {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-datepicker__time-container {
        width: 92px;
    }

    .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
        background-color: ${ p => p.theme.colors.primary.default };

        &:hover {
            background-color: ${ p => p.theme.colors.primary.active };
        }
    }

    .react-datepicker__week {
        font-size: 15px;
    }

    .react-datepicker__day--outside-month {
        color: ${ p => p.theme.colors.text.l3};
    }

    .react-datepicker__day--selected, .react-datepicker__day--keyboard-selected {
        background-color: ${p => p.theme.colors.primary.default};
        border-radius: 50%;

        &:hover {
            background-color: ${p => p.theme.colors.primary.active};
            border-radius: 50%;
        }
    }

    .react-datepicker__day {
        border-radius: 50%;
        user-select: none;

        &:hover {
            border-radius: 50%;
        }
    }

    .react-datepicker__time-container {
        border: none;
    }
`;
