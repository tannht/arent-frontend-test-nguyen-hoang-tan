const ColumnCard = ( { ...props } ) => {
    return <>
        <div className="column-card">
            <div className="column-card__image">
                <img src="https://picsum.photos/600/600" alt=""/>
                <div className="title">
                    <a href={ props.link }>{ props.title }</a>
                </div>
            </div>
            <div className="column-card__short_desc">
                魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
            </div>
            <div className="column-card__tags">
                #魚料理 #和食 #DHA
            </div>
        </div>
    </>
}
export default ColumnCard;
