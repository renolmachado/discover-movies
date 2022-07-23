import styled from 'styled-components';
import { ITheme } from '../../../../interfaces/theme';

interface Props {
  theme: ITheme;
}
export const TitleWrapper = styled.div`
  margin-top: 80px;
  
  @media (max-width: ${({ theme }: Props) => theme.mobileMaxWidth}px) {
    margin-top: 0;
  }
`;