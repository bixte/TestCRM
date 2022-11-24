import React from "react";
import {EmployeeFormInput} from "./EmployeeFormInput";
import {EmployeeFormDate} from "./EmployeeFormDate";

export class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            family: props.data.family,
            name: props.data.name,
            secondName: props.data.secondName,
            dateBirthday: props.data.dateBirthday,
            city: props.data.city
        }
    }

    familyHandler = (e) => this.setState({family: e.target.value});
    nameHandler = (e) => this.setState({name: e.target.value});
    secondNameHandler = (e) => this.setState({secondName: e.target.value});
    dateBirthdayHandler = (e) => this.setState({dateBirthday: e.target.value});
    cityHandler = (e) => this.setState({city: e.target.value});
    changeDataHandler = (e) => {
        e.preventDefault();
        let data = this.state;
        fetch(`http://localhost:8000/API/employees.php?id=${this.props.id}`, {
            method: "POST",
            body: JSON.stringify(data)
        }).then(response=>response.text()).then(this.props.onchangeData);
    }
    deleteEmployee = ()=>{
        let data = this.state;
        fetch(`http://localhost:8000/API/deleteEmployee.php?id=${this.props.id}`, {
            method: "POST",
            body: JSON.stringify(data)
        }).then(response=>response.text()).then(this.props.onchangeData);
    }

    render() {
        return (
            <>
                <form className={"app-companyBottom-form"} onSubmit={this.changeDataHandler}>
                    <div>
                        <div style={{width: "150px"}} >
                            <img width={"100%"} alt={"profile"}
                                 src={"data:image/jpeg;base64,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"}/>
                        </div>
                    </div>
                    <div className={"d-flex"}>
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
                            <EmployeeFormDate description={"Дата родждения"}
                                              onchange={this.dateBirthdayHandler}
                                              value={this.state.dateBirthday}/>

                            <EmployeeFormInput description={"Город"}
                                               onchange={this.cityHandler}
                                               value={this.state.city}/>
                        </div>
                    </div>
                    <div className={"position-absolute form-employee-action d-flex"}>
                        <FormAction/>
                    </div>
                </form>
                <button className={"btn btn-danger form-employee-action__delete  p-3"} onClick={this.deleteEmployee} type={"button"}>Удалить</button>
            </>
        )
    }
}

function FormAction() {
    return (
            <button className={"btn btn-outline-success form-employee-action__change p-3"} type={"submit"}>Изменить</button>
    )
}



