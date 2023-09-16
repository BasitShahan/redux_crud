

import React from 'react';
import User from './Send';

export default function Data({ children }) {
  return (
    <>
      <User.Provider value='basit'>
        {children}
      </User.Provider>
    </>
  )
}
