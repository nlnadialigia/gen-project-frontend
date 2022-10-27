import { Router } from "./Router";

import Elipses from './assets/elipses.svg';

export function App() {
  return (
    <div className="relative bg-gray-900 min-h-screen flex justify-center items-center">
      <Router />

      <img src={Elipses} alt="" className="absolute left-0 bottom-0"/>
    </div>
  );
}
