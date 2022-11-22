import React from "react";
import {DataRepository} from "../../Data/DataRepository";
import {CompanyTop} from "./CompanyTop";
import {CompanyBottom} from "./CompanyBottom";

export default class CompanyPage extends React.Component {
    employees = new DataRepository().getEmployees();

    constructor(props) {
        super(props);
        this.state = {
            currentRow: null
        }
    }

    changeCurrentRow = (e) => {
        let id = e.target.parentElement.dataset["id"];
        this.setState({
            currentRow: id
        })
    }

    render() {

        let idEmployee = this.state.currentRow;
        return (
            <>
                <CompanyTop changeCurrentRow={this.changeCurrentRow} data={this.employees}/>
                {idEmployee && <CompanyBottom data={this.employees[idEmployee]}/>}
            </>
        );
    }
}




