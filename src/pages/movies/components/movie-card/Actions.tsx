import useMyList from '../../../../hooks/useMyList';
import { Movie } from '../../../../models/movie';
import PlayIcon from '../../../../components/icons/PlayIcon';
import PlusIcon from '../../../../components/icons/PlusIcon';
import { ButtonsContainer, WatchButton, AddToListButton } from './styles';

interface Props {
  movie: Movie;
}

const Actions = ({ movie }: Props) => {
  const { addMovieToMyList, isAlreadyAddedIntoMyList } = useMyList();

  return (
    <ButtonsContainer>
      <WatchButton>
        <PlayIcon />
      </WatchButton>
      {!isAlreadyAddedIntoMyList(movie) && (
        <AddToListButton onClick={addMovieToMyList(movie)}>
          <PlusIcon />
        </AddToListButton>
      )}
    </ButtonsContainer>
  );
};

export default Actions;
