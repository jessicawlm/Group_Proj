import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserService from "../services/user.service";

export default class AdminLocationRetrieve extends Component {
    render() {
        return (
            <div className="container">
                <form action="http://csci2720-g23.cse.cuhk.edu.hk/admin/location/" method="post">
                    <label for="locationId">locationId: </label>
                    <input name='locationId' />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}