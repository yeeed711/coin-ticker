import { ModeBtn } from './style';

interface IModeBtn {
  onClick: () => void;
  children: string;
}

const ModeChangeBtn = ({ onClick, children }: IModeBtn) => {
  return <ModeBtn onClick={onClick}>{children}</ModeBtn>;
};

export default ModeChangeBtn;
