import { useNavigate } from "react-router-dom";

export default function MyButtonV3() {
    let navigate = useNavigate();

    return(
        <div>
            <button onClick={() => navigate(-2)}>Go 2 page previous</button>
            <button onClick={() => navigate(-1)}>Go 1 page previous</button>
            <button onClick={() => navigate(1)}>Next 1 page </button>
            <button onClick={() => navigate(2)}>Next 2 page </button>
        </div>
    );
}