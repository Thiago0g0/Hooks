import { useCallback, useReducer, useEffect, useState } from "react";

const tarefaReducer = (state, action) => {
    switch (action.type) {
        case 'add_tarefa':
            return [...state, action.payload]
        case 'concluir_tarefa':
            const atualizarTarefa = [...state]
            atualizarTarefa[action.payload].completed = true
            return atualizarTarefa
    }
}

export default function ListaTarefa() {
    const [tarefa, setTarefa] = useState('')

    const [tarefaAtual, dispatch] = useReducer(tarefaReducer, [])

    const addTarefa = useCallback(() => {
        if (tarefa.trim() !== '') {
            dispatch({ type: 'add_tarefa', payload: { text: tarefa, completed: false } })
        }
    }, [tarefa])

    const concluirTarefa = useCallback((index) =>{
        dispatch({type: 'concluir_tarefa', payload: index})
    , []})

    return (
        <div className="center">
            <h1>Lista de Tarefas</h1>
            <div className="inputArea">
                <input
                    type="text"
                    placeholder="Nova tarefa"
                    valor={tarefa}
                    onChange={(e) => setTarefa(e.target.value)}
                />
                <button onClick={addTarefa}>Adicionar tarefa</button>
            </div>
            <ul>
                {tarefaAtual.map((tarefas, index) => (
                    <li key={index}>
                        <span style={{textDecoration: tarefas.completed ? 'line-through' : 'none'}}>
                        {tarefas.text}
                        </span>
                        {!tarefas.completed && (
                        
                            <>
                                <button onClick={() => concluirTarefa(index)}>Conclui tarefa</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}