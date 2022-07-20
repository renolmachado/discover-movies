import styled from 'styled-components';
import { CONFIG } from '../../config';
import { ITheme } from '../../interfaces/theme';
import { Movie } from '../../models/movie';

export const Container = styled.div`
  padding: 75px 174px 0 143px;
  display: flex;
  flex-direction: column;
  height: 495px;
  width: calc(100% - 174px - 143px);
  background: ${(props: { movie: Movie }) => {
    const url = CONFIG.baseImageUrl + props.movie.backdropPath;
    return `linear-gradient(90deg, #070707 13.01%, rgba(0, 0, 0, 0.69) 75.59%), url(${url}) no-repeat`;
  }};
  background-position: center;
  background-size: cover;
`;

export const SpanContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Span = styled.span`
  height: 24px;
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.6);
  margin-right: 39px;
`;

export const MovieTitle = styled.span`
  font-family: Arvo;
  margin-top: 26px;
  font-size: 68px;
  line-height: calc(68px + 26px);
  color: #ffffff;
`;

export const MovieSubTitle = styled.span`
  font-family: Arvo;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 28px;
  line-height: 33px;
  margin-top: 10px;
  color: #ffffff;
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
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const WatchNow = styled(Button)`
  box-shadow: 0px 7px 42px rgba(0, 15, 147, 0.44);
  background-color: ${(props: { theme: ITheme }) => props.theme.colors.primary};
`;

export const AddToList = styled(Button)`
  border: 1px solid rgba(255, 255, 255, 0.16);
  filter: drop-shadow(0px 7px 42px rgba(0, 15, 147, 0.44));
  background-color: transparent;

  &:hover {
    background-color: ${(props: { theme: ITheme }) => props.theme.colors.primary};
  }
`;
