import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/style.css';

export default class SectionList extends Component {
  renderSections = section => {
    return (
      <div key={section.title}>
        <div className="section-header">
          <h6>{section.title.toUpperCase()}</h6>
        </div>
        {section.data.map((obj, index) => this.renderRows(obj, index))}
      </div>
    );
  };

  renderRows = (person, index) => {
    let fname =
      person.name.first.charAt(0).toUpperCase() + person.name.first.slice(1);
    let lname =
      person.name.last.charAt(0).toUpperCase() + person.name.last.slice(1);
    return (
      <div key={index} className="list-row">
        <div className="avatar">
          <img src={person.picture.large} alt="" />
        </div>
        <div className="list-data">
          <p>
            {fname} <span style={{ fontWeight: '600' }}>{lname}</span>
          </p>
        </div>
      </div>
    );
  };

  render() {
    const { data } = this.props;
    return (
      <div className="section-list">
        {data.map(element => this.renderSections(element))}
      </div>
    );
  }
}
