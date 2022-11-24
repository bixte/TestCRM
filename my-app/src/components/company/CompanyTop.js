import React from "react";
import {Button, Table} from "reactstrap";
import {TableHeader} from "../materials/table/TableHeader";
import {TableBody} from "../materials/table/TableBody";
import {CompanyTopCreateForm} from "./Form/top/CompanyTopCreateForm";

let heads = ["Id", "Фамилия", "Имя", "Отчество", "Дата рождения", "Город"]

export class CompanyTop extends React.Component {
    render() {
        return (
            <div className={"app-company-top position-relative"}>
                <div className={"app-company-top-content "}>
                    <Table className={"app-company-top__table table-bordered table-hover table-responsive"}>
                        <TableHeader heads={heads}/>
                        <TableBody changeCurrentRow={this.props.changeCurrentRow} data={this.props.data}/>
                    </Table>
                    <div className={"position-absolute app-company-top-create"}>
                        <Button className={"btn btn-success p-2"} data-bs-toggle={"collapse"}
                                data-bs-target={".app-company-top-content-create"} aria-expanded="false"
                                aria-controls="app-company-top-content-create">Create
                        </Button>
                    </div>
                    <div className={'app-company-top-content-create collapse'}>
                        <CompanyTopCreateForm onchangeData={this.props.onchangeData}/>
                    </div>
                </div>
            </div>
        );
    }
}

