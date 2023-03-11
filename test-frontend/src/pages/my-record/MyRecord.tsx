import MyRecordCard from "../../components/MyRecordCard";
import { PercentageGraph } from "../../components/charts/percentage-graph";
import { useState } from "react";
import MyDiaryCard from "../../components/MyDiaryCard";

const MyRecord = () => {
    const [currentBtn, setCurrentBtn] = useState( 1 );
    const handleButtonClick = ( number: number ) => {
        setCurrentBtn( number );
    }

    return <>
        <div className=" row inner-content top-record mb-5">
            <div className="col-md-4">
                <MyRecordCard
                    text="BODY RECORD"
                    subtext="自分のカラダの記録"
                    image="https://picsum.photos/800/800"
                />
            </div>
            <div className="col-md-4">
                <MyRecordCard
                    text="MY EXERCISE"
                    subtext="自分の運動の記録"
                    image="https://picsum.photos/800/800"
                />
            </div>
            <div className="col-md-4">
                <MyRecordCard
                    text="MY DIARY"
                    subtext="自分の日記"
                    image="https://picsum.photos/800/800"
                />
            </div>

        </div>
        <div className="my-record-graphs inner-content p-4 bg-dark mt-5">
            { currentBtn === 1 && <PercentageGraph/> }
            { currentBtn === 2 && <PercentageGraph/> }
            { currentBtn === 3 && <PercentageGraph/> }
            { currentBtn === 4 && <PercentageGraph/> }
            <div className="item-graphs d-flex gap-3">
                <button className="btn text-white bg-primary-300 justify-content-center align-items-center d-flex"
                        onClick={ () => handleButtonClick( 1 ) }>日
                </button>
                <button className="btn text-white bg-primary-300 justify-content-center align-items-center d-flex"
                        onClick={ () => handleButtonClick( 2 ) }>週
                </button>
                <button className="btn text-white bg-primary-300 justify-content-center align-items-center d-flex"
                        onClick={ () => handleButtonClick( 3 ) }>月
                </button>
                <button className="btn text-white bg-primary-300 justify-content-center align-items-center d-flex"
                        onClick={ () => handleButtonClick( 4 ) }>年
                </button>
            </div>
        </div>
        <div className="my-diary inner-content mt-3">
            <h3 className="title">MY DIARY</h3>
            <div className="row">
                { [1, 2, 3, 4, 5, 6, 7, 8].map( ( item, index ) => {
                    return (
                        <>
                            <div className="col-md-3 mb-3" key={index}>
                                <MyDiaryCard date="2021.05.21" time="23.25" content=""/>
                            </div>
                        </>
                    )
                } ) }
            </div>
        </div>
        <div className="bottom inner-content d-flex justify-content-center mb-5">
            <button className="btn bg-primary-linear-gradient text-white">記録をもっと見る</button>
        </div>
    </>;
};
export default MyRecord;
