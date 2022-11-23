import React from "react";
import {EmployeeFormInput} from "./EmployeeFormInput";
import {EmployeeFormData} from "./EmployeeFormData";

export class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            family: props.data.family,
            name: props.data.name,
            secondName: props.data.secondName,
            dataBirthday: props.data.dataBirthday,
            city: props.data.city
        }
    }
    on
    familyHandler = (e) => this.setState({family: e.target.value});
    nameHandler = (e) => this.setState({name: e.target.value});
    secondNameHandler = (e) => this.setState({secondName: e.target.value});
    dataBirthdayHandler = (e) => this.setState({dataBirthday: e.target.value.toString()});
    cityHandler = (e) => this.setState({city: e.target.value});

    render() {
        return (
            <form className={"app-companyBottom-form d-flex"}>
                <div className={"col-6"}>
                    <EmployeeFormInput description={"Фамилия"}
                                       onchange={this.familyHandler}
                                       value={this.state.family}

                    />
                    <EmployeeFormInput description={"Имя"}
                                       onchange={this.nameHandler}

                                       value={this.state.name}/>
                    <EmployeeFormInput description={"Отчество"}
                                       onchange={this.secondNameHandler}
                                       value={this.state.secondName}/>
                </div>
                <div className={"col-6"}>
                    <EmployeeFormData description={"Дата родждения"}
                                      onchange={this.dataBirthdayHandler}

                                      value={this.state.dataBirthday}/>
                    <EmployeeFormInput description={"Город"}
                                       onchange={this.cityHandler}

                                       value={this.state.city}/>
                </div>
            </form>
        )
    }
}



