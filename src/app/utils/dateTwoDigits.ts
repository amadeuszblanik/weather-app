export const dateTwoDigits = (value: string | number): string => {
  const valueAsNumber = Number(value);
  return valueAsNumber < 10 ? `0${valueAsNumber}` : valueAsNumber.toString();
}
