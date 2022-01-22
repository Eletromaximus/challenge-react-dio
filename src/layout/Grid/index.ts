import styled, { css } from 'styled-components'
import breakpointsMedia from '../../utils/breakpointsMedia'
import propToStyle from '../../utils/propToStyle'

interface IValue {
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  xl?: number
}
interface IGrid {
  display?: string | object,
  flexWrap?: string | object,
  alignItems?: string | object,
  justifyContent?: string | object,
  flexDirection?: string | object,
  padding?: string | object,
  margin?: string | object,
  flex?: number | object,
  minWidth?: string | object,
  value: string | number | IValue
}

export const Grid = styled.div<IGrid>`
  padding-right: 16px;
  padding-left: 16px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  ${({ value }) => {
    if (typeof value === 'number') {
      return css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value) / 12}%;
        max-width: ${(100 * value) / 12}%;
      `
    }

    if (typeof value === 'string') {
      return css`
        width: auto;
      `
    }

    return breakpointsMedia({
      ...(value?.xs && {
        xs: css`
          flex-grow: 0;
          flex-shrink: 0;
          flex-basis: ${(100 * value.xs) / 12}%;
          max-width: ${(100 * value.xs) / 12}%;
        `
      }),
      ...(value?.sm && {
        sm: css`
          flex-grow: 0;
          flex-shrink: 0;
          flex-basis: ${(100 * value.sm) / 12}%;
          max-width: ${(100 * value.sm) / 12}%;
        `
      }),
      ...(value?.md && {
        md: css`
          flex-grow: 0;
          flex-shrink: 0;
          flex-basis: ${(100 * value.md) / 12}%;
          max-width: ${(100 * value.md) / 12}%;
        `
      }),
      ...(value?.lg && {
        lg: css`
          flex-grow: 0;
          flex-shrink: 0;
          flex-basis: ${(100 * value.lg) / 12}%;
          max-width: ${(100 * value.lg) / 12}%;
        `
      }),
      ...(value?.xl && {
        xl: css`
          flex-grow: 0;
          flex-shrink: 0;
          flex-basis: ${(100 * value.xl) / 12}%;
          max-width: ${(100 * value.xl) / 12}%;
        `
      })
    })
  }}

  ${propToStyle('display')}
  ${propToStyle('flex')}
  ${propToStyle('minWidth')}
  ${propToStyle('flexWrap')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexDirection')}
  ${propToStyle('padding')}
  ${propToStyle('margin')}
`
