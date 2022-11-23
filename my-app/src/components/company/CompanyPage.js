import React from "react";
import {CompanyTop} from "./CompanyTop";
import {CompanyBottom} from "./CompanyBottom";
import Employee from "../../Data/Employee";

export default class CompanyPage extends React.Component {

    componentDidMount() {
        fetch("http://localhost:8000/API/employees.php", {method: "GET"})
            .then(res => res.json())
            .then(
                res => {
                    this.setState({
                        isLoaded: true,
                        employees: res
                    })
                }
            )
    }

    constructor(props) {
        super(props);
        this.state = {
            currentRow: 5,
            isLoaded: false,
            employees: []
        }
    }

    changeCurrentRow = (id) => {
        this.setState({
            currentRow: id
        })
    }

    render() {
        const {isLoaded, currentRow, employees} = this.state;
        if (!isLoaded) return <div>Загрузка</div>
        else {
            return (
                <>
                    <CompanyTop changeCurrentRow={this.changeCurrentRow} data={employees}/>
                    {<CompanyBottom id={currentRow}
                                    data={employees.find(emp => emp.id === currentRow) ?? new Employee()}/>}
                </>
            );
        }
    }
}




