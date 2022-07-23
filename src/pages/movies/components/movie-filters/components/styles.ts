import styled from 'styled-components';
import {ITheme} from '../../../../../interfaces/theme';

interface Props {
  theme: ITheme;
  isSelected: boolean;
}

export const FilterContainer = styled.div`
  background: ${({ theme }: Pick<Props, 'theme'>) => theme.colors.container};
  border-radius: 20px;
  padding: 33px 30px;
  margin-top: 28px;
  width: calc(100% - 30px - 30px);
  max-height: calc(534px - 33px - 33px);

  @media (max-width: ${({ theme }: Pick<Props, 'theme'>) => theme.mobileMaxWidth}px) {
    padding: 30px;
    max-height: initial;
  }
`;

export const FilterTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
`;

export const StarsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  width: fit-content;
  cursor: pointer;
`;

export const StarContainer = styled.div`
  margin-right: 8px;
`;

export const GenresContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 10px;
  max-height: 430px;

  @media (max-width: ${({ theme }: Pick<Props, 'theme'>) => theme.mobileMaxWidth}px) {
    max-height: initial;
  }
`;

export const CheckboxContainer = styled.div`
  display: inline-flex;
  width: fit-content;
  margin-top: 18px;
  cursor: pointer;
`;

export const GenreLabel = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-left: 15px;
  opacity: ${(props: Props) => (props.isSelected ? '1' : '0.5')};
`;
