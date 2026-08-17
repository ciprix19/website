import { useEffect, useState } from 'react';
import './styles/footer.css';
import { getVisits } from '../../logic/visits';

export default function Footer() {
    const [visitsCount, setVisitsCount] = useState<number | null>(null)

    const fetchVisits = async () => {
        try {
            const visits = await getVisits()
            if (visits) setVisitsCount(visits)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchVisits()
    }, [])

    return (
        <footer>
            <a>© 2026 ciprianbarbuta@gmail.com</a>
            {visitsCount && <p>No. of views: {visitsCount}</p>}
            <p>
                The logo and SVG assets were created by my friend and designer{' '}
                <a
                    href="https://www.linkedin.com/in/raluca-mironiuc-3b06b6290/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <u>Raluca Mironiuc</u>
                </a>
                .
            </p>
        </footer>
    );
}
