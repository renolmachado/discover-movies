import styled from 'styled-components';
import { ITheme } from '../../../../interfaces/theme';

interface Props {
  theme: ITheme;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
`;

export const PosterWrapper = styled.div`
  width: 239px;
  height: 336px;
  min-width: 239px;
  min-height: 336px;
`;

export const Title = styled.span`
  color: ${({ theme }: Props) => theme.colors.texts.primary };
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  margin-top: 22px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre;
`;

export const ReleaseDurationContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 6px;
  color: ${({ theme }: Props) => theme.colors.texts.primary };
  opacity: .6;
`;

export const Release = styled.span`
  font-size: 16px;
`;

export const Duration = styled(Release)`
  margin-left: 16px;
`;
