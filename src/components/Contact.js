import { 
    useFechTodosQuery, 
    useDeleteTodoMutation 
} from "../redux/contactSlice";
import { TodoList } from "./contactList";
import { Spinner } from "./spinner";

export const Contact = () => {

    const { data: contacts, isFetcing, error } = useFechTodosQuery();
    const [ deleteTodo, {isLoading: isDeleting} ] = useDeleteTodoMutation();

    return(
        <div>
            { isFetcing && <Spinner />}
            { contacts && 
            <TodoList 
            contacts={contacts} 
            onDelete={deleteTodo} 
            deleting={isDeleting}/>}
        </div>
    );
};