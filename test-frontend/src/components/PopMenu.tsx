import { Link } from "react-router-dom";

const PopMenu = ( ...prop: any ) => {
    return (
        <div className="drawr-menu">
            <ul>
                <li className="drawr-menu__item">
                    <Link to="/">自分の記録</Link>
                </li>
                <li className="drawr-menu__item">
                    <Link to="/">体重グラフ</Link>
                </li>
                <li className="drawr-menu__item">
                    <Link to="/">目標</Link>
                </li>
                <li className="drawr-menu__item">
                    <Link to="/">選択中のコース</Link>
                </li>
                <li className="drawr-menu__item">
                    <Link to="/column">コラム一覧</Link>
                </li>
                <li className="drawr-menu__item">
                    <Link to="/">設定</Link>
                </li>
            </ul>
        </div>
    )
}
export default PopMenu
