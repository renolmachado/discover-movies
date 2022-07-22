import styled from 'styled-components';
import { ITheme } from '../../interfaces/theme';

interface Props {
  theme: ITheme;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 275px;
  height: 448px;
  border-radius: 20px;
  background: ${(props: Props) => props.theme.colors.container};
  margin-right: 28px;
  margin-top: 35px;
  padding: 20px 23px;
  box-sizing: border-box;

  @media (max-width: ${({ theme }: Pick<Props, 'theme'>) => theme.mobileMaxWidth}px) {
    width: 100%;
    margin-right: initial;
  }
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;

  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre;
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
`;

export const Genre = styled.span`
  background: #192ac4;
  border-radius: 0px 0px 11px 11px;
  padding: 7px;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  text-transform: uppercase;
  height: 21px;
`;
