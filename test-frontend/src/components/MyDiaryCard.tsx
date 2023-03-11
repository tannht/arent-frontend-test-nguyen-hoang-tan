const MyDiary = ( { ...props } ) => {


    return <>
        <div className="my-diary-card bg-light">
            <div className="diary-date">
                {props.date}
            </div>
            <div className="diary-time">
                {props.time}
            </div>
            <div className="diary-content">
                私の日記の記録が一部表示されます。
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
            </div>
        </div>
    </>;
};
export default MyDiary;
