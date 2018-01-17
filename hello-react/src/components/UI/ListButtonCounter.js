import React from 'react';
import { ButtonCounterDesactivable } from './ButtonCounter';

export const ListButtonCounter = () => (
  <div>
    <ButtonCounterDesactivable index={0} />
    <ButtonCounterDesactivable index={1} />
    <ButtonCounterDesactivable index={2} />
  </div>
);