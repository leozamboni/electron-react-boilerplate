import ReactMarkdown from 'react-markdown';
import { MarkdownContainer } from './styled';

interface Props {}

const Markdown: React.FC<Props> = ({ ...props }) => {
  return (
    <MarkdownContainer>
      <ReactMarkdown>{props.children}</ReactMarkdown>
    </MarkdownContainer>
  );
};

export default Markdown;
