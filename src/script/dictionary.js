async function getData() {
  try {
    const responce = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/favour');
    const responceData = await responce.json();
    console.log(responceData);
  } catch (err) {
    console.error(err);
  }
}

getData();
