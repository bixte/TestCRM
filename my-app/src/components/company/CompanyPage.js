import React from "react";
import {CompanyTop} from "./CompanyTop";
import {CompanyBottom} from "./CompanyBottom";
import Employee from "../../Data/Employee";


async function getEmps() {
    let response = await fetch("http://localhost:8000/API/employees.php", {method: "GET"});
    return await response.json()

}

export default class CompanyPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentRow: null,
            isLoaded: false,
            employees: null
        }
    }

    componentDidMount() {
        getEmps().then(res =>
            this.setState({
                isLoaded: true,
                employees: res
            })
        )
    }

    changeDataHandler = () => {
        getEmps().then(res => this.setState({
            employees: res
        }));

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
                    <CompanyTop changeCurrentRow={this.changeCurrentRow} onchangeData={this.changeDataHandler} data={employees}/>
                    {<CompanyBottom onchangeData={this.changeDataHandler} id={currentRow}
                                    data={employees.find(emp => emp.id === currentRow) ?? new Employee()}/>}
                </>
            );
        }
    }
}




