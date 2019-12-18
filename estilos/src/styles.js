import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    heigth: 500px;
`;

export const Head = styled.header`
    display: flex;
    width: 100%;
    height: 70px;
    background-color: brown;
    justify-content: center;
    align-items: center;

    // a {
    //     font-size: 35px;
    //     color: white;
    // }
`;

export const Title = styled.a`
    font-size: 35px;
    color: white;
`;

export const BemVindo = styled.h1`
    font-size: ${props => `${props.size}px`};
    color: ${props => `#${props.color}`};
`;