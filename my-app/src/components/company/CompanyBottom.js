import React from "react";
import {EmployeeForm} from "./Form/Form";

export class CompanyBottom extends React.Component {
    render() {
        return (
            <div className={"app-companyBottom"}>
                <EmployeeForm data={this.props.data}/>
            </div>
        );
    }
}