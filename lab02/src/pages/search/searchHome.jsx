import { useSearchParams} from 'react-router-dom';


let users = ['Tí', 'Tèo', 'Tồ', 'Tị'];
export default function SearchHome() {
    let [searchParams, setSearchParams] = useSearchParams();
    let user = searchParams.get('user');
    let result = users.find(item => item === user);

    const HandleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        let keyword = formData.get('user');
        setSearchParams({ user: keyword });
    }

    return(
        <>
            <hr />
            <h1>Search result</h1>
            <form onSubmit={HandleSubmit}>
                <input type="text" name="user" />
                <button type='submit'>Search</button>
            </form>
            <div>
                <h2>{result}</h2>
            </div>
        </>
    );
}