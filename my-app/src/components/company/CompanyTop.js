import React from "react";
import {Table} from "reactstrap";
import {TableBody, TableHeader} from "../materials/Table";

export class CompanyTop extends React.Component {
    render() {
        return (
            <div className={"app-companyTop"}>
                <div className={"app-companyTop-content"}>
                    <Table className={"app-companyTop__table table-bordered table-hover table-responsive"}>
                        <TableHeader heads={["Id","Фамилия", "Имя", "Отчество", "Дата рождения", "Город"]}/>
                        <TableBody changeCurrentRow={this.props.changeCurrentRow} data={this.props.data}/>
                    </Table>
                </div>
            </div>
        );
    }
}