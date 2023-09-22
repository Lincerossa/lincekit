import React, { FC } from 'react'
import * as S from './styles'

import { ButtonProps } from './types'

const Button: FC<ButtonProps> = ({ label, onClick, category, active }) => {
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    onClick()
  }

  return (
    <S.Button onClick={buttonHandler} active={active} category={category}>
      {label}
    </S.Button>
  )
}

export default Button
