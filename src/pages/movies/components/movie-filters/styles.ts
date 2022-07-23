import styled from 'styled-components';
import { ITheme } from '../../../../interfaces/theme';

interface Props {
  isFilterVisible: boolean;
  theme: ITheme;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 397px;
  margin-right: 40px;

  @media (max-width: ${({ theme }: Pick<Props, 'theme'>) => theme.mobileMaxWidth}px) {
    min-width: initial;
    width: 100%;
    margin-right: initial;
    margin-top: 20px;
  }
`;

export const FilterBy = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
  width: fit-content;
  display: inline-flex;
  align-items: center;
  opacity: ${({ isFilterVisible }: Props) => (isFilterVisible ? '1' : '0.4')};
  cursor: pointer;

  @media (max-width: ${({ theme }: Props) => theme.mobileMaxWidth}px) {
    font-size: 20px;
  }
`;

export const AnimatedArrow = styled.div`
  display: inline-flex;
  transform: ${({ isFilterVisible }: Props) => (isFilterVisible ? 'initial' : 'rotate(-90deg)')};
  transition: transform 0.2s linear;
  margin-right: 10px;
`;

export const Collapsible = styled.div`
  max-height: ${({ isFilterVisible }: Props) => (isFilterVisible ? '200vh' : '0')};
  overflow: hidden;
  transition: max-height 0.7s linear;
`;
