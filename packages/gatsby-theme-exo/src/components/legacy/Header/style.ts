import styled from "styled-components";
import logo from '@assets/icons/logo.inline.svg'
import LogoWord from '@assets/icons/logo-word.inline.svg'
import chevronIcon from '@assets/icons/chevron.inline.svg'
import Account from '@assets/icons/account-icon.inline.svg'
import CloseIcon from '@assets/icons/close.inline.svg'


export const StyledLogo = styled(logo)`
  flex-shrink: 1;
  width: 100%;
  max-width: 140px;
  height: 100%;
  @media only screen and (min-width: 80rem) {
    max-width: 119px;
    height: 28px;
  }
`
export const StyledWordLogo = styled(LogoWord)`

`
export const AccountIcon = styled(Account)`
  fill: 'white';
  @media only screen and (min-width: 80rem) {
    fill: #222;
    height: 26px;
    width: 26px;
  }
`
export const Chevron = styled(chevronIcon)`
  width: ${(props) => props.width || '10px'};
  transition: transform 100ms;
  transform: ${(props) => !props.$vertical ? (props.open ? 'rotate(180deg)' : 'none') : props.open ? '' : 'rotate(-90deg)'};
`
export const Close = styled(CloseIcon)`
  width: 24px;
  height: 24px;
`
export const StyledHumberger = styled.div`
  width: 20px;
  height: 100%;
  display: grid;
  place-content: center;
`
