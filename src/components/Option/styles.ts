import styled from 'styled-components';

interface MenuProps {
    menu?: boolean;
}

export const Wrapper = styled.div<MenuProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 0;

    ${({ menu }) =>
        menu &&
        `
        margin: 0 30px;
        flex-direction: column;
    `}
`;

export const Label = styled.span<MenuProps>`
    font-size: 24px;
    font-weight: bold;
    margin-left: 15px;

    ${({ menu }) =>
        menu &&
        `
        text-transform: uppercase;
        margin-top: 17px;
        margin-left: 0;
    `}
`;
