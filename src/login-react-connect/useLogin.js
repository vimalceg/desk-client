import { useSelector } from 'react-redux';

export default function useLogin() {
  return useSelector((state) => {
    return state;
  });
}
