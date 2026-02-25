import { useEffect, useRef, useState } from 'react';
import './styles/image-transition.css';

type ImageType = {
    source: string;
    alt: string;
};

export default function ImageTransition({ img }: { img: ImageType }) {
    const myRef = useRef<HTMLImageElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        };
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsVisible(entry.isIntersecting);
        }, options);
        const currentElement = myRef.current;
        if (currentElement) observer.observe(currentElement);
        return () => {
            if (currentElement) observer.unobserve(currentElement);
        };
    }, [myRef]);

    return (
        <img
            className={`transition-image img-border ${isVisible ? 'start-transition' : ''}`}
            src={img.source}
            alt={img.alt}
            ref={myRef}
        ></img>
    );
}
