/**
 * Demonstrates Redux Toolkit state updates through a connected React component.
 */
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../store.js';

export const reduxCode = `// 1. Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: 1 },
  reducers: { addItem: (state) => { state.items += 1; } }
});

// 2. Store
const store = configureStore({ reducer: { cart: cartSlice.reducer } });

// 3. Provider
<Provider store={store}><App /></Provider>

// 4. Component
const items = useSelector((state) => state.cart.items);
const dispatch = useDispatch();`;

export function ReduxExample() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="stack">
      <strong className="metric">{items}</strong>
      <div className="button-row">
        <button type="button" onClick={() => dispatch(removeItem())}>Remove</button>
        <button type="button" onClick={() => dispatch(addItem())}>Add</button>
      </div>
    </div>
  );
}

export const reduxExample = {
  title: 'Redux',
  description: 'The four building blocks: slice, store, provider, and connected component.',
  code: reduxCode,
  demo: <ReduxExample />
};
