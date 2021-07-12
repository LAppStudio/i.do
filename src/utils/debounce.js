const debounced = (callback, timing) => {
  const timingRef = null;
  return () => {
    clearTimeout(timingRef);
    timingRef = setTimeout(callback, timing);
  }
};

export default debounced;