import styled, { css } from 'styled-components';
import { ITheme } from '../../interfaces/theme';

interface Props {
  theme: ITheme;
}

export const Container = styled.div`
  width: 275px;
  height: 448px;
  max-height: 448px;
  position: relative;
  margin-right: 28px;
  margin-top: 35px;

  @media (max-width: ${({ theme }: Props) => theme.mobileMaxWidth}px) {
    margin-left: 14px;
    margin-right: 14px;
    height: auto;
    max-height: initial;
    margin-top: 57px;
    
    &:first-child {
      margin-top: 38px;
    }
  }
`;

export const StarsContainer = styled.div`
  display: none;
  justify-content: center;

  & svg {
    margin-right: 7px;
  }
`;

export const ButtonsContainer = styled.div`
  display: none;
  position: absolute;
  transform: translate(0, 50%);
  bottom: 0;
  left: 0;
  transform: translate(0, 50%);
  width: 100%;
  justify-content: center;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  text-align: center;
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre;
  margin-top: 18px;
`;

const showButtonsStyles = css`
  ${StarsContainer} {
    display: flex;
    margin-top: 17px;
    margin-bottom: 30px;
  }

  ${Title} {
    text-overflow: initial;
    overflow: initial;
    white-space: initial;
  }

  ${ButtonsContainer} {
    display: flex;
  }
`;

export const ExpandableContainer = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: ${(props: Props) => props.theme.colors.container};
  padding: 20px 23px;
  box-sizing: border-box;
  max-height: inherit;
  transition: max-height 0.7s ease-in-out;

  &:hover {
    ${({ theme }: Props) => !theme.isMobile && css`
      background: #2d2d2d;
      cursor: pointer;
      position: absolute;
      max-height: 100vh;
      height: auto;
      z-index: 2;
      box-shadow: 0px 33px 32px rgba(0, 0, 0, 0.81);
    `}

    ${showButtonsStyles}
  }

  @media (max-width: ${({ theme }: Props) => theme.mobileMaxWidth}px) {
    height: auto;
    max-height: 100vh;

    ${showButtonsStyles}
  }
`;

export const Release = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.5);
`;

export const Duration = styled(Release)`
  margin-left: 18px;
`;

export const ReleaseDurationContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: center;
`;

export const Genre = styled.span`
  background: ${(props: Props) => props.theme.colors.primary};
  border-radius: 0px 0px 11px 11px;
  padding: 7px;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  text-transform: uppercase;
  height: 21px;
`;

export const Button = styled.div`
  width: 66px;
  height: 62px;
  border-radius: 20px;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: brightness(92%);
  }
`;

export const WatchButton = styled(Button)`
  background: ${(props: Props) => props.theme.colors.primary};
`;

export const AddToListButton = styled(Button)`
  stroke: ${(props: Props) => props.theme.colors.primary};
  background: #ffffff;

  & svg {
    stroke: inherit;
  }
`;
