import { DivHeader } from '../../components/div-header'
import './styles/skills-section.css'
import { CardButtonExpand } from '../../components/card-expand'

type SkillEntryType = {
    skillName: string
}

const skillsCategories: Record<string, string[]> = {
    'Languages': [
        'Javascript',
        'Typescript',
        'Java',
        'C++',
        'C#'
    ],
    'Frontend Technologies': [
        'React',
        'Angular',
        'HTML',
        'CSS',
    ],
    'Backend Technologies': [
        'Node.js',
        'Express.js',
    ],
    'Cloud and Devops': [
        'GCP',
        'AWS',
        'Apigee X / Hybrid',
        'Github Actions',
        'Kubernetes',
        'Docker',
        'Terraform',
        'Linux',
        'Git',
        'NGINX'
    ],
    'Databases': [
        'PostegreSQL',
        'Supabase',
        'DynamoDB'
    ],
    'APIs': [
        'Apigee X / Hybrid',
        'REST'
    ]
}

const SkillsEntry = ({ skillName }: SkillEntryType) => {
    return <div className="card-simple">{skillName}</div>
}

const SkillsForCategory = ({ category }: { category: string }) => {
    return (
        <CardButtonExpand title={category}>
            {skillsCategories[category].map((skill) => {
                return (
                    <SkillsEntry key={skill} skillName={skill}></SkillsEntry>
                )
            })}
        </CardButtonExpand>
    )
}

export const SkillsCategoryDisplay = () => {
    return (
        <DivHeader isWrapped={true} sectionTitle={'CORE ARSENAL'}>
            <div className="skills-category-section">
                {Object.keys(skillsCategories).map((category) => {
                    return (
                        <SkillsForCategory key={category} category={category} />
                    )
                })}
            </div>
        </DivHeader>
    )
}
