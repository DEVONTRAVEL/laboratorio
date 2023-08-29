import React from "react";
import { Link } from "react-router-dom";

interface Props {
    message?: string;
    data?: string;
    url?: string;
    setActiveNoticacoes?:any;
}

const Item: React.FC<Props> = ({ message, url, data, setActiveNoticacoes }) => {

    return (
        <li>
            <Link to={`${url}`} className="dropdown-item" onClick={setActiveNoticacoes}>
                <div>
                    <i className="fa fa-envelope fa-fw"></i> {message}
                    <span className="float-right text-muted small">{data}</span>
                </div>
            </Link>
        </li>
    )
}
export default Item