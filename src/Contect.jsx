import React, { useState } from 'react';

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAdd = () => {
    if (name && phone) {
      const newContact = { id: Date.now(), name, phone };
      setContacts([...contacts, newContact]);
      setName('');
      setPhone('');
    }
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>📇 Contact List</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={handleAdd} style={{ width: '100%', padding: '8px' }}>
        ➕ Add Contact
      </button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {contacts.map((contact) => (
          <li key={contact.id} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
            <strong>{contact.name}</strong> - {contact.phone}
            <button
              onClick={() => handleDelete(contact.id)}
              style={{ float: 'right', backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px' }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
