export default function Department() {
  let id;
  let name;
  function getName() {
    return name;
  }
  function getId() {
    return id;
  }
  function setName(n) {
    name = n;
  }
  function setId(idL) {
    id = idL;
  }
  function getObject() {
    return {
      id,
      name,
    };
  }
  return {
    getName,
    getId,
    setName,
    setId,
    getObject,
  };
}
