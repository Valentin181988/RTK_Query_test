import { useCreateTodoMutation } from "../redux/todoSlice";
import { Spinner } from "./spinner";

export const CreateContact = () => {
    const [createTodo, {isLoading}] = useCreateTodoMutation();

    const handleSubmit = e => {
        e.preventDefault();

        const name = e.currentTarget.elements.name.value;
        const number = e.currentTarget.elements.number.value;

        const contact = {
          name,
          number,
        };
        
        createTodo(contact);
        e.currentTarget.reset();
    };

    return(
        <>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <input type="text" name="name"/>
            <br />
            <input type="text" name="number"/>
            <br />
            <button type="submit" disabled={isLoading}>
                {isLoading && <Spinner size={10} />}
                Create todo
            </button>
          </form> 
        </>
    );
};