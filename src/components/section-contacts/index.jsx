import React from 'react';

import Section from '../section';

const SectionContacts = ({ contacts }) => {
  return (
    <Section title="Contacts">
      <div className="mb-6">
        <p>{contacts}</p>
      </div>
    </Section>
  );
};

export default SectionContacts;
