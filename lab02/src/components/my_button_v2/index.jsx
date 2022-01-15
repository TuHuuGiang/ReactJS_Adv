import { useNavigate } from "react-router-dom";

export default function MyButton() {
    let navigate = useNavigate();

    let handleClick = () => {
        navigate("/profile/999", {replace: true});
    }
    return(
        <button type="button" onClick={handleClick}>Submit V2</button>
    );
}