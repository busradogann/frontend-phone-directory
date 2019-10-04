import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./_person-detail.scss";

import telephone from "./telephone.svg";
import edit from "./edit.svg";


export default class PersonDetail extends Component {

    person_detail_url = `http://127.0.0.1:8000/api/persons/${this.props.match.params.id}/`;

    state = {
        person: {
            phone: {
                type: "",
                phone: "",
            },
            email: {
                type : "",
                email : "",
            }
        },
    };

    calling = () => {
        alert(`${this.state.person.first_name} calling...`);
    };

    onDelete = () => {
        fetch(this.person_detail_url , {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        })
    };

    componentDidMount() {
        fetch(this.person_detail_url)
            .then(response => response.json())
            .then(data => this.setState({ person : data }))
    }

    render() {
        const { photo,
                first_name,
                last_name,
                company,
                phone,
                email } = this.state.person;

        const person_id = this.state.person.id;

        return (
            <div className={"body"}>
                <div className={"phone"}>
                    <img className={"profile-photo"}
                         src={photo}
                         alt=""/>
                    <img className={"telephone"}
                         src={telephone}
                         alt=""
                         onClick={this.calling}/>
                    <p>{first_name}</p>
                        <hr/>
                    <p>{last_name}</p>
                        <hr/>
                    <p>Company : {company}</p>
                        <hr/>
                    <p>{phone.type} : {phone.phone}</p>
                        <hr/>
                    <p>{email.type} : {email.email}</p>
                        <hr/>
                    <div className={"edit-delete"}>
                        <div className={"edit"}>
                            <Link to={`/persons/${person_id}/edit`}>
                                <img className={"edit"}
                                     src={edit}
                                     alt=""/>
                            </Link>
                        </div>

                        <div className={"delete"}>
                            <button className={"btn btn-danger"} onClick={this.onDelete}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}