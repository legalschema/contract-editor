import React, { useState } from 'react';
import styled from 'styled-components';
import LegalEditor from './legaleditor';

const Button = styled.button`
  margin: 5px;
`;

const Wrapper = styled.div`
  border-radius: 3px;
  margin: 20px;
  padding: 20px;
  width: min-content;
`;

/**
 * Starter App
 */
export const App = () => {
  return (
    <Wrapper>
      <h1>Contract Editor Demo</h1>
      <p>
        This is a demo of editing a contract containing a UK Legal Schema <a href="https://templates.legalschema.org/bill-of-lading@0.1.0.html">Bill of Lading template</a>.
        The contract editor supports editing documents with rich-text formatting and embedded structured templates.
      </p>
      <LegalEditor />
    </Wrapper>
  )
}

export default App;
