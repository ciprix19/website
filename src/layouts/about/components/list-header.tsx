type ListAndHeaderType = {
    sectionSubTitle: string;
    list: Array<string>;
};
export default function ListAndHeader({
    sectionSubTitle,
    list,
}: ListAndHeaderType) {
    return (
        <div>
            {sectionSubTitle && <h3>{sectionSubTitle}</h3>}
            <br />
            <ul>
                {list.map((listItem) => (
                    <li key={listItem}>{listItem}</li>
                ))}
            </ul>
        </div>
    );
}
