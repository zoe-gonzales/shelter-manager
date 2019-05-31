import React, { Component } from 'react';
import API from '../../utils/API';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import moment from 'moment';
import './style.css';

export default class DonationsView extends Component {
    state = {
        materialDonations: [],
        monetaryDonations: [],
        dataFetched: false,
        totalFunds: 0
    }

    componentDidMount = () => {
        API.getMaterialDonations()
           .then(res => {
                // Reversing array so that most recent donations appear at top
                this.setState({ materialDonations: res.data.reverse() });
                return API
                    .getMonetaryDonations()
                    .then(res => {
                        // Reversing array so that most recent donations appear at top
                        this.setState({ monetaryDonations: res.data.reverse() }, () => {
                            // Data does not display unless dataFetched is true
                            this.setState({ dataFetched: true });
                            // Grabs sum of all monetary donations
                            this.calculateTotal();
                        });
                    })
                    .catch(error => console.log(error));
           })
           .catch(error => console.log(error));
    }

    calculateTotal = () => {
        let total = 0;
        this.state.monetaryDonations.map(donation => {
            total += donation.amount;
            return this.setState({ totalFunds: total });
        });
    }

    render = () => {
        return (
            <Tabs defaultActiveKey="material" id="uncontrolled-tab-example" className="container">
                {/* All Material Donations */}
                <Tab eventKey="material" title="Material" className="tab">
                <Table responsive>
                <thead>
                    <tr>
                    <th></th>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Donor Name</th>
                    <th>Donor Email</th>
                    <th>Date Added</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.dataFetched ? (
                        this.state.materialDonations.map(donation => {
                            let currentIndex = this.state.materialDonations.indexOf(donation);
                            let donationNum = currentIndex + 1;
                            return(
                                <tr key={donation._id}>
                                    <td>{donationNum}</td>
                                    <td>{donation.item}</td>
                                    <td>{donation.quantity}</td>
                                    <td>{donation.donor_name}</td>
                                    <td>{donation.donor_email}</td>
                                    <td>{moment(donation.date).format('MMM DD, YYYY')}</td>
                                </tr>
                            );
                        })
                    ) : null }
                </tbody>
                </Table>
                </Tab>
                {/* All Monetary Donations */}
                <Tab eventKey="monetary" title="Monetary" className="tab">
                <Table responsive>
                <thead>
                    <tr>
                    <th></th>
                    <th>Amount</th>
                    <th>Donor Name</th>
                    <th>Donor Email</th>
                    <th>Date Added</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.dataFetched ? (
                        this.state.monetaryDonations.map(donation => {
                            let currentIndex = this.state.monetaryDonations.indexOf(donation);
                            let donationNum = currentIndex + 1;
                            return(
                                <tr key={donation._id}>
                                    <td>{donationNum}</td>
                                    <td>{donation.amount}</td>
                                    <td>{donation.donor_name}</td>
                                    <td>{donation.donor_email}</td>
                                    <td>{moment(donation.date).format('MMM DD, YYYY')}</td>
                                </tr>
                            );
                        })
                    ) : null }
                    <tr>
                        <td>Total</td>
                        <td>${this.state.totalFunds}</td>
                    </tr>
                </tbody>
                </Table>
                </Tab>
            </Tabs>
        )
    }
}