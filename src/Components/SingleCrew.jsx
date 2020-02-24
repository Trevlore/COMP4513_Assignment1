import React from "react";
import { Link } from "react-router-dom";

function SingleCrew(props) {
        return  <tr>
        <td>{props.department}</td>
        <td>{props.job}</td>
        <td>{props.name}</td>
    </tr>
}
export default SingleCrew;