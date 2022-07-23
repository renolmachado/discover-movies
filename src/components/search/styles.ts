import styled, { css } from 'styled-components';
import { ITheme } from '../../interfaces/theme';

interface Props {
  isActive: boolean;
  theme: ITheme;
}

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchWrapper = styled.div`
  position: absolute;
  right: 20px;
  cursor: pointer;
  display: flex;
  fill: #ffffff;

  ${({ isActive }: Props) =>
    isActive &&
    css`
      fill: #020202;
    `};
`;

export const Input = styled.input.attrs({ type: 'text' })`
  width: calc(100% - 25px - 48px);
  padding: 0 25px;
  padding-right: 48px;
  background: #424242;
  border: 1px solid #7c7c7c;
  border-radius: 20px;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.6);
  height: calc(65px - 1px - 1px);
  outline: none;
  fill: #ffffff;

  ::-webkit-input-placeholder {
    font-weight: 500;
    font-family: Poppins;
    font-size: 16px;
  }

  ${({ isActive, theme }: Props) =>
    isActive &&
    css`
      border-color: ${theme.colors.primary};
      background: #ffffff;
      color: #000000;
      fill: #020202;
    `};
`;
