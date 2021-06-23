import styled from "styled-components";

export const InOutContainer = styled.div`
    width: 85%;
    height: 14.5vh;
    margin: 13px auto 0 auto;
    display: flex;
    justify-content: space-between;
    div{
        height: 100%;
        background-color: #A328D6;
        width: 45%;
        border-radius: 5px;
        padding: 4px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        p{
            font-size: 17px;
            font-weight: bold;
            color: #fff;
        }
        :hover{
            cursor: pointer;
        }
    }

`

export const Statement = styled.div`
    width: 85%;
    height: 66vh;
    margin: 22px auto 0 auto;
    border-radius: 5px;
    background-color: #fff;

`
export const EmptyStatement = styled.div`
    width: 85%;
    height: 66vh;
    margin: 22px auto 0 auto;
    border-radius: 5px;
    background-color: #fff;
    text-align: center;
    font-size: 20px;
    color: #868686;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const NameDiv = styled.div`
    width: fit-content;
    font-size: 26px;
    font-weight: bold;
    color: #fff;
`;

export const Container = styled.div`
    width:85%;
    margin: 30px auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .exitIcon:hover{
        cursor: pointer;
    }
`