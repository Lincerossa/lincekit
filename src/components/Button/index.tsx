import React, { FC } from 'react'
import * as S from './styles'

import { ButtonProps } from './types'

const Button: FC<ButtonProps> = ({ label, onClick, active }) => {
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    onClick()
  }

  return (
    <S.Button onClick={buttonHandler} active={active}>
      {label}
    </S.Button>
  )
}

export default Button
