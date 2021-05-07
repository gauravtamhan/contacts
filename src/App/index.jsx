import React, { useState } from 'react';
import API_URL from 'shared/utils/consts';
import ResponsiveLayout from './ResponsiveLayout';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import Loader from './Loader';
import Error from './Error';

import useRequest from './useRequest';

const sortData = (arr) =>
    arr.sort((a, b) => {
        const nameA = a.name.last.toLowerCase();
        const nameB = b.name.last.toLowerCase();
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    });

function App() {
    const [contacts, loading, error] = useRequest(API_URL, sortData);
    const [selectedContactId, setSelectedContactId] = useState();

    if (loading) return <Loader />;
    if (error) return <Error message={error} />;

    const selectedContact = contacts.find((contact) => contact.id.value === selectedContactId);

    return (
        <div className="container">
            <ResponsiveLayout
                leftContent={
                    <ContactList
                        contacts={contacts}
                        selectedContactId={selectedContactId}
                        setSelectedContactId={setSelectedContactId}
                    />
                }
                rightContent={<ContactDetails selectedContact={selectedContact} />}
                modalVisible={selectedContactId}
                closeModal={() => setSelectedContactId()}
            />
        </div>
    );
}

export default App;
