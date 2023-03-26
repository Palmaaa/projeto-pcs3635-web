import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 30px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 1300px;
`;

export const Side = styled.div`
    p {
        font-size: 32px;
        font-weight: bold;
        margin-top: 30px;
    }
`;
