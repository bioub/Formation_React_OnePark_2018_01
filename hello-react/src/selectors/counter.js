

export const countersSelector = (state) => state.counters;
export const counterSelector = (state, i) => countersSelector(state)[i];
export const countSelector = (state, i) => counterSelector(state, i).count;

// Regarder le paquet npm reselect