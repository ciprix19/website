import EducationPathSection from './components/education-path-section';
import ProfessionalPathSection from './components/professional-path-section';
import SkillsCategoryDisplay from './components/skills-section';
import './styles/webview.css';

export default function WebView() {
    return (
        <>
            <ProfessionalPathSection />
            <EducationPathSection />
            <SkillsCategoryDisplay />
        </>
    );
}
