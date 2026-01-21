import './app.css';
import Header from './layouts/header/header';
import Footer from './layouts/footer/footer';
import Landing from './layouts/landing/landing';
import About from './layouts/about/about';
import Contact from './layouts/contact/contact';
import Resume from './layouts/resume/resume';

function App() {
    return (
        // todo: linkedin si github doar sus
        // svg edu and prof

        <>
            <Header />
            <main>
                <Landing />
                <About />
                <Resume />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
