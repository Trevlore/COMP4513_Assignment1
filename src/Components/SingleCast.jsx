import React from "react";

function SingleCast(props) {
        return  <tr>
        <td>{props.character}</td>
        <td>{props.name}</td>
        <td className="">
            <a  onClick={props.castButton}  className="button is-1" style={{margin : "0"}}>View</a>
        </td>
    </tr>
}
export default SingleCast;