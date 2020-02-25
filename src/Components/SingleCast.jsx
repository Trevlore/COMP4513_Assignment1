import React from "react";

function SingleCast(props) {
    console.log(props)
        return  <tr>
        <td>{props.character}</td>
        <td>{props.name}</td>
        <td className="">
            <a onClick={() => props.castButton(props.id)}  className="button is-1" style={{margin : "0"}}>View</a>
        </td>
    </tr>
}
export default SingleCast;