import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/nav/NavigationBar";
import CompanyPage from "./components/company/CompanyPage";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: null
        }
    }
    navigationClickHandler = (e) => {
        this.setState({
            currentPage: e.target.value
        });
    }

    render() {
        return (
            <div className={"d-flex app__page"}>
                <NavigationBar clickHandler={this.navigationClickHandler}/>
                <main style={{width: "100%"}} className={"app__page-content"}>
                    <CompanyPage/>
                </main>
            </div>)
    }
}

const rootNode = document.getElementById("app");
const root = ReactDOM.createRoot(rootNode);
root.render(<App/>);

