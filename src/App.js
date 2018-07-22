import React, { Component } from 'react';
import Panel from 'components/Panel/index.js';
import SectionList from 'components/SectionList/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    let fakeuserdata = [
      {
        title: 'A',
        data: [
          {
            name: {
              title: 'mrs',
              first: 'vilma',
              last: 'monteiro'
            },
            location: {
              street: '5042 rua santa maria ',
              city: 'guarulhos',
              state: 'paraná',
              postcode: 69469
            },
            email: 'vilma.monteiro@example.com',
            dob: {
              date: '1958-04-10T15:53:03Z',
              age: 60
            },
            phone: '(35) 7830-7305',
            cell: '(47) 6461-0686',
            id: {
              name: 'FN',
              value: '26067242946'
            },
            picture: {
              large: 'https://randomuser.me/api/portraits/women/24.jpg',
              medium: 'https://randomuser.me/api/portraits/med/women/24.jpg',
              thumbnail:
                'https://randomuser.me/api/portraits/thumb/women/24.jpg'
            },
            nat: 'BR'
          },
          {
            name: {
              title: 'mr',
              first: 'jose',
              last: 'monteiro'
            },
            location: {
              street: '5042 rua santa maria ',
              city: 'guarulhos',
              state: 'paraná',
              postcode: 69469
            },
            email: 'vilma.monteiro@example.com',
            dob: {
              date: '1958-04-10T15:53:03Z',
              age: 60
            },
            phone: '(35) 7830-7305',
            cell: '(47) 6461-0686',
            id: {
              name: 'FN',
              value: '26067242946'
            },
            picture: {
              large: 'https://randomuser.me/api/portraits/women/24.jpg',
              medium: 'https://randomuser.me/api/portraits/med/women/24.jpg',
              thumbnail:
                'https://randomuser.me/api/portraits/thumb/women/24.jpg'
            },
            nat: 'BR'
          }
        ]
      },
      {
        title: 'B',
        data: [
          {
            name: {
              title: 'mrs',
              first: 'vilma',
              last: 'monteiro'
            },
            location: {
              street: '5042 rua santa maria ',
              city: 'guarulhos',
              state: 'paraná',
              postcode: 69469
            },
            email: 'vilma.monteiro@example.com',
            dob: {
              date: '1958-04-10T15:53:03Z',
              age: 60
            },
            phone: '(35) 7830-7305',
            cell: '(47) 6461-0686',
            id: {
              name: 'FN',
              value: '26067242946'
            },
            picture: {
              large: 'https://randomuser.me/api/portraits/women/24.jpg',
              medium: 'https://randomuser.me/api/portraits/med/women/24.jpg',
              thumbnail:
                'https://randomuser.me/api/portraits/thumb/women/24.jpg'
            },
            nat: 'BR'
          },
          {
            name: {
              title: 'mr',
              first: 'jose',
              last: 'monteiro'
            },
            location: {
              street: '5042 rua santa maria ',
              city: 'guarulhos',
              state: 'paraná',
              postcode: 69469
            },
            email: 'vilma.monteiro@example.com',
            dob: {
              date: '1958-04-10T15:53:03Z',
              age: 60
            },
            phone: '(35) 7830-7305',
            cell: '(47) 6461-0686',
            id: {
              name: 'FN',
              value: '26067242946'
            },
            picture: {
              large: 'https://randomuser.me/api/portraits/women/24.jpg',
              medium: 'https://randomuser.me/api/portraits/med/women/24.jpg',
              thumbnail:
                'https://randomuser.me/api/portraits/thumb/women/24.jpg'
            },
            nat: 'BR'
          }
        ]
      }
    ];
    this.setState({ users: fakeuserdata });
  }

  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <div className="row bounding-box">
          <div className="col-4">
            <Panel>
              <SectionList data={users} />
            </Panel>
          </div>
          <div className="col-8">
            <Panel>
              <p>Hi</p>
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
