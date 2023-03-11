const MyRecordCard = ( { ...props } ) => {
    const { text, subtext, image } = props;
    return <>
        <div className="my-record-card d-flex justify-content-center align-items-center bg-primary-300">
            <div className="image-group">
                <div className="overlay"></div>
                <img src={ image } alt={ text }/>
            </div>
            <div className="text-group d-flex flex-column align-items-center">
                <p className="image-text">{ text }</p>
                <button className="btn bg-primary-400 text-white">{ subtext }</button>
            </div>
        </div>
    </>
}
export default MyRecordCard;
