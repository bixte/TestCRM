import React from "react";
import {Table} from "reactstrap";
import {TableBody, TableHeader} from "../materials/Table";

const headers = ["Id","Фамилия", "Имя", "Отчество", "Дата рождения", "Город"]

export class CompanyTop extends React.Component {
    render() {
        return (
            <div className={"app-company-top"}>
                <div className={"app-company-top__content"}>
                    <Table className={"app-companyTop__table table-bordered table-hover table-responsive"}>
                        <TableHeader heads={headers}/>
                        <TableBody changeCurrentRow={(event) => this.props.changeCurrentRow(event)} data={this.props.data}/>
                    </Table>
                </div>
            </div>
        );
    }
}
