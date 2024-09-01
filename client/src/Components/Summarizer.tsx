import { useState, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';

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

export default function Component() {
  const [inputText, setInputText] = useState('');
  const [renderedWords, setRenderedWords] = useState<string[]>([]);

  useEffect(() => {
    const words = inputText.split(/(\s|\.|,)/);
    setRenderedWords(words);
  }, [inputText]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto space-y-6 p-6">
      <Textarea
        placeholder="Ingresa tu texto aquí"
        value={inputText}
        onChange={handleTextChange}
        className="min-h-[100px]"
      />
      <div className="bg-secondary p-4 rounded-md min-h-[100px] overflow-hidden">
        <p className="text-secondary-foreground">
          {renderedWords.map((word, index) => (
            <AnimatedWord key={`${word}-${index}`} word={word} />
          ))}
        </p>
      </div>
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
