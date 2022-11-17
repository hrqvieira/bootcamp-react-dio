import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3b3450;

    display: flex;
    align-items: center;
    margin-bottom: 20px;

    textarea:focus, input:focus, -webkit-autofill, select:focus {
    outline: 0;
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
}
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #FFFF;
    width: 100%;
    border: 0;
    height: 30px;
`

export const ErrorText = styled.p `
  color: #FF0000;
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 10px;
`