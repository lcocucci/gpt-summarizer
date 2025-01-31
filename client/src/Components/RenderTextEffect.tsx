import { useState, useEffect } from 'react';

interface RenderTextEffectProps {
  text: string;
}

const AnimatedWord = ({ word }: { word: string }) => (
  <span
    className="inline-block opacity-0 translate-y-2 animate-fadeIn"
    style={{
      animationFillMode: 'forwards',
      animationDelay: '50ms',
    }}
  >
    {word === ' ' ? '\u00A0' : word}
  </span>
);

export default function RenderTextEffect({ text }: RenderTextEffectProps) {
  const [renderedWords, setRenderedWords] = useState<string[]>([]);

  useEffect(() => {
    const words = text.split(/(\s|\.|,)/);
    setRenderedWords(words);
  }, [text]);

  return (
    <div className="text-container">
      {renderedWords.map((word, index) => (
        <AnimatedWord key={`${word}-${index}`} word={word} />
      ))}
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
