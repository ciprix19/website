import SectionTwoColumnImage from './components/section-two-column-image';
import './styles/about.css';

function AboutSection() {
    return (
        <section id="about">
            <div className="two-column-layout wrapper">
                <div>
                    <h1>About</h1>
                    <br></br>
                    <h2>
                        I'm a software developer based in Bucharest, Romania.
                    </h2>
                    <br></br>
                    <p>
                        I enjoy turning ideas into reality, solving complex
                        problems, and constantly learning new technologies. When
                        I'm not coding, you can usually find me playing guitar
                        and exploring new video games.
                    </p>
                </div>
                <img src="images/icons/robot.svg1" alt="profile-pic"></img>
            </div>
        </section>
    );
}

export default function About() {
    return (
        <>
            <AboutSection></AboutSection>
            <SectionTwoColumnImage
                isWrapped={true}
                isImageFirst={true}
                img={{
                    source: 'images/area-of-expertise.jpg',
                    alt: 'skill-pic',
                }}
                sectionSubTitle={'Area of expertise'}
                list={[
                    'Backend and Scripting',
                    'Frontend Technologies',
                    'Database Management',
                    'Cloud and API Platforms',
                ]}
            />
            <SectionTwoColumnImage
                isWrapped={true}
                isImageFirst={false}
                img={{ source: 'images/guitar.jpg', alt: 'skill-pic' }}
                sectionSubTitle={'Random facts'}
                list={[
                    'Guitar nerd',
                    'I love to cook',
                    'Spending too much time in video games',
                    'Horror genre enthusiast',
                ]}
            />
        </>
    );
}
