import styled from 'styled-components';

interface props {
  noPad?: boolean;
}

export const MainWrapper = styled.div<props>`
  display: block;
  padding: ${ p => p.noPad ? 'none' : '8px 0px'};
  width: 100%;
  box-sizing: border-box;
  text-align: left;
`

export const ScrollWrapper = styled.div<{ height: number | null, backgroundColor?: string }>`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: ${p => p.height ? `${p.height}px` : '100%'};
    background-color: ${p => p.backgroundColor ?? 'transparent'};
    overflow: hidden;
    box-sizing: border-box;
`

export const Scroller = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    padding: 8px;
    overflow-x: hidden;
    overflow-y: scroll;
    background: transparent;
    box-sizing: border-box;
`