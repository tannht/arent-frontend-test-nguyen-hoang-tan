import line from '../assets/icons/line.svg';
const RecommendedCard = ( { ...props } ) => {

    return <>
        <div className="my-recommended-card bg-dark-600 d-flex justify-content-center align-items-center flex-column">
            <div className="recommended-title">
                { props.title }
            </div>
            <div className="break-line">
                <img src={ line } alt=""/>
            </div>
            <div className="recommended-link">
                <a href={ props.link }> { props.textLink }</a>
            </div>
        </div>
    </>;
};
export default RecommendedCard;
