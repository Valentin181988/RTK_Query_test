import { 
    useFechTodosQuery, 
    useDeleteTodoMutation 
} from "../redux/contactSlice";
import { ContactList } from "./contactList";
import { Spinner } from "./spinner";

export const Contact = () => {

    const { data: contacts, isFetcing, error } = useFechTodosQuery();
    const [ deleteContact, {isLoading: isDeleting} ] = useDeleteTodoMutation();

    return(
        <div>
            { isFetcing && <Spinner />}
            { contacts && 
            <ContactList 
            contacts={contacts} 
            onDelete={deleteContact} 
            deleting={isDeleting}/>}
        </div>
    );
};