import { 
    useFechTodosQuery, 
    useDeleteTodoMutation 
} from "../redux/todoSlice";
import { TodoList } from "./todoList";
import { Spinner } from "./spinner";

export const Todo = () => {

    const { data: todos, isFetcing, error } = useFechTodosQuery();
    const [ deleteTodo, {isLoading: isDeleting} ] = useDeleteTodoMutation();

    return(
        <div>
            { isFetcing && <Spinner />}
            { todos && 
            <TodoList 
            todos={todos} 
            onDelete={deleteTodo} 
            deleting={isDeleting}/>}
        </div>
    );
};