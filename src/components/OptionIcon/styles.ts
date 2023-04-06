import styled from 'styled-components';

export const Wrapper = styled.div<{ pressed?: boolean }>`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => (props.pressed ? '#ff8a8a;' : '#d9d9d9;')} > p {
        font-size: 35px;
        font-weight: bold;
        color: black;
        text-transform: uppercase;
    }
`;
