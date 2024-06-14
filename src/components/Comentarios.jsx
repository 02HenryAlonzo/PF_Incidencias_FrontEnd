import React, { useState, useEffect } from 'react';

const Comentarios = ({ incidenceId }) => {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchComments(incidenceId);
      setComments(result);
    };
    fetchData();
  }, [incidenceId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createComment({ incidenceId, content });
    setContent('');
    const updatedComments = await fetchComments(incidenceId);
    setComments(updatedComments);
  };

  return (
    <div className="mt-4">
      <h3 className="text-xl mb-2">Comentarios</h3>
      <ul className="mb-4">
        {comments.map(comment => (
          <li key={comment.id} className="border p-2 mb-2">
            <p>{comment.content}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="space-y-2">
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          className="w-full p-2 border" 
          placeholder="Escribe un comentario..."
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white">Enviar</button>
      </form>
    </div>
  );
};

export default Comentarios;
