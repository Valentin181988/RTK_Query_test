import { 
    useFechTodosQuery, 
    useDeleteTodoMutation 
} from "../redux/contactSlice";
import { TodoList } from "./contactList";
import { Spinner } from "./spinner";

export const Contact = () => {

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