import React, { Component } from "react";

import "./_person-edit.scss";
import axios from "axios";


export default class PersonEdit extends Component {
    state = {
        person : {
        }
    };

    componentDidMount() {
        const person_detail_url = `http://127.0.0.1:8000/api/persons/${this.props.match.params.id}/`;

        const obj = {
            photo: this.state.photo,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            company: this.state.company,
            phone: {
                type1: this.state.type1,
                phone: this.state.phone
            },
            email: {
                type2: this.state.type2,
                email: this.state.email
            }
        };

        const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "multipart/form-data",
            }
        };

        axios.put(person_detail_url, {data: obj}, config)
            .then(obj => {
                console.log(obj.data)
            });
    };

    render() {
        const { photo,
                first_name,
                last_name,
                company,
                type1,
                phone,
                type2,
                email } = this.state;

        return (
            <div className={"body"}>
                <div className={"phone"}>
                    <form className={"form"}>
                        <input className={"photo"}
                               type="file"
                               name={"photo"}
                               value={photo || ""}
                               onChange={(event) => this.setState({photo: event.target.value})}/>
                        <input className={"form-control"}
                               type="text"
                               name={"first_name"}
                               value={first_name}
                               onChange={(event) => this.setState({first_name: event.target.value})}
                               placeholder={"First name"}/>
                        <input className={"form-control"}
                               type="text"
                               name={"last_name"}
                               value={last_name || ""}
                               onChange={(event) => this.setState({last_name: event.target.value})}
                               placeholder={"Last Name"}/>
                        <input className={"form-control"}
                               type="text"
                               name={"company"}
                               value={company || ""}
                               onChange={(event) => this.setState({company: event.target.value})}
                               placeholder={"Company"}/>
                        Phone <select className={"form-control"}
                                name={type1}
                                value={type1}
                                onChange={(event) => this.setState({type1: event.target.value})}>
                            <option value="home">Home</option>
                            <option value="work">Work</option>
                        </select>
                        <input className={"form-control"}
                               type="text"
                               name={"phone"}
                               value={phone || []}
                               onChange={(event) => this.setState({phone: event.target.value})}
                               placeholder={"Phone"}/>
                        Email <select className={"form-control"}
                                name={type2}
                                value={type2}
                                onChange={(event) => this.setState({type2: event.target.value})}>
                            <option value={"home"}>Home</option>
                            <option value={"work"}>Work</option>
                        </select>
                        <input className={"form-control"}
                               type="text"
                               name={"email"}
                               value={email || []}
                               onChange={(event) => this.setState({email: event.target.value})}
                               placeholder={"Email"}/>
                        <button className={"btn btn-dark btn-block"} type={"submit"}>
                            Add
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}