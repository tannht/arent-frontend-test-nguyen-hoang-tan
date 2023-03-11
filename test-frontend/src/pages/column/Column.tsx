import RecommendedCard from "../../components/RecommendedCard";
import ColumnCard from "../../components/ColumnCard";

const Column = () => {
    return <>
        <div className="row inner-content mb-5">
            <div className="col-md-3 mt-5">
                <RecommendedCard
                    title="RECOMMENDED COLUMN"
                    link="#"
                    textLink="オススメ"
                />
            </div>
            <div className="col-md-3 mt-5">
                <RecommendedCard
                    title="RECOMMENDED DIET"
                    link="#"
                    textLink="ダイエット"
                />
            </div>
            <div className="col-md-3 mt-5">
                <RecommendedCard
                    title="RECOMMENDED BEAUTY"
                    link="#"
                    textLink="美容"
                />
            </div>
            <div className="col-md-3 mt-5">
                <RecommendedCard
                    title="RECOMMENDED HEALTH"
                    link="#"
                    textLink="健康"
                />
            </div>
        </div>
        <div className="bottom-content row inner-content mb-5">
            { [1, 2, 3, 4, 5, 6, 7, 8].map( ( item, index ) => {
                return (
                    <div className="col-md-3" key={index}>
                        <ColumnCard title="2021.05.17 23:25" link="#" />
                    </div>
                )
            } ) }
        </div>
        <div className="bottom inner-content d-flex justify-content-center mb-5">
            <button className="btn bg-primary-linear-gradient text-white">記録をもっと見る</button>
        </div>
    </>
};
export default Column;
