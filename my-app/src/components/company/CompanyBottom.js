import React from "react";
import {EmployeeForm} from "./Form/Form";

export class CompanyBottom extends React.Component {
    render() {
        return (
            <div className={"app-companyBottom"}>
                <h3>Данные о сотруднике:{this.props.id}</h3>
                <EmployeeForm data={this.props.data} key={this.props.data.id}/>
            </div>
        );
    }
}