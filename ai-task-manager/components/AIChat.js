import { useState } from 'react';

export default function AIChat() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleAskAI = async () => {
    const res = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_OPENAI_API_KEY`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        prompt: `Suggest tasks based on: ${input}`,
        max_tokens: 50
      })
    });
    const data = await res.json();
    setResponse(data.choices[0].text);
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">AI Task Suggestions</h2>
      <input
        type="text"
        placeholder="Describe your task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2 border w-full"
      />
      <button onClick={handleAskAI} className="bg-green-500 text-white px-4 py-2 mt-2">Ask AI</button>
      {response && <p className="mt-2 p-2 border">{response}</p>}
    </div>
  );
}
