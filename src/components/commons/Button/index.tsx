// eslint-disable-next-line no-use-before-define
import React from 'react'
import { StyleButton } from './styles'

interface IButton{
  onClick?: () => void,
  children: React.ReactNode | any
}
export default function Button ({ onClick, children }: IButton) {
  return (
    <StyleButton
      onClick={() => onClick}
    >
      {children}
    </StyleButton>
  )
}
