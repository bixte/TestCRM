import React from "react";
import { Table} from "reactstrap";
import {TableHeader} from "../materials/table/TableHeader";
import {TableBody} from "../materials/table/TableBody";
import {CompanyTopCreateForm} from "./Form/top/CompanyTopCreateForm";
import TableNavigation from "../materials/table/TableNavigation";
import TableMenu from "../materials/table/TableMenu";
import TableManage from "../materials/table/TableManage";

let heads = ["Id", "Фамилия", "Имя", "Отчество", "Дата рождения", "Город"]

export class CompanyTop extends React.Component {
    render() {
        return (
            <div className={"app-company-top position-relative"}>
                <div className={"app-company-top-content"}>
                    <Table className={"app-company-top__table table-bordered table-hover table-responsive"}>
                        <TableHeader heads={heads}/>
                        <TableBody changeCurrentRow={this.props.changeCurrentRow} data={this.props.data}/>
                    </Table>
                    <TableManage/>
                    <div className={'app-company-top-content-create collapse'}>
                        <CompanyTopCreateForm onchangeData={this.props.onchangeData}/>
                    </div>
                </div>
            </div>
        );
    }
}

