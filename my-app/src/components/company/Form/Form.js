import React from "react";
import {EmployeeFormInput} from "./EmployeeFormInput";
import {EmployeeFormData} from "./EmployeeFormData";

export class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            family:this.props.data.family,
            name:this.props.data.name,
            secondName:this.props.data.secondName,
            dataBirthday:this.props.data.dataBirthday,
            city:this.props.data.city
        }
    }
    render() {
        let employee = this.props.data;
        return (
            <form className={"app-companyBottom-form d-flex"}>
                <div className={"col-6"}>
                    <EmployeeFormInput description={"Фамилия"} value={employee?.family}/>
                    <EmployeeFormInput description={"Имя"} value={employee?.name}/>
                    <EmployeeFormInput description={"Отчество"} value={employee?.secondName}/>
                </div>
                <div className={"col-6"}>
                    <EmployeeFormData description={"Дата родждения"} value={employee?.dataBirthday}/>
                    <EmployeeFormInput description={"Город"} value={employee?.city}/>
                </div>
            </form>
        )
    }
}



