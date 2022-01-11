// eslint-disable-next-line no-use-before-define
import React from 'react'
import { StyleButton } from './styles'

interface IButton{
  onClick?: () => void,
  backgroundColor?: string,
  children?: React.ReactNode | undefined
}
export default function Button ({ onClick, children, backgroundColor }: IButton) {
  return (
    <StyleButton
      background={backgroundColor}
      onClick={onClick}
    >
      {children}
    </StyleButton>
  )
}
