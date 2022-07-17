export const TodoList = ({todos, onDelete, deleting}) => {
    return <ul>
        {todos.map(todo => 
            <li key={todo.id}>
                {todo.name}
                {todo.number}
                <button onClick={() => onDelete(todo.id)}>
                    {deleting ? 'Deleting...' : 'Delete'}
                </button>
            </li>)}
    </ul>
};