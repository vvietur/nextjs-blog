import React from 'react';

const Index = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      name: 'Dolnośląski Zespół Szkół Specjalnych przy Szpitalu Uzdrowiskowym dla Dzieci "JAGUSIA"'
    }
  };
};

export default Index;
