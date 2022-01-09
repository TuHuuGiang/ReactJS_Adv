import { Link } from 'react-router-dom';

export function About() {
    return (
        <>
            <main>
                <h1>Page About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa quis quaerat, culpa voluptatibus dolore similique possimus aspernatur libero cumque quos accusantium, natus ipsum, magnam recusandae velit quae laudantium eum!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa quis quaerat, culpa voluptatibus dolore similique possimus aspernatur libero cumque quos accusantium, natus ipsum, magnam recusandae velit quae laudantium eum!</p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}