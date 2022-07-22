import styled from 'styled-components';
import { CONFIG } from '../../config';
import { Movie } from '../../models/movie';

interface Props {
  movie: Movie;
}

export const Placeholder = styled.div`
  width: 229px;
  height: 321px;
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
