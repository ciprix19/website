import { DivHeader } from '../../components/div-header'
import './styles/professional-path-section.css'

type TechnologiesProps = {
    items: string[]
}

const Technologies = ({ items }: TechnologiesProps) => {
    return (
        <ul className='technologies'>
            {items.map(item => <li key={item} className='tech-items'>
                {item}
            </li>)}
        </ul>
    )
}

type ProfessionalPathEntryType = {
    position: string;
    company: string;
    location: string;
    imgSource: string;
    startDate: string;
    endDate: string;
    description: string;
    technologies: string[];
};
const ProfessionalPathEntry = ({ position,
    company,
    location,
    imgSource,
    startDate,
    endDate,
    description,
    technologies }: ProfessionalPathEntryType) => {
    return (
        <div className="card-entry">
            <div className="icon-column">
                <img className="icon" src={`images/${imgSource}`} alt="job" />
            </div>
            <div>
                <h3>{position}</h3>
                <p>{company}</p>
                <p><i>{location}</i></p>
                <p>
                    {startDate} - {endDate}
                </p>
                <br />
                <p>{description}</p>
                <br />
                <Technologies items={technologies}/>
            </div>
        </div>
    )
}
export const ProfessionalPathSection = () => {
    return (
        <DivHeader isWrapped={true} sectionTitle={'CARRER PATH'}>
            <div className="card">
                <ProfessionalPathEntry
                    position={'Software Developer'}
                    company={'Arkoudsoft SRL'}
                    location={'Cluj-Napoca, Romania'}
                    imgSource={'/icons/web-dev.svg'}
                    startDate={'April 2026'}
                    endDate={'June 2026'}
                    description={
                        'Contributed to the design and development of a cross-platform web and mobile festival application.'
                    }
                    technologies={['Tauri', 'React', 'TypeScript', 'Node.js', 'Express.js', 'IndexedDB', 'PostgreSQL', 'Supabase', 'Docker', 'Git', 'HTML5', 'CSS3']}
                />
                <ProfessionalPathEntry
                    position={'Cloud Engineer L1 - GCP'}
                    company={'Cognizant Softvision'}
                    location={'Bucharest, Romania'}
                    imgSource={'/icons/cloud.svg'}
                    startDate={'May 2024'}
                    endDate={'September 2025'}
                    description={
                        'Provided advanced technical support on over 200 tickets for Apigee X and Apigee Hybrid platforms across both production and development environments.'
                    }
                    technologies={['Apigee X', 'Apigee Hybrid', 'Google Cloud Platform', 'Kubernetes', 'IAM', 'Cloud Logging', 'Cloud Monitoring', 'Google Cloud Networking', 'VPCs', 'HTTP(S) Load Balancers', 'Terraform Modules Apigee']}
                />
                <ProfessionalPathEntry
                    position={'Frontend Developer Intern'}
                    company={'Accenture Industrial Software Solution SA'}
                    location={'Cluj-Napoca, Romania'}
                    imgSource={'/icons/web-dev.svg'}
                    startDate={'August 2022'}
                    endDate={'November 2022'}
                    description={
                        'Participated in the design and development of a secure, Angular-based frontend application for API key management.'
                    }
                    technologies={['TypeScript', 'HTML5', 'CSS3', 'Angular', 'REST APIs', 'Docker']}
                />
            </div>
        </DivHeader>
    )
}
