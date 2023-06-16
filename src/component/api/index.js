export const getDataMovie = async () => {
  const url =
    'https://online-movie-database.p.rapidapi.com/auto-complete?q=game';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '798832674dmsh624129c72f674f0p1c44e9jsn22f101ad3afa',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
  }
};
export const getDataVideo = async () => {
  const url =
    'https://online-movie-database.p.rapidapi.com/actors/get-all-videos?nconst=nm0001667';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '798832674dmsh624129c72f674f0p1c44e9jsn22f101ad3afa',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
  }
};
export const getDataSearch = async () => {
  const url =
    'https://online-movie-database.p.rapidapi.com/title/find?q=game%20of%20thr';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '798832674dmsh624129c72f674f0p1c44e9jsn22f101ad3afa',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
  }
};
