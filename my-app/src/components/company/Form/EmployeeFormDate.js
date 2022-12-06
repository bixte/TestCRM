import React from "react";

export function EmployeeFormDate(props) {
    let val = props.value?.replace(".", "-").replace(".", "-");
    return (
        <div className={"col-6 app-companyBottom-form__item"}>
            <label className={"app-companyBottom-form__item-description text-secondary mb-2"}>Дата рождения</label>
            <input type={"date"}  className={"form-control"} onChange={props.onchange} value={val}/>
        </div>
    )
}