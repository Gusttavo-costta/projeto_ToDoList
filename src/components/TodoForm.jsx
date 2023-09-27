import {useState} from 'react'

function TodoForm() {
    const[value,setValue] = useState("")
    const[categoria,setCategoria] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !categoria) return;
        setValue("")
        setCategoria("")
        
    }
    return (
        <div className='todo-form'>
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Digite o título' value={value} onChange={(e) => setValue(e.target.value)}/>
                <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type='submit'>Criar tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm