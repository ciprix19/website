import './styles/not-found.css';

export default function NotFound() {
    return (
        <main className="not-found">
            <section>
                <h1>not found.</h1>
                <br></br>
                <img src="images/business-cat-small.jpg"></img>
                <br></br>
                <p>
                    Sorry, the page you are looking for does not exist.{' '}
                    <a>
                        <u>Go back home</u>
                    </a>
                    .
                </p>
            </section>
        </main>
    );
}
