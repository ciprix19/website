
type ImageType ={
    source: string;
    alt: string;
}
type SectionTwoColumnImageType = {
    isWrapped: boolean;
    isImageFirst: boolean
    img: ImageType;
    sectionSubTitle: string;
    list: Array<string>;
}
export default function SectionTwoColumnImage({ isWrapped, isImageFirst, img, sectionSubTitle, list } : SectionTwoColumnImageType) {
    return (
        <section>
            <div className={`two-column-layout ${isWrapped ? 'wrapper' : ''}`}>
                {isImageFirst ? (
                    <>
                        <img className='img-border' src={img.source} alt={img.alt}></img>
                        <div>
                            <h2>{sectionSubTitle}</h2>
                            <br></br>
                            <ul>
                                {list.map(listItem => (
                                    <li key={listItem}>{listItem}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <h2>{sectionSubTitle}</h2>
                            <br></br>
                            <ul>
                                {list.map(listItem => (
                                    <li key={listItem}>{listItem}</li>
                                ))}
                            </ul>
                        </div>
                        <img className='img-border' src={img.source} alt={img.alt}></img>
                    </>
                )}
            </div>
        </section>
    );
}