import { useCreateContactMutation } from "../redux/contactSlice";
import { Spinner } from "./spinner";

export const CreateContact = () => {
    const [createContact, {isLoading}] = useCreateContactMutation();

    const handleSubmit = e => {
        e.preventDefault();

        const name = e.currentTarget.elements.name.value;
        const number = e.currentTarget.elements.number.value;

        const contact = {
          name,
          number,
        };
        
        createContact(contact);
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
                Create contact
            </button>
          </form> 
        </>
    );
};