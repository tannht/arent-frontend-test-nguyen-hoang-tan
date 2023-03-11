import { PercentageGraph } from "../../components/charts/percentage-graph";
import iconKnife from "../../assets/icons/icon-knife.svg";
import iconCup from "../../assets/icons/icon-cup.svg";
import ProductCard from "../../components/product-card";

const TopPage = () => {

    return <>
        <div className="top-content row container">
            <div className="column-one col-md-4 achievement-rate">

            </div>
            <div className="column-two col-md-8 percentage-graph">
                <PercentageGraph/>
            </div>
        </div>
        <div className="middle inner-content p-4">
            <div className="navigate-items d-flex justify-content-around">
                <div className="navigate-item d-flex flex-column align-items-center justify-content-center">
                    <div className="navigate-item__icon">
                        <img src={ iconKnife } alt=""/>
                    </div>
                    <div className="navigate-item__text">
                        <p>Morning</p>
                    </div>
                </div>
                <div className="navigate-item d-flex flex-column align-items-center justify-content-center">
                    <div className="navigate-item__icon">
                        <img src={ iconKnife } alt=""/>
                    </div>
                    <div className="navigate-item__text">
                        <p>Lunch</p>
                    </div>
                </div>
                <div className="navigate-item d-flex flex-column align-items-center justify-content-center">
                    <div className="navigate-item__icon">
                        <img src={ iconKnife } alt=""/>
                    </div>
                    <div className="navigate-item__text">
                        <p>Dinner</p>
                    </div>
                </div>
                <div className="navigate-item d-flex flex-column align-items-center justify-content-center">
                    <div className="navigate-item__icon">
                        <img src={ iconCup } alt=""/>
                    </div>
                    <div className="navigate-item__text">
                        <p>Snack</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom row inner-content">
            <div className="col-md-3 mb-3">
                <ProductCard title="05.20.Morning" link="#" image="/images/column-1.jpg"/>
            </div>
            <div className="col-md-3 mb-3">
                <ProductCard title="05.21.Lunch" link="#"/>
            </div>
            <div className="col-md-3 mb-3">
                <ProductCard title="05.21.Dinner" link="#"/>
            </div>
            <div className="col-md-3 mb-3">
                <ProductCard title="05.21.Snack" link="#"/>
            </div>
            <div className="col-md-3 mb-3">
                <ProductCard title="05.20.Morning" link="#"/>
            </div>
            <div className="col-md-3 mb-3">
                <ProductCard title="05.21.Lunch" link="#"/>
            </div>
            <div className="col-md-3 mb-3">
                <ProductCard title="05.21.Dinner" link="#"/>
            </div>
            <div className="col-md-3 mb-3">
                <ProductCard title="05.21.Snack" link="#"/>
            </div>
        </div>
        <div className="bottom inner-content d-flex justify-content-center mb-5">
            <button className="btn bg-primary-linear-gradient text-white">記録をもっと見る</button>
        </div>
    </>;
};
export default TopPage;
