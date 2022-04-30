import { CustomTextarea, TextareaContainer } from './styled';

interface Props {
  textarea: (value: string) => void;
}

const Textarea: React.FC<Props> = ({ textarea, ...props }) => {
  return (
    <TextareaContainer>
      <CustomTextarea onChange={(e) => textarea(e.target.value)}>
        {props.children}
      </CustomTextarea>
    </TextareaContainer>
  );
};

export default Textarea;
