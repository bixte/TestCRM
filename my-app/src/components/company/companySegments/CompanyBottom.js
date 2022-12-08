import React from "react";
import {EmployeeForm} from "./Form/Form";

export class CompanyBottom extends React.Component {
    render() {
        return (
            <div className={"app-companyBottom position-relative"}>
                <h3>Данные о сотруднике</h3>
                <EmployeeForm data={this.props.data} onchangeData={this.props.onchangeData} key={this.props.data.id} id={this.props.data.id}/>
            </div>
        );
    }
}