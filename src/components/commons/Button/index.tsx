// eslint-disable-next-line no-use-before-define
import React, { MouseEventHandler } from 'react'
import { StyleButton } from './styles'

interface IButton{
  onClick?: MouseEventHandler<HTMLButtonElement>,
  backgroundColor?: string,
  children?: React.ReactNode | undefined
  color?: string,
  type?: 'button' | 'submit' | 'reset'
}
export default function Button ({
  onClick, children, backgroundColor, ...props
}: IButton) {
  return (
    <StyleButton
      background={backgroundColor}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyleButton>
  )
}
