import { useCreateTodoMutation } from "../redux/todoSlice";
import { Spinner } from "./spinner";

export const CreateTodo = () => {
    const [createTodo, {isLoading}] = useCreateTodoMutation();

    const handleSubmit = e => {
        e.preventDefault();
        
        createTodo(e.currentTarget.elements.name.value);
        e.currentTarget.reset();
    };

    return(
        <>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <input type="text" name="name"/>
            <button type="submit" disabled={isLoading}>
                {isLoading && <Spinner size={10} />}
                Create todo
            </button>
          </form> 
        </>
    );
};