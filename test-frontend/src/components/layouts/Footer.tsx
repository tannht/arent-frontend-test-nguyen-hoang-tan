import { Link } from "react-router-dom";

const Footer = () => {
    const links = ['会員登録', '運営会社', '利用規約', '個人情報の取扱について', '特定商取引法に基づく表記', 'お問い合わせ']
    return <>
        <footer className="footer bg-dark-600 d-flex align-items-center">
            <div className="footer__content">
                <ul className="bottom_menu d-flex gap-10">
                    { links.length > 0 && links.map( ( link, index ) => (
                        <li key={ index }>
                            <Link to="#">{ link }</Link>
                        </li>
                    ) ) }
                </ul>
            </div>
        </footer>
    </>
};
export default Footer;
