import React, { useState, useEffect } from 'react';

export const Counter = () => {
  // Declare uma nova variável de state, a qual chamaremos de "count"
  const [count, setCount] = useState(0);

  // Similar a componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o título do documento utilizando a API do navegador
    document.title = `The Counter is ${count} `;
  });


  return (
    <div>
      <p>The Counter is{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Up
      </button>
      <button onClick={() => setCount(count - 1)}>
        Down
      </button>
    </div>
  );
}
