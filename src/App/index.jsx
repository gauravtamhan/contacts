import React, { useState } from 'react';
import { API_URL } from 'shared/utils/consts';
import { findById } from 'shared/utils/helpers';
import { useRequest } from 'shared/hooks';
import { Alert, Loader } from 'shared/components';
import ResponsiveLayout from './ResponsiveLayout';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';

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
    if (error) return <Alert title="Error" message={error} />;

    const selectedContact = findById(contacts, selectedContactId);

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
