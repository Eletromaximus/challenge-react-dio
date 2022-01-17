// eslint-disable-next-line no-use-before-define
import React from 'react'
import { StyleButton } from './styles'

interface IButton{
  onClick?: () => void,
  backgroundColor?: string,
  children?: React.ReactNode | undefined
  color?: string
}
export default function Button ({
  onClick, children, backgroundColor, color
}: IButton) {
  return (
    <StyleButton
      background={backgroundColor}
      onClick={onClick}
      color={color}
    >
      {children}
    </StyleButton>
  )
}
