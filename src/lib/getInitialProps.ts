async function getInitialProps() {
  const res = await fetch(`https://www.freetogame.com/api/games`);

  const games = await res.json();
  return games;
}
export default getInitialProps;
