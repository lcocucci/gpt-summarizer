import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface RenderTextEffectProps {
  text: string;
}

export default function RenderTextEffect({ text }: RenderTextEffectProps) {
  const [renderedContent, setRenderedContent] = useState<string>('');

  useEffect(() => {
    setRenderedContent(text);
  }, [text]);

  return (
    <div className="text-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeKatex]}>
        {renderedContent}
      </ReactMarkdown>
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
