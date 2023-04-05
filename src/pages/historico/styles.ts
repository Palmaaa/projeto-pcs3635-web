import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 40px;
        font-weight: bold;
        margin-top: 50px;
        margin-bottom: 90px;
    }

    h2 {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    p {
        font-size: 20px;
        margin: 50px 0 200px 0;
    }

    a {
        text-decoration: underline;
        color: black;
        font-size: 20px;
        margin-top: 80px;
        margin-bottom: 50px;
    }

    table {
        max-width: 800px;
    }

    th,
    td {
        border: 1px solid black;
        padding: 10px;
        font-size: 20px;
        margin: 0;
    }
`;
