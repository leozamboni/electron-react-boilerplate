import Markdown from 'components/markdown';
import Textarea from 'components/textarea';
import { useState } from 'react';
import './App.css';

const ElectronMarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('# Hello, World!');
  return (
    <>
      <Textarea textarea={(e) => setMarkdown(e)}># Hello, World!</Textarea>
      <Markdown>{markdown}</Markdown>
    </>
  );
};

export default function App() {
  return <ElectronMarkdownEditor />;
}
