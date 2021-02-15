import React, { useState, useEffect, useRef } from 'react';

// Thanks to Dan Abramov at overreacted.io for this nifty little hook.

const useInterval = (callback: () => any, delay) => {
  const savedCallback = useRef<() => any>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current();
    if(delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;