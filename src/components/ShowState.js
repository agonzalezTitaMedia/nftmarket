import { useContext } from "react";
import { AppContext } from "../app/Provider";

const ShowState = () => {
    const [state, setState] = useContext(AppContext);
    return ( <p> {state}</p>)
}

export default ShowState;