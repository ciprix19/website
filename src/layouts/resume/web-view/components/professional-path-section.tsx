import DivHeader from '../../components/div-header';

type ProfessionalPathEntryType = {
    position: string;
    company: string;
    location: string;
    imgSource: string;
    startDate: string;
    endDate: string;
    description: string;
};
function ProfessionalPathEntry({
    position,
    company,
    location,
    imgSource,
    startDate,
    endDate,
    description,
}: ProfessionalPathEntryType) {
    return (
        <div className="card-entry">
            <div className="icon-column">
                <img className="icon" src={`images/${imgSource}`} alt="job" />
            </div>
            <div>
                <h3>{position}</h3>
                <p>{company}</p>
                <p>{location}</p>
                <p>
                    {startDate} - {endDate}
                </p>
                <br></br>
                <p>{description}</p>
            </div>
        </div>
    );
}
export default function ProfessionalPathSection() {
    return (
        <DivHeader isWrapped={true} sectionTitle={'CARRER PATH'}>
            <div className="card">
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
                />
            </div>
        </DivHeader>
    );
}
