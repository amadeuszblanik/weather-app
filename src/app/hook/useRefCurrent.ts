function useRefCurrent<P = HTMLElement>(ref: React.RefObject<P>) {
  if (!ref) {
    return;
  }

  return ref.current;
};

export default useRefCurrent;
