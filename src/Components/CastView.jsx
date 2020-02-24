import React from "react";


function CastView(props) {
        return <div>
                <a onClick={() => props.castButton()} className="button is-1" style={{ margin: "0" }}>Close</a>
        </div>;
}
export default CastView;