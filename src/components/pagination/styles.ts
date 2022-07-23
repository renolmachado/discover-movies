import styled, { css } from 'styled-components';
import { ITheme } from '../../interfaces/theme';

interface Props {
  theme: ITheme;
  isActive: boolean;
}

export const PaginationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 68px;
  
  @media (max-width: ${({ theme }: Pick<Props, 'theme'>) => theme.mobileMaxWidth}px) {
    margin-top: 76px;
    justify-content: center;
  }
`;

export const Button = styled.div`
  background: ${(props: Props) => props.theme.colors.container};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }: Props) => theme.colors.texts.primary };
  padding: 13px 25px;
  opacity: ${(props: Props) => (props.isActive ? 1 : 0.4)};
  stroke: #ffffff;

  & + & {
    margin-left: 11px;
  }

  ${(props: Props) =>
    props.isActive &&
    css`
      &:hover {
        filter: brightness(96%);
        cursor: pointer;
      }
    `}
`;

const Text = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

export const NextText = styled(Text)`
  margin-right: 15px;
`;

export const PreviousText = styled(Text)`
  margin-left: 15px;
`;
