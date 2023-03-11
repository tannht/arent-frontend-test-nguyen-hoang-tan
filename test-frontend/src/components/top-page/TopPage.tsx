import { PercentageGraph } from "../charts/percentage-graph";

const TopPage = () => {
    return <>
        <div className="top-content row container">
            <div className="column-one col-md-4 achievement-rate">

            </div>
            <div className="column-two col-md-8 percentage-graph">
                <PercentageGraph/>
            </div>
        </div>
    </>;
};
export default TopPage;
