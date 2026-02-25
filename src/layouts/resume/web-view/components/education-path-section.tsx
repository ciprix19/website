import DivHeader from '../../components/div-header';
import './styles/education-path-section.css';

type EducationEntryType = {
    degree: string;
    institution: string;
    location: string;
    imgSource: string;
    startDate: string;
    endDate: string;
    relevantCoursework: string;
    thesis: string;
};

function EducationEntry({
    degree,
    institution,
    location,
    imgSource,
    startDate,
    endDate,
    relevantCoursework,
    thesis,
}: EducationEntryType) {
    return (
        <div className="card-entry">
            <div className="icon-column">
                <img className="icon" src={`images/${imgSource}`} alt="job" />
            </div>
            <div>
                <h3>{degree}</h3>
                <p>{institution}</p>
                <p>{location}</p>
                <p>
                    {startDate} - {endDate}
                </p>
                <br></br>
                <p>{relevantCoursework}</p>
                <p>{thesis}</p>
            </div>
        </div>
    );
}

export default function EducationSection() {
    return (
        <DivHeader isWrapped={true} sectionTitle={'EDUCATION'}>
            <div className="card">
                <EducationEntry
                    degree={`Master's Degree in Software Engineering`}
                    institution={
                        'Babes-Bolyai Faculty of Mathematics and Computer Science'
                    }
                    location={'Cluj-Napoca, Romania'}
                    imgSource={'/icons/masters.svg'}
                    startDate={'October 2023'}
                    endDate={'April 2024'}
                    relevantCoursework={
                        'Relevant coursework: Agile Methodologies, Programming Paradigms.'
                    }
                    thesis={''}
                />
                <EducationEntry
                    degree={`Bachelor's Degree in Computer Science`}
                    institution={
                        'Babes-Bolyai Faculty of Mathematics and Computer Science'
                    }
                    location={'Cluj-Napoca, Romania'}
                    imgSource={'/icons/bachelors.svg'}
                    startDate={'October 2020'}
                    endDate={'July 2023'}
                    relevantCoursework={
                        'Relevant coursework: Data Structures and Algorithms, OOP, Networking, Web Development, Machine Learning.'
                    }
                    thesis={
                        'Thesis: Tuner and Tab Writer for Guitar Using Note Detection Algorithms.'
                    }
                />
            </div>
        </DivHeader>
    );
}
