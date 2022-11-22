import React from "react";

export function EmployeeFormData(props) {
    return (
        <div className={"col-6 app-companyBottom-form__item"}>
            <label className={"app-companyBottom-form__item-description mb-2"}>Дата рождения</label>
            <input type={"date"} className={"form-control"} value={props.value}/>
        </div>
    )
}