async function getData() {
  console.log("Sending ditto request");
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
  return res.json();
}

export default getData;
