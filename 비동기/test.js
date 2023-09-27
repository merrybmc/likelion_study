fetch('http://localhost:3000/todos')
  .then((res) => res.json())
  .then((json) => console.log(json));
