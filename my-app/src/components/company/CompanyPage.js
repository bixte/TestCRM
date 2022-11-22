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
        console.log(e)
        this.setState({
            currentRow: e
        })
    }

    render() {

        let idEmployee = this.state.currentRow;
        return (
            <>
                <CompanyTop changeCurrentRow={(event) => this.changeCurrentRow(event)} data={this.employees}/>
                {idEmployee && <CompanyBottom data={this.employees[idEmployee]}/>}
            </>
        );
    }
}




