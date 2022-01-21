//BASE URL
const base_url = "https://api.rawg.io/api/";

//Getting the current time
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// console.log(currentDate, lastYear, nextYear);

//popular games
const popular_games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${process.env.REACT_APP_RAWG_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;

//game details
// exampleURL = https://api.rawg.io/api/games/681399?&key={insert-key-here}
export const gameDetailsURL = (id) =>
  `${base_url}games/${id}?&key=${process.env.REACT_APP_RAWG_API_KEY}`;

//game screenshots
// exampleURL = https://api.rawg.io/api/games/681399/screenshots?&key={insert-key-here}
export const gameScreenshotsURL = (id) =>
  `${base_url}games/${id}/screenshots?&key=${process.env.REACT_APP_RAWG_API_KEY}`;

//Searched Game
export const searchGameUrl = (game_name) =>
  `${base_url}games?key=${process.env.REACT_APP_RAWG_API_KEY}&search=${game_name}&ordering=-rating&page_size=30`;
