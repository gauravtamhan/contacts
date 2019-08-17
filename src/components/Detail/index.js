import React, { Component } from 'react';
import FontAwesomeIcons from 'components/FontAwesomeIcons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/style.css';

export default class Detail extends Component {
    toCapital(s) {
        let arr = s.split(' ');
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        return arr.join(' ');
    }

    convertNat(s) {
        const nationalities = {
            AU: 'Australia',
            BR: 'Brazil',
            CA: 'Canada',
            CH: 'Switzerland',
            DE: 'Germany',
            DK: 'Denmark',
            ES: 'Spain',
            FI: 'Finland',
            FR: 'France',
            GB: 'United Kingdom',
            IE: 'Ireland',
            IR: 'Iran',
            NO: 'Norway',
            NL: 'Netherlands',
            NZ: 'New Zealand',
            TR: 'Turkey',
            US: 'United States',
        };
        return nationalities[s];
    }

    render() {
        const { data } = this.props;
        let fname = this.toCapital(data.name.first);
        let lname = this.toCapital(data.name.last);
        let title = this.toCapital(data.name.title);
        let bday = new Date(data.dob.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        let street = this.toCapital(data.location.street);
        let address =
            this.toCapital(data.location.city) +
            ', ' +
            this.toCapital(data.location.state) +
            ' ' +
            data.location.postcode;
        let nat = this.convertNat(data.nat);

        return (
            <div className="detail-container">
                <div className="detail-box">
                    <div className="row">
                        <div className="col-5 right">
                            <img
                                className="avatar-lg"
                                src={data.picture.large}
                                alt=""
                            />
                        </div>
                        <div className="col-7 center">
                            <h5>{title}</h5>
                            <h2>{`${fname} ${lname}`}</h2>
                        </div>
                    </div>
                    <div className="separator" />
                    <div className="row">
                        <div className="col-5 right">
                            <p className="label">Home phone:</p>
                            {/* <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 5, width: 100 }}>
                                <div className="icon-border">
                                    <FontAwesomeIcons icon="phone-alt" fixedWidth />
                                </div>
                            </div> */}
                        </div>
                        <div className="col-7">
                            <p>{data.phone}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 right">
                            <p className="label">Cell phone:</p>
                        </div>
                        <div className="col-7">
                            <p>{data.cell}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 right">
                            <p className="label">E-mail:</p>
                        </div>
                        <div className="col-7">
                            <p>{data.email}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 right">
                            <p className="label">Birthday:</p>
                        </div>
                        <div className="col-7">
                            <p>
                                {bday}{' '}
                                <span
                                    style={{
                                        fontWeight: '300',
                                        marginLeft: 10,
                                    }}
                                >{`(${data.dob.age} years old)`}</span>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 right">
                            <p className="label">Address:</p>
                        </div>
                        <div className="col-7 address-text">
                            <p>{street}</p>
                            <p>{address}</p>
                            <p>{nat}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
