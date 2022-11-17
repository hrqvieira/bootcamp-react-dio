import { useState, useCallback, useMemo } from "react";

const Teste = () => {
  const [age, setAge] = useState(19);
  const [name, setName] = useState('Henrique');

  const handleChangeName = useCallback( () => {
    console.log('alterou nome')
    setName((prev) => (prev === 'Henrique' ? 'José' : 'Henrique'));
  }, []);

  //useMemo guarda  referencia em variavel
  //useCallback guarda referencia de funcao

  const handleChangeAge = useCallback(() => {
    const newAge = 10 * age;
    console.log('age atual', age, newAge)
    setAge(prev => prev === 19 ? 21 : 19);
  }, [age]);

  return (
    <div>
      <p>
        Idade:{age}
      </p>  <br/>
      <p>
        Nome:{name} 
      </p> <br />
      <p>

      </p>
      <button onClick={handleChangeName}>Alterar nome</button>  <br /> 
      <button onClick={handleChangeAge}>Alterar idade</button>
    </div>
  );
};

export { Teste };
