import type { ReactNode } from 'react';
import './styles/div-header.css';

type DivHeaderType = {
    isWrapped: boolean;
    sectionTitle: string;
    children: ReactNode;
};
export default function DivHeader({
    isWrapped,
    sectionTitle,
    children,
}: DivHeaderType) {
    return (
        <div className={isWrapped ? 'wrapper' : ''}>
            <h3 className="div-header">{sectionTitle}</h3>
            {children}
        </div>
    );
}
