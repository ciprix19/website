import './styles/section-two-column.css';

import type { ReactNode } from 'react';

export function SectionTwoColumn({
    isReversed,
    children,
}: {
    isReversed: boolean;
    children: ReactNode;
}) {
    return (
        <section className="two-column-header">
            <div
                className={`two-column-layout wrapper ${isReversed ? 'reverse' : ''}`}
            >
                {children}
            </div>
        </section>
    );
}

export function SectionTwoColumnHeader({
    sectionTitle,
    children,
}: {
    sectionTitle: string;
    children: ReactNode;
}) {
    return (
        <section id="about" className="two-column-header">
            <h2>{sectionTitle}</h2>
            <div className="two-column-layout wrapper">{children}</div>
        </section>
    );
}
