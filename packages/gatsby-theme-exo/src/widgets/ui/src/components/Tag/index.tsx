import styled from 'styled-components';

type Colors = 'warning' | 'success';

interface TagProps {
    color?: Colors;
    label: string;
}

const Span = styled.span<{ color: Colors }>`
    display: inline-block;
    font-size: ${p => p.theme.fontSize.xsmall};
    font-weight: ${p => p.theme.fontWeight.medium};
    line-height: ${p => p.theme.fontSize.regular};
    color: ${p => p.color === 'warning' ? p.theme.colors.text.warning : p.theme.colors.text.success};
    background-color: ${p => p.color === 'warning' ? p.theme.colors.warning.l2 : p.theme.colors.success.l2};
    padding: 0 4px;
    border-radius: 4px;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
    user-select: none;
`

const Tag = ({ color = 'success', label }: TagProps) => {
    return (
        <Span color={color}>{label}</Span>
    );
}

export default Tag;