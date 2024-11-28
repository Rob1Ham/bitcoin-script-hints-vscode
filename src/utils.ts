import { StackState } from './stackstate';

export const makeError = (message: string, state: StackState): StackState => ({
    ...state,
    error: message
});

export const toNumber = (val: string | number): [number | null, string | null] => {
    if (typeof val === 'number') return [val, null];
    const num = Number(val);
    if (isNaN(num)) return [null, `Cannot convert '${val}' to number`];
    return [num, null];
};