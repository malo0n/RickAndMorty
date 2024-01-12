

export async function fetchData(){
    try {
      let data = await fetch("https://rickandmortyapi.com/api/character")
      .then((response)=>response.json())
      return data.results;
    } catch (e) {
      console.error("Fetch error: ", e);
      throw e;
    }
}

