import { useState } from 'react';
import RenderTextEffect from './RenderTextEffect';
import MarkdownRenderer from './RenderMarkdown';

export default function Summarizer() {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleGenerateSummary = async () => {
    // if (inputText.length < 500) {
    //   alert(
    //     'El apunte no tiene suficiente contenido para generar un resumen (Al menos 500 palabras)'
    //   );
    //   return;
    // }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:8004/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: inputText }),
      });

      if (!response.ok) {
        throw new Error('Error al generar el resumen');
      }

      const data = await response.json();

      setSummary(data.content);

      console.log(data.content);
      //   console.log(`summary: ${summary}`);
    } catch (error) {
      console.error('Error:', error);
      alert(
        'Se ha producido un error generando el resumen, por favor intente nuevamente'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-6 p-6">
      <textarea
        placeholder="Ingresa tu texto aquí"
        value={inputText}
        onChange={handleTextChange}
        className="min-h-[100px] w-full p-2 border rounded-md"
      />
      <button
        onClick={handleGenerateSummary}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        disabled={loading}
      >
        {loading ? 'Generando resumen...' : 'Generar Resumen'}
      </button>
      {summary && (
        <div className="bg-secondary p-4 rounded-md min-h-[100px] overflow-hidden">
          <MarkdownRenderer text={summary} />
        </div>
      )}
    </div>
  );
}
