import { useEffect, useRef, useState, type ReactNode } from 'react';
import './styles/resizable-div.css';

type ResizableDivType = {
    className: string;
    children: ReactNode;
};

// i had some issues with the card-expand component, where i was using not using display: flex in the .active class
// and also not using display: none as default (when the card is closed)
// i wanted to make my resizable div... anyway this class is good for finding the height and width of a div
// however display none does not work with transitions... neeed to revisit this part
// todo: remove max-height from the card-expand and implement dynamic height computation
export default function ResizableDiv({
    className,
    children,
}: ResizableDivType) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const observedElementRef = useRef(null);

    useEffect(() => {
        if (observedElementRef.current) {
            const observer = new ResizeObserver((entries) => {
                for (const entry of entries) {
                    setDimensions({
                        width: entry.contentRect.width,
                        height: entry.contentRect.height,
                    });
                }
            });

            observer.observe(observedElementRef.current);

            return () => {
                observer.disconnect();
            };
        }
    }, []);

    return (
        <div ref={observedElementRef} className={className}>
            <p>width: {dimensions.width}</p>
            <p>height: {dimensions.height}</p>
            <div>test</div>
            {children}
        </div>
    );
}
