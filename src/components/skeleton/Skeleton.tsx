import { SkeletonAnimation } from './styles';

interface Props {
  styles: React.CSSProperties;
}

const Skeleton = ({ styles }: Props) => {
  return <SkeletonAnimation style={styles}></SkeletonAnimation>;
};

export default Skeleton;
