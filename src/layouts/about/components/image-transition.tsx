import { useEffect, useRef, useState } from 'react';
import './styles/image-transition.css';

type ImageType = {
    source: string;
    alt: string;
};

export default function ImageTransition({ img }: { img: ImageType }) {
    const myRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsVisible(entry.isIntersecting);
        });
        if (myRef.current) observer.observe(myRef.current);
        return () => {
            if (myRef.current) observer.unobserve(myRef.current);
        };
    }, [myRef, options]);

    return (
        <img
            className={`transition-image img-border ${isVisible ? 'start-transition' : ''}`}
            src={img.source}
            alt={img.alt}
            ref={myRef}
        ></img>
    );
}
