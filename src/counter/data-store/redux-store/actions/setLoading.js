import { IS_LOADING } from '../constants';

export default function setLoading(isLoading) {
  return { type: IS_LOADING, data: isLoading };
}
