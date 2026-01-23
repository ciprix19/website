import './styles/resume.css';
import WebView from './web-view/webview';

export default function Resume() {
    return (
        <section id='resume'>
            <h2>Resume</h2>
            <section className="mode-buttons-section">
                <div className="div-buttons">
                    <button className="button-card" disabled={true}>
                        Web interactive
                    </button>
                    <a
                        className="button-card"
                        href="pdf/Andrei-Ciprian_Barbuta_Resume.pdf"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <span>Open PDF</span>
                    </a>
                </div>
            </section>
            <WebView />
        </section>
    );
}
