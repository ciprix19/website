import type { MouseEvent } from 'react';
import './styles/contact.css'

type SocialsDivType = {
    socialPlatform: string;
    linkToPlatform: string;
}
function SocialsDiv({ socialPlatform, linkToPlatform } : SocialsDivType) {
    return (
        <div className='social-platform-div'>
            <a href={linkToPlatform} target='_blank'>
                <div className='social'>
                    <img className='icon social-media' src={`images/icons/${socialPlatform.toLowerCase()}.svg`} alt='facebook'></img>
                    <label>{socialPlatform}</label>
                </div>
            </a>
        </div>
    );
}

export default function Contact() {

    function handleSubmitButton(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
    }

    return (
        <section id='contact'>
            <div className='wrapper'>

             <h2>Contact</h2>
                {/* <div>
                    <h1>Contact</h1>
                    <form className='contact-form'>
                        <div className='field'>
                            <label>Enter your email:</label>
                            <input type='text'></input>
                        </div>
                        <div className='field'>
                            <label>Tell me your thoughts :D</label>
                            <textarea></textarea>
                        </div>
                        <button className='button-card' onClick={e => handleSubmitButton(e)}>Submit</button>
                    </form>
                </div> */}
                <div className='socials-div'>
                    <h2>{`You can also find me on:`}</h2>
                    {/* <SocialsDiv
                        linkToPlatform='https://www.linkedin.com/in/ciprix19/'
                        socialPlatform='Linkedin'/>
                    <SocialsDiv
                        linkToPlatform='https://github.com/ciprix19'
                        socialPlatform='Github'/> */}
                    <SocialsDiv
                        linkToPlatform='https://www.instagram.com/cipri_.b/'
                        socialPlatform='Instagram'/>
                    <SocialsDiv
                        linkToPlatform='https://www.facebook.com/cipri.barbuta/'
                        socialPlatform='Facebook'/>
                </div>
            </div>
        </section>
    );
}