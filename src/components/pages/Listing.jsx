import React from 'react';
import styled from 'styled-components';

const ListingsContainer = styled.section`
  text-align: center;
`;

const Listings = () => {
  return (
    <ListingsContainer id="listings">
      <h2>Listings</h2>
      <p>Check out our latest listings below:</p>
      {/* Aquí podrías agregar un componente para mostrar los listados */}
    </ListingsContainer>
  );
};

export default Listings;
