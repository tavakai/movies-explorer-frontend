export const base_url = "https://api.nomoreparties.co";
export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
// Получить начальные данные
export const getAllData = () => {
  return fetch(`${base_url}/beatfilm-movies`, headers).then((res) => {
    return getResponseData(res);
  });
};

// Метод проверки ответа и преобразование в json
export const getResponseData = (response) => {
  if (!response.ok) {
    return Promise.reject(`Ошибка: ${response.status}`);
  }
  return response.json();
};