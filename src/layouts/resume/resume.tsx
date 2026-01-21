import './styles/resume.css'
import WebView from './web-view/webview';



export default function Resume() {

    return (
        <section id='resume'>
            <h1>Resume</h1>
            <section className='mode-buttons-section'>
                <div className='div-buttons'>
                    <button className='button-card' disabled={true}>Web interactive</button>
                    <a className='button-card' href='pdf/mycv.pdf' rel='noopener noreferrer' target='_blank'>
                        {/* <button className='button-card'>Open PDF</button> */}
                        <span>Open PDF</span>
                    </a>
                </div>
            </section>
            <WebView />
        </section>
    );
}
