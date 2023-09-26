import counterOutputModel from '../model/outputmodel/counterOutputModel';
export default function getCounter(repo) {
  return function () {
    let counterEntity = repo.getCounter();
    return counterOutputModel(counterEntity);
  };
}
