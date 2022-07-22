import PlayIcon from '../icons/PlayIcon';
import PlusIcon from '../icons/PlusIcon';
import { ButtonsContainer, WatchButton, AddToListButton } from './styles';

const Actions = () => {
  return (
    <ButtonsContainer>
      <WatchButton>
        <PlayIcon />
      </WatchButton>
      <AddToListButton>
        <PlusIcon />
      </AddToListButton>
    </ButtonsContainer>
  );
};

export default Actions;
