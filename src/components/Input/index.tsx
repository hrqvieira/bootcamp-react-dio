import React from 'react'
import {IconContainer, InputText, InputContainer, ErrorText} from './styles'
import { Controller } from "react-hook-form";
import { useState } from 'react'
import { IInput } from './types';

const Input = ({leftIcon, name, control, errorMessage, ...rest}: IInput) => {

  return (
    <>
    <InputContainer>
    {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
    <Controller 
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field }) =><InputText{...field} {...rest}/>}
      defaultValue= ""
      />
    </InputContainer>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null} 
    </>
  )
}

export { Input }      