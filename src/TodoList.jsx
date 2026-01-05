import React, { useState, useEffect } from 'react';

const TodoList = ({ close }) => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('portfolioTodos');
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolioTodos', JSON.stringify(todos));
  }, [todos]);

  const add = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input.trim(), done: false }]);
      setInput('');
    }
  };

  const toggle = (i) => {
    const newTodos = [...todos];
    newTodos[i].done = !newTodos[i].done;
    setTodos(newTodos);
  };

  const remove = (i) => setTodos(todos.filter((_, index) => index !== i));

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-teal-900 to-cyan-900 flex items-center justify-center text-white z-50 overflow-y-auto p-4">
      <button onClick={close} className="absolute top-4 right-4 md:top-6 md:right-6 text-3xl md:text-4xl hover:text-gray-300">&times;</button>
      <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center mb-6 md:mb-8 lg:mb-12">TO-DO LIST</h1>
        <p className="text-base md:text-lg lg:text-xl text-center mb-6 md:mb-8 lg:mb-12 opacity-80">Ажлаа зохион байгуул</p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-8 md:mb-12 lg:mb-16">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && add()}
            placeholder="Шинэ ажил оруул..."
            className="flex-1 px-4 py-3 md:px-6 md:py-4 text-base md:text-lg rounded-xl md:rounded-2xl text-black font-medium"
          />
          <button onClick={add} className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-black text-base md:text-lg font-bold rounded-xl md:rounded-2xl hover:scale-105 transition shadow-lg">
            НЭМЭХ
          </button>
        </div>
        <ul className="space-y-3 md:space-y-4">
          {todos.length === 0 ? (
            <p className="text-base md:text-lg text-center opacity-60">Ажил алга...</p>
          ) : (
            todos.map((todo, i) => (
              <li key={i} className="bg-white/10 backdrop-blur-lg px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl flex items-center justify-between text-base md:text-lg lg:text-xl shadow-lg">
                <span
                  onClick={() => toggle(i)}
                  className="cursor-pointer flex-1 mr-4"
                  style={{ textDecoration: todo.done ? 'line-through' : 'none', opacity: todo.done ? 0.5 : 1 }}
                >
                  {todo.text}
                </span>
                <button onClick={() => remove(i)} className="text-2xl md:text-3xl text-red-400 hover:text-red-300">×</button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;