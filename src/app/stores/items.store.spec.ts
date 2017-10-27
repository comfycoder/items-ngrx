import { items } from './items.store';

describe('`items` store', () => {
  const initialState = [
    { id: 0, name: 'First Item' },
    { id: 1, name: 'Second Item' }
  ];

  it('returns an empty array by default', () => {
    const defaultState = items(undefined, { type: 'random', payload: {} });

    expect(defaultState).toEqual([]);
  });

  it('`ADD_ITEMS`', () => {
    const payload = initialState,
      stateItems = items([], { type: 'ADD_ITEMS', payload: payload });

    expect(stateItems).toEqual(payload);
  });

  it('`CREATE_ITEM`', () => {
    const payload = { id: 2, name: 'added item' },
      result = [...initialState, payload],
      stateItems = items(initialState, { type: 'CREATE_ITEM', payload: payload });

    expect(stateItems).toEqual(result);
  });

  it('`UPDATE_ITEM`', () => {
    const payload = { id: 1, name: 'Updated Item' },
      result = [initialState[0], { id: 1, name: 'Updated Item' }],
      stateItems = items(initialState, { type: 'UPDATE_ITEM', payload: payload });

    expect(stateItems).toEqual(result);
  });

  it('`DELETE_ITEM`', () => {
    const payload = { id: 0 },
      result = [initialState[1]],
      stateItems = items(initialState, { type: 'DELETE_ITEM', payload: payload });

    expect(stateItems).toEqual(result);
  });
});
