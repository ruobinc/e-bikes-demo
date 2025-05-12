import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './DemoScript.css';

function DemoScript() {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  useEffect(() => {
    async function fetchMarkdown() {
      const response = await fetch('/src/assets/DemoScript.md');
      const text = await response.text();
      setMarkdownContent(text);
    }

    fetchMarkdown();
  }, []);

  return (
    <div style={{ overflowY: 'auto'}}>
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdownContent}
      </ReactMarkdown>
    </div>
    </div>
  );
}

export default DemoScript;
