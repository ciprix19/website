import { useState, type ReactNode } from 'react';
import './styles/card-expand.css';

type CardButtonExpandType = {
    title: string;
    children: ReactNode;
};
//todo: remove max-height from the card-expand and implement dynamic height computation
export default function CardButtonExpand({
    title,
    children,
}: CardButtonExpandType) {
    const [isOpen, setIsOpen] = useState(
        title === 'Backend and Scripting' || title === 'Frontend Technologies' ? true : false,
    );

    return (
        <div className="card-expand">
            <h3>{title}</h3>
            <div className={`expandable ${isOpen ? 'active' : ''}`}>
                <div>{children}</div>
            </div>
            <button
                className={`expand-button`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {' '}
                <img
                    className={isOpen ? 'open' : ''}
                    src="images/icons/down-chevron.svg"
                ></img>
            </button>
        </div>
    );
}
