import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className="mb-6">
        <p>{about}</p>
        <br>
        <p><b>email:</b> pitikorn32@gmail.com</p>
        <p><b>tel:</b> 092-282-0916</p>
      </div>
    </Section>
  );
};

export default SectionAbout;
