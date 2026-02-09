import CardButtonExpand from '../components/card-expand';
import SectionHeader from '../components/div-header';
import './styles/pdf-view.css';

//todo - always autofocus on top of page
export default function PdfView() {
    return (
        <div className="pdf-view">
            <SectionHeader isWrapped={true} sectionTitle={'PDF VIEW'}>
                <CardButtonExpand title={'Resume'}>
                    <iframe
                        className="resume-viewer"
                        src="pdf/Andrei-Ciprian_Barbuta_Resume.pdf"
                    ></iframe>
                </CardButtonExpand>
            </SectionHeader>
        </div>
    );
}
