import { up, down } from '../counterSlice/counterSlice';

export const fetchCounter = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://api.example.com/counter');
      const data = await response.json();
      dispatch(up(data)); // Dispatch your counterSlice action with the received data
    } catch (error) {
      // Handle error if necessary
    }
  };
};
