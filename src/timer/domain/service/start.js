import increment from "./increment";
export default function start(repo) {
  return () => repo.start(increment);
}
