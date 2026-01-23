import ImageTransition from './components/image-transition';
import './styles/about.css';
import ListAndHeader from './components/list-header';
import {
    SectionTwoColumn,
    SectionTwoColumnHeader,
} from './components/section-two-column';

export default function About() {
    return (
        <>
            <SectionTwoColumnHeader sectionTitle={'About'}>
                <ListAndHeader
                    sectionSubTitle={
                        'Im a software developer based in Bucharest, Romania'
                    }
                    list={[
                        `I enjoy turning ideas into reality, solving complex
                        problems, and constantly learning new technologies`,
                        ` When I'm not coding, you can usually find me playing guitar
                        or exploring new video games`,
                    ]}
                />
                <ImageTransition
                    img={{
                        source: 'images/leme6.jpg',
                        alt: 'image-of-me-self',
                    }}
                />
            </SectionTwoColumnHeader>

            <SectionTwoColumn isReversed={true}>
                <ListAndHeader
                    sectionSubTitle={'Area of expertise'}
                    list={[
                        'Backend and Scripting',
                        'Frontend Technologies',
                        'Database Management',
                        'Cloud and API Platforms',
                    ]}
                />
                <ImageTransition
                    img={{
                        source: 'images/area-of-expertise.jpg',
                        alt: 'expertise-image',
                    }}
                />
            </SectionTwoColumn>

            <SectionTwoColumn isReversed={false}>
                <ListAndHeader
                    sectionSubTitle={'Random facts'}
                    list={[
                        'Guitar nerd',
                        'I love football',
                        'Spending too much time in video games',
                        'Horror genre enthusiast',
                    ]}
                />
                <ImageTransition
                    img={{
                        source: 'images/guitar.jpg',
                        alt: 'facts-image',
                    }}
                />
            </SectionTwoColumn>
        </>
    );
}
