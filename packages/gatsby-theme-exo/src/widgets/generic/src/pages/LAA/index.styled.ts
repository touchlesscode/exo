import styled from 'styled-components';

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px 0 16px;
`

export const Title = styled.div`
    font-size: ${p => p.theme.fontSize.xsmall};
    font-weight: ${p => p.theme.fontWeight.medium};
    color: ${p => p.theme.colors.text.l2};
    line-height: 16px;
    text-align: center;
`

export const Name = styled.div`
    font-size: ${p => p.theme.fontSize.medium};
    font-weight: ${p => p.theme.fontWeight.bold};
    color: ${p => p.theme.colors.text.default};
    line-height: 24px;
    text-align: center;
`

export const LogActivityWrapper = styled.div`
    display: block;
    padding: 8px 0px;
    width: 100%;
    box-sizing: border-box;

    .stfloCallFormWidget__Form--logActivity {        
        .FormRow {
            margin: 0;

            .FormItem {
                .textarea {
                    border: 1px solid ${p => p.theme.colors.backgrounds.spacer};
                    border-radius: 6px;
                    font-family: 'BrandonText';
                    padding: 8px 16px;
                    box-sizing: border-box;
                    color: ${p => p.theme.colors.text.default};
                    font-weight: ${p => p.theme.fontWeight.regular};
                    font-size: ${p => p.theme.fontSize.regular};
                    margin: 0;

                    &::placeholder {
                        color: ${p => p.theme.colors.text.l2};
                    }
                }
    
                label {
                    margin-bottom: 4px;
                    text-transform: none;
                    color: ${p => p.theme.colors.text.default};
                    font-weight: ${p => p.theme.fontWeight.medium};
                    font-size: ${p => p.theme.fontSize.small};
                    letter-spacing: 0.12px;
                }
    
                .FormItem__SelectWrapper {
                    border: 1px solid ${p => p.theme.colors.backgrounds.spacer};
                    border-radius: 6px;
                    box-sizing: border-box;
                    padding: 0 16px;
    
                    .FormItem__select {
                        border-bottom: 0;
                        font-size: ${p => p.theme.fontSize.regular};
                        color: ${p => p.theme.colors.text.default};
                        margin: 0;

                        &:focus {
                            background-color: transparent;
                        }
                    }

                    svg {
                        fill: ${p => p.theme.colors.text.l2}
                    }
                }

                .FormItem__Options {
                    .FormItem__Option__Wrapper {
                        text-align: left;
                        margin-bottom: 4px;

                        .FormItem__Option--radioBtn {
                            font-size: ${p => p.theme.fontSize.small};
                        }
                    }
                }

                input {
                    border: 1px solid ${p => p.theme.colors.backgrounds.spacer};
                    border-radius: 6px;
                    font-family: 'BrandonText';
                    padding: 8px 16px;
                    font-size: ${p => p.theme.fontSize.regular};
                    color: ${p => p.theme.colors.text.default};
                    box-sizing: border-box;

                    &:focus {
                        background-color: transparent;
                    }

                    &::placeholder {
                        color: ${p => p.theme.colors.text.l2};
                    }
                }

                .rdt input {
                    padding: 0px 16px;
                }
            }
        }

        .FormFooter {
            padding-right: 16px;
            padding-bottom: 16px;
            box-sizing: border-box;

            .stfloCallWidget__button {
                flex: 1;
                font-family: 'BrandonText';
                font-size: ${p => p.theme.fontSize.small};
                font-weight: ${p => p.theme.fontWeight.medium};
                text-transform: none;
                background-color: ${p => p.theme.colors.primary.default};
                border: 0;
                border-radius: 6px;
            }

            .stfloCallWidget__button--cancel {
                background-color: transparent;
                border: 0;
                font-family: 'BrandonText';
                font-size: 14px;
                font-weight: 500;
                color: #4b64d7;
                padding: 8px 20px;
                cursor: pointer;
            }
        }
    }
`