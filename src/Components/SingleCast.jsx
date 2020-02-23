import React from "react";
import { Link } from "react-router-dom";

function SingleCast(props) {
        return  <tr>
        <td>{props.character}</td>
        <td>{props.name}</td>
        <td className="">
            <Link to={"/Movies/Details?id=" + props.id} path={props.id}  className="button is-1" style={{margin : "0"}}>View</Link>
        </td>
    </tr>
}
export default SingleCast;