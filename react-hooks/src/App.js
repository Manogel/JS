import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  //Para evitar que tech.length seja chamado a cada mudança de algum estado!
  const techSize = useMemo(() => tech.length, [tech])
  
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if(storageTech){
      setTech(JSON.parse(storageTech));
    }
  }, [])

  useEffect(()=> {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech])


  //Evitar que a função seja construida toda vez que ela é chamada
  const addNew = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech])


  return (
    <div>
     <ul>
       {tech.map( t => (
         <li key={t}> {t}</li>
       ))}
     </ul>
     {!techSize == 0 && <strong> Você tem {techSize} tecnologias </strong>}
     <br />
     <input value={newTech} onChange={e => setNewTech(e.target.value)} />
     <button type="button" onClick={addNew}>
       Adicionar Novo
     </button>
    </div>
  );
}

export default App;
