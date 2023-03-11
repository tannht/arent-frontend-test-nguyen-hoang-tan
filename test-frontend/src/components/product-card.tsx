const ProductCard = ( { ...props } ) => {
    return <>
        <div className="product-card">
            <div className="product-card__image">
                <img src="https://picsum.photos/500/500" alt=""/>
            </div>
            <div className="product-card__title">
                <a href={ props.link }>{ props.title }</a>
            </div>
        </div>
    </>
}
export default ProductCard;
