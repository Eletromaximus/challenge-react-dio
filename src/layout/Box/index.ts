import styled from 'styled-components'
import propToStyle from '../../utils/propToStyle'

interface IBox {
  position?: string | object;
  display?: string | object;
  flexDirection?: string | object;
  justifyContent?: string | object;
  alignItems?: string | object;
  flex?: number | string | object;
  flexWrap?: string | object;
  backgroundColor?: string | object;
  padding?: string | object;
  margin?: string | object;
  minMargin?: string | object;
  width?: string | object;
  height?: string | object;
  border?: string | object;
  color?: string | object;
  maxWidth?: number | string | object;
}

export const Box = styled.div<IBox>`
  ${propToStyle('position')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('alignItems')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('padding')}
  ${propToStyle('margin')}
  ${propToStyle('minMargin')}
  ${propToStyle('width')}
  ${propToStyle('height')}
  ${propToStyle('border')}
  ${propToStyle('color')}
  ${propToStyle('maxWidth')}
`
