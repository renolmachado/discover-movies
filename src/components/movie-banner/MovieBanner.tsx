import { useTheme } from 'styled-components';
import useMyList from '../../hooks/useMyList';
import { ITheme } from '../../interfaces/theme';
import { Movie } from '../../models/movie';
import PlayIcon from '../icons/PlayIcon';
import PlusIcon from '../icons/PlusIcon';
import MoviePoster from '../movie-poster/MoviePoster';
import MovieBannerPlaceholder from './MovieBannerPlaceholder';
import MovieInfo from './MovieInfo';
import { AddToList, ButtonsContainer, Container, Content, MovieDescription, MovieTitle, PosterWrapper, WatchNow } from './styles';

interface MovieBannerProps {
  movie?: Movie;
  isPosterVisible?: boolean;
  isOverviewVisible?: boolean;
}

const MovieBanner = ({ movie, isPosterVisible, isOverviewVisible }: MovieBannerProps): JSX.Element => {
  const theme = useTheme() as ITheme;
  const showOverview = !theme.isMobile || isOverviewVisible;
  const { addMovieToMyList, isAlreadyAddedIntoMyList } = useMyList();

  return movie ? (
    <Container movie={movie} isPosterVisible={isPosterVisible}>
      {isPosterVisible && (
        <PosterWrapper>
          <MoviePoster movie={movie} />
        </PosterWrapper>
      )}
      <Content>
        {!theme.isMobile && <MovieInfo movie={movie} />}
        <MovieTitle>{movie.originalTitle}</MovieTitle>
        {theme.isMobile && <MovieInfo movie={movie} />}
        {showOverview && <MovieDescription>{movie.overview}</MovieDescription>}
        <ButtonsContainer>
          <WatchNow>
            Watch Now <PlayIcon />
          </WatchNow>
          {!isAlreadyAddedIntoMyList(movie) && (
            <AddToList onClick={addMovieToMyList(movie)}>
              Add to List <PlusIcon />
            </AddToList>
          )}
        </ButtonsContainer>
      </Content>
    </Container>
  ) : (
    <MovieBannerPlaceholder />
  );
};

export default MovieBanner;
