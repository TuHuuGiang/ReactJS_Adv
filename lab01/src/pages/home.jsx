import { Link } from 'react-router-dom';

export function Home() {
    return (
        <>
            <main>
                <h1>Page Home</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa quis quaerat, culpa voluptatibus dolore similique possimus aspernatur libero cumque quos accusantium, natus ipsum, magnam recusandae velit quae laudantium eum!</p>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </>
    );
}