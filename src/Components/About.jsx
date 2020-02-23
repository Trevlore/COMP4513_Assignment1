import React from "react";


class About extends React.Component {
    render() {
        return (
            <div className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">About</p>
                        <button className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <ul>
                            <li><a href="https://bulma.io/">Bulma CSS</a> </li>
                            <li><a href="https://reacttraining.com/react-router/web/example/basic">React Router</a></li>
                            <li><a href="https://www.npmjs.com/package/react-input-range">react-input-range</a></li>
                        </ul>
                    </section>
                    <footer className="modal-card-foot">
                        {/* <button className="button is-primary">Close</button> */}
                    </footer>
                </div>
            </div>


        )
    }

}

export default About