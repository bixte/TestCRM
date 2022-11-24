import {EmployeeFormInput} from "../EmployeeFormInput";
import {EmployeeFormDate} from "../EmployeeFormDate";
import React from "react";

export class CompanyTopCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            family: "",
            name: "",
            secondName: "",
            dateBirthday: "",
            city: ""
        }
    }

    familyHandler = (e) => this.setState({family: e.target.value});
    nameHandler = (e) => this.setState({name: e.target.value});
    secondNameHandler = (e) => this.setState({secondName: e.target.value});
    dateBirthdayHandler = (e) => this.setState({dateBirthday: e.target.value});
    cityHandler = (e) => this.setState({city: e.target.value});
    submitHandler = (e) => {
        e.preventDefault();
        let data = this.state;
        console.log(data)
        fetch(`http://localhost:8000/API/employees.php`, {
            method: "POST",
            body: JSON.stringify(data)
        }).then(response => response.text()).then(this.props.onchangeData);
        this.props.onchangeData();

    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className={"app-company-top-form__content d-flex justify-content-between col-12"}>
                    <div className={"col-6"}>
                        <EmployeeFormInput onchange={this.familyHandler} description={"Фамилия"}
                                           value={this.state.family}/>
                        <EmployeeFormInput onchange={this.nameHandler} description={"Имя"}
                                           value={this.state.name} />
                        <EmployeeFormInput onchange={this.secondNameHandler} description={"Отчество"}
                                           value={this.state.secondName}/>
                    </div>
                    <div className={"col-6"}>
                        <EmployeeFormDate onchange={this.dateBirthdayHandler} value={this.state.dateBirthday}/>
                        <EmployeeFormInput onchange={this.cityHandler} description={"Город"} value={this.state.city}/>
                        <button type={"submit"} className={"btn btn-success mt-4"}>Создать</button>
                    </div>
                </div>
            </form>
        )
    }
}