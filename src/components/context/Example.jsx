import React, { useContext } from 'react';
import User from './Send';

export default function Example() {
  const context = useContext(User);
  console.log(context);
  return <></>;
}