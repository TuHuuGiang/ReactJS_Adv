import { useNavigate } from "react-router-dom";

export default function MyButton() {
    let navigate = useNavigate();

    function handleClick() {
        navigate("/profile/888");
    };
    return(
        <button type="button" onClick={handleClick}>Submit</button>
    );
}