import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./_person-list.scss";

import plus from "./plus.svg";

const person_list_url = "http://127.0.0.1:8000/api/persons/";

export default class PersonList extends Component {
    state = {
        persons: [],
    };

    componentDidMount() {
        fetch(person_list_url)
            .then(response => response.json())
            .then(data => this.setState({ persons: data }));
    }

    render() {
        const { persons } = this.state;
        console.log(this.state);

        return (
            <div className={"body"}>
                <div className={"phone"}>
                    <h5>Phone Directory</h5>
                    <hr/>
                    {persons.map(person =>
                        <Link className={"person"} to={`/persons/${person.id}`} key={person.id}>
                            <img src={person.photo} alt=""/>
                            <p>{person.first_name}</p>
                            <p>{person.last_name}</p>
                        </Link>
                    )}
                    <div className={"plus"}>
                        <Link to={`/persons/add/`}>
                            <img src={plus} alt=""/>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}