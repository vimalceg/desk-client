import { SET_ERROR } from "../constants";

export default function setLoading(error) {
  return { type: SET_ERROR, data: error };
}
