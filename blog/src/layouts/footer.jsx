import React from "react"

import "./../css/site.css"

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: false
        };
    }

    render() {
        return (
            // <footer style={{ backgroundColor: "#f7f7f7" }}>
            <footer>
                <div className="container py-5 fontsize-smaller" style={{textAlign: "center"}}>
                    <div>© oaevensen.com 2019</div>
                    <div>Created using <a href="https://www.gatsbyjs.org">Gatsby</a>, <a href="https://reactjs.org/">ReactJs</a> and hosted on <a href="https://www.netlify.com/">Netlify</a></div>
                </div>
            </footer>
        );
    }
}

export default Footer;

