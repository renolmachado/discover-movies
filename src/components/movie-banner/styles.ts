import styled from 'styled-components';
import { CONFIG } from '../../config';
import { ITheme } from '../../interfaces/theme';
import { Movie } from '../../models/movie';

interface Props {
  theme: ITheme;
  movie: Movie;
}

export const Container = styled.div`
  padding: 75px 174px 0 143px;
  display: flex;
  flex-direction: column;
  height: 495px;
  width: calc(100% - 174px - 143px);
  background: ${(props: Props) => {
    const url = CONFIG.baseImageUrl + props.movie.backdropPath;
    return `linear-gradient(90deg, #070707 13.01%, rgba(0, 0, 0, 0.69) 75.59%), url(${url}) no-repeat`;
  }};
  background-position: center;
  background-size: cover;

  @media (max-width: ${({ theme }: Props) => theme.mobileMaxWidth}px) {
    padding: 106px 41px 20px 41px;
    width: calc(100% - 41px - 41px);
    height: initial;
    min-height: calc(100vh - 106px - 20px);
    display: flex;
    justify-content: center;
  }
`;

export const SpanContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  @media (max-width: ${({ theme }: Partial<Props>) => theme?.mobileMaxWidth}px) {
    margin-top: 28px;
  }
`;

export const Span = styled.span`
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.6);
  margin-right: 39px;

  @media (max-width: ${({ theme }: Partial<Props>) => theme?.mobileMaxWidth}px) {
    margin-right: 28px;
  }
`;

export const MovieTitle = styled.span`
  font-family: Arvo;
  margin-top: 26px;
  font-size: 68px;
  line-height: calc(68px + 26px);
  color: #ffffff;
  word-break: break-word;

  @media (max-width: ${({ theme }: Partial<Props>) => theme?.mobileMaxWidth}px) {
    font-size: 67px;
    line-height: 0.9;
    margin-top: 0;
  }
`;

export const MovieDescription = styled.span`
  line-height: 24px;
  font-size: 16px;
  margin-top: 22px;
  color: rgba(255, 255, 255, 0.8);
`;

const Button = styled.button`
  width: 248.75px;
  height: 70px;
  margin-top: 37px;
  margin-right: 15.25px;
  font-weight: 600;
  font-size: 20px;
  border-radius: 20px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;

  &:hover {
    filter: brightness(96%);
  }

  @media (max-width: ${({ theme }: Partial<Props>) => theme?.mobileMaxWidth}px) {
    width: 270px;
    margin-top: initial;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${({ theme }: Partial<Props>) => theme?.mobileMaxWidth}px) {
    flex-direction: column;
    margin-top: 41px;
  }
`;

export const WatchNow = styled(Button)`
  box-shadow: 0px 7px 42px rgba(0, 15, 147, 0.44);
  border: none;
  background-color: ${(props: { theme: ITheme }) => props.theme.colors.primary};
`;

export const AddToList = styled(Button)`
  border: 1px solid rgba(255, 255, 255, 0.16);
  filter: drop-shadow(0px 7px 42px rgba(0, 15, 147, 0.44));
  background-color: transparent;

  &:hover {
    background-color: ${(props: { theme: ITheme }) => props.theme.colors.primary};
  }

  @media (max-width: ${({ theme }: Partial<Props>) => theme?.mobileMaxWidth}px) {
    margin-top: 16px;
  }
`;
