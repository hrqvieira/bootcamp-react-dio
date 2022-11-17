import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #fff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    transition: 0.3s;

    &:hover{
        background-color:#E4105D ;
        color: #000;
    }

${({variant})=> variant === "secondary" && css`
    min-width: 167px;
    height: 33px;
    
    background: #E4105D;
    
    &:hover{
        opacity: 0.6;;
        cursor: pointer;
    }

    &::after {
        content: '';
        position: absolute;
        border: 1px solid #E4105D;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;

    }

    `}
`