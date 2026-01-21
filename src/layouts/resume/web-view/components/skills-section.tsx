import DivHeader from '../../components/div-header';
import './styles/skills-section.css';
import CardButtonExpand from '../../components/card-expand';

type SkillEntryType = {
    skillName: String;
};

// todo: drag and drop elements in the div
const skillsCategories: Record<string, string[]> = {
    'Backend and Scripting': [
        'Node.js',
        'Express.js',
        'C++',
        'Java',
        'C#',
        'Python',
    ],
    'Frontend Technologies': [
        'Javascript',
        'Typescript',
        'React',
        'Next.js',
        'HTML',
        'CSS',
        'Angular',
    ],
    Databases: ['SQLite', 'PostegreSQL'],
    'Cloud and API': [
        'Google Cloud Platform',
        'Apigee X',
        'Apigee Hybrid',
        'Kubernetes',
        'Docker',
    ],
    Tools: ['Git', 'Linux'],
};

function SkillsEntry({ skillName }: SkillEntryType) {
    return <div className="card-simple">{skillName}</div>;
}

function SkillsForCategory({ category }: { category: string }) {
    return (
        <CardButtonExpand title={category}>
            {skillsCategories[category].map((skill) => {
                return (
                    <SkillsEntry key={skill} skillName={skill}></SkillsEntry>
                );
            })}
        </CardButtonExpand>
    );
}

export default function SkillsCategoryDisplay() {
    return (
        <DivHeader isWrapped={true} sectionTitle={'CORE ARSENAL'}>
            <div className="skills-category-section">
                {Object.keys(skillsCategories).map((category) => {
                    return (
                        <SkillsForCategory key={category} category={category} />
                    );
                })}
            </div>
        </DivHeader>
    );
}
