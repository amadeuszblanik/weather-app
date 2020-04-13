type TransitionValues = string | string[];

export const transition = (values: TransitionValues, time = 450) => {
  if (Array.isArray(values)) {
    return `transition-property: ${values.join(", ")};
      transition-duration: ${time}ms;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      `;
  }

  return `transition: ${values} ${time}ms cubic-bezier(0.4, 0, 0.2, 1);`;
};
