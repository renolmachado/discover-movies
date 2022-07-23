import styled from 'styled-components';
import { CONFIG } from '../../config';
import { Movie } from '../../models/movie';

interface Props {
  movie: Movie;
}

export const Placeholder = styled.div`
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;

export const Poster = styled(Placeholder)`
  background: ${(props: Props) => {
    const url = CONFIG.baseImageUrl + props.movie.posterPath;
    return `url(${url})`;
  }};
  background-size: cover;
`;
