import styled from 'styled-components'
import propToStyle from '../../utils/propToStyle'

interface IBox {
  display?: string | object;
  flexDirection?: string | object;
  justifyContent?: string | object;
  alignItems?: string | object;
  flex?: string | object;
  flexWrap?: string | object;
  backgroundColor?: string | object;
  padding?: string | object;
  margin?: string | object;
  width?: string | object;
}

export const Box = styled.div<IBox>`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('alignItems')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('padding')}
  ${propToStyle('margin')}
  ${propToStyle('width')}
`
