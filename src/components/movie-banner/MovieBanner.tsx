import { useTheme } from 'styled-components';
import { ITheme } from '../../interfaces/theme';
import { Movie } from '../../models/movie';
import PlayIcon from '../icons/PlayIcon';
import PlusIcon from '../icons/PlusIcon';
import MovieBannerPlaceholder from './MovieBannerPlaceholder';
import MovieInfo from './MovieInfo';
import { AddToList, ButtonsContainer, Container, MovieDescription, MovieTitle, WatchNow } from './styles';

interface MovieBannerProps {
  movie?: Movie;
}

const MovieBanner = ({ movie }: MovieBannerProps): JSX.Element => {
  const theme = useTheme() as ITheme;
  const isOverviewVisible = !theme.isMobile;

  return movie ? (
    <Container movie={movie}>
      {!theme.isMobile && <MovieInfo movie={movie} />}
      <MovieTitle>{movie.originalTitle}</MovieTitle>
      {theme.isMobile && <MovieInfo movie={movie} />}
      {isOverviewVisible && <MovieDescription>{movie.overview}</MovieDescription>}
      <ButtonsContainer>
        <WatchNow>
          Watch Now <PlayIcon />
        </WatchNow>
        <AddToList>
          Add to List <PlusIcon />
        </AddToList>
      </ButtonsContainer>
    </Container>
  ) : (
    <MovieBannerPlaceholder />
  );
};

export default MovieBanner;
