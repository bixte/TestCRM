import React from "react";

export function EmployeeFormInput(props) {
    return (
        <div className={"col-6 app-companyBottom-form__item"}>
            <label className={"app-companyBottom-form__item-description mb-2"}>{props.description}</label>
            <input type={"text"} className={"form-control"} value={props.value}/>
        </div>
    )
}