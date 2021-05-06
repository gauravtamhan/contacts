import React from 'react';
import FontAwesomeIcons from 'components/FontAwesomeIcons';
import { toCapital, convertNat } from 'shared/helpers';

const dateConfig = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

const style = {
    fontWeight: '300',
    marginLeft: 10,
};

function Detail({ data }) {
    const {
        name,
        dob,
        location: { street, city, state, postcode },
        nat,
        phone,
        email,
        picture,
    } = data;
    const fname = toCapital(name.first);
    const lname = toCapital(name.last);
    const title = toCapital(name.title);
    const bday = new Date(dob.date).toLocaleDateString('en-US', dateConfig);
    const addressLine1 = toCapital(street);
    const addressLine2 = `${toCapital(city)}, ${toCapital(state)} ${postcode}`;

    const nationality = convertNat(nat);

    const items = [
        {
            icon: 'phone-alt',
            content: <p>{phone}</p>,
        },
        {
            icon: 'envelope',
            content: <p>{email}</p>,
        },
        {
            icon: 'birthday-cake',
            content: (
                <p>
                    {bday} <span style={style}>{`(${dob.age} years old)`}</span>
                </p>
            ),
        },
        {
            icon: 'map-marker-alt',
            content: (
                <>
                    <p>{addressLine1}</p>
                    <p>{addressLine2}</p>
                    <p>{nationality}</p>
                </>
            ),
        },
    ];

    return (
        <div className="detail-container">
            <div className="detail-box">
                <div className="row">
                    <div className="col-sm-4 d-flex justify-content-center spacer">
                        <img className="avatar-lg" src={picture.large} alt="" />
                    </div>
                    <div className="col-sm-8 d-none d-sm-flex name-container">
                        <h5>{title}</h5>
                        <h2>{`${fname} ${lname}`}</h2>
                    </div>
                    <div className="col-12 d-flex d-sm-none justify-content-center">
                        <h2>{`${fname} ${lname}`}</h2>
                    </div>
                </div>
                <div className="separator" />
                {items.map(({ icon, content }, index) => (
                    <div key={index} className="row align-items-center spacer">
                        <div className="col-3 col-sm-4 d-flex justify-content-center">
                            <div className="icon-container">
                                <div className="icon-border">
                                    <FontAwesomeIcons icon={icon} fixedWidth />
                                </div>
                            </div>
                        </div>
                        <div className="col-9 col-sm-8">{content}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Detail;
