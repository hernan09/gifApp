const getGiff = async (categoria) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    categoria
  )}&limit=50&api_key=KkQrrNh7pTtepc4lfgruwaHAm2uOICEV`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const giff = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return giff;
};

export default getGiff;
