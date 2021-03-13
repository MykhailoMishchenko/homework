import React from "react";
import {getRandomIntInclusive} from "./Random";
import './Table.css'

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rendered: [],
            selectedValues: ["all"]
        }
    }


    generatingFullName = () => {
        const name = ["Smith", "Brown", "Miller", "Johnson", "Jones", "Davis", "Williams", "Wilson", "Clark", "Taylor"],
            soName = ["John", "William", "James", "George", "Henry", "Thomas", "Charles", "Joseph", "Samuel", "David"];


           return `${name[getRandomIntInclusive(0, 9)]} 
                   ${soName[getRandomIntInclusive(0, 9)]} 
                   ${getRandomIntInclusive(20, 60)}`

    }

    generatingStatus = () => {
        const statusArr = ["Active", "Seldom", "Remove"];
        return `${statusArr[getRandomIntInclusive(0, 2)]}`
    }

    generatingStatus =  () => {
        const  statusArr = ["Active", "Seldom", "Remove"];
        return `${statusArr[getRandomIntInclusive(0,2)]}`
    }


    render() {
        const listArr = new Array(100);
        let status = null;
        let tr = [];
        let colorStatus = null

            for(let i=0; i< listArr.length; i++){
                status = this.generatingStatus(0,2)

                switch (status){
                    case 'Active':
                    colorStatus = 'active';
                    break;
                    case 'Seldom':
                        colorStatus = 'seldom';
                        break;
                    case 'Remove':
                        colorStatus = 'remove';
                }
                if (
                    this.state.selectedValues.length === 1 &&
                    this.state.selectedValues[0] === "all"
                ) {
                    tr.push(
                        <div className={"container-table"}>

                            <div className={"table"}>
                                <div className={"section-table"}>{this.generatingFullName()}</div>
                                <div className={"section-table"}>{getRandomIntInclusive(20,60)}</div>
                                <div
                                    className={"section-table"}>
                                    <div className={`circle ${colorStatus}`}></div>
                                    {status}</div>
                            </div>
                        </div>
                    );
                }

                if (this.state.selectedValues.includes(status.toLowerCase())) {
                    tr.push(
                        <div className={"container-table"}>

                            <div className={"table"}>
                                <div className={"section-table"}>{this.generatingFullName()}</div>
                                <div className={"section-table"}>{getRandomIntInclusive(20,60)}</div>
                                <div
                                    className={"section-table"}>
                                    <div className={`circle ${colorStatus}`}></div>
                                    {status}</div>
                            </div>
                        </div>
                    );
                }
            }



        return (
            <div>
                <div className={"header-table"}>
                    <div>Name</div>
                    <div>Age</div>
                    <div>Status</div>
                </div>
                <div
                className='checkbox'
                 onChange={(e) => {
                    if (e.target.value === "all") {
                        this.setState({
                            selectedValues: ["all"]
                        });
                    } else {
                        if (!this.state.selectedValues.includes(e.target.value)) {
                            this.setState({
                                selectedValues: [
                                    ...this.state.selectedValues.filter(
                                        (item) => item !== "all"
                                    ),
                                    e.target.value
                                ]
                            });
                        } else {
                            this.setState({
                                selectedValues: [
                                    ...this.state.selectedValues.filter(
                                        (item) => item !== e.target.value
                                    )
                                ]
                            });
                        }
                    }
                }}
                >
                    <input checked={this.state.selectedValues.includes('all')} type="checkbox" name="all" value="all"/>
                    <label htmlFor="All">All</label>

                    <input checked={this.state.selectedValues.includes('active')} type="checkbox" name="active" value="active"/>
                    <label htmlFor="active">Active</label>

                    <input checked={this.state.selectedValues.includes('seldom')} type="checkbox" name="seldom" value="seldom"/>
                    <label htmlFor="seldom">Seldom</label>

                    <input checked={this.state.selectedValues.includes('remove')} type="checkbox" name="remove" value="remove"/>
                    <label htmlFor="remove">Remove</label>
                </div>
                {tr}
            </div>
        )
    }
}

export default Table
