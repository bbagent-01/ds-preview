'use client';

import { useReducer } from 'react';
import Sidebar from '../components/Sidebar';
import Preview from '../components/Preview';

const defaultState = {
  colorPrimary: '#2563EB',
  colorSecondary: '#7C3AED',
  textPrimary: '#1A1D21',
  textSecondary: '#6B7280',
  background: '#FFFFFF',
  fontHeading: 'DM Sans',
  fontBody: 'DM Sans',
  fontSizeBase: 16,
  headingWeight: 700,
  lineHeight: 1.6,
  spaceUnit: 8,
  radius: 10,
  borderWidth: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, [action.key]: action.value };
    case 'RESET':
      return defaultState;
    default:
      return state;
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar state={state} dispatch={dispatch} />
      <Preview state={state} />
    </div>
  );
}
