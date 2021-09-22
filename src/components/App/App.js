import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import * as moviesApi from "../../utils/MoviesApi";
import * as mainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState([]);
  const [showItem, setShowItem] = useState(0);
  const [moreItem, setMoreItem] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [windowSize, setWindowSize] = useState(0);
  const [shortFilter, setShortFilter] = useState(false);
  const [modal, setModal] = useState(false);
  const [responseStatus, setResponseStatus] = useState(null);
  const history = useHistory();
  const location = useLocation();

  // Регистрация пользователя
  const handleSubmitReg = (data) => {
    mainApi
      .register(data)
      .then((res) => {
        if (res.status === 201) {
          setLoggedIn(true);
          mainApi
            .getUserProfile()
            .then((res) => {
              setCurrentUser(res);
            })
          history.push("/movies");
        }
        return res.json();
      })
      .catch((err) => {
        if (err.message === "Ошибка: 409") {
          setModal(true);
          setResponseStatus(409);
          setTimeout(() => {
            setModal(false);
          }, 4000);
        } else if(err.message === "Ошибка: 400") {
          setModal(true);
          setResponseStatus(400);
          setTimeout(() => {
            setModal(false);
          }, 4000);
        }
      });
  };
  // Авторизация пользователя
  const handleSubmitAuth = (data) => {
    mainApi
      .authorize(data)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          history.push("/movies");
          mainApi
            .getUserProfile()
            .then((res) => {
              setCurrentUser(res);
            })
        } else if(res === undefined) {
          setModal(true);
          setResponseStatus(401);
          setTimeout(() => {
            setModal(false);
          }, 4000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Редактирование профиля
  const handleEditProfile = (data) => {
    mainApi
      .doChangeUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        return console.log(err);
      });
  };
  // Выход из системы
  const signOut = () => {
    mainApi.logOut()
      .then((res) => {
        setLoggedIn(false);
        setCurrentUser({});
        history.push("/");
      })
      .catch((err) => {
        return err;
      })
  };
  // Начальная загрузка данных
  useEffect(() => {
    setLoading(true);
    mainApi
      .getUserProfile()
      .then((res) => {
        setCurrentUser(res);
        setLoggedIn(true);
        if(location.pathname === '/saved-movies') {
          mainApi
          .getSavedItems()
          .then((res) => {
            setSavedMovies(res);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          })
          .finally(() => {
            setLoading(false);
          });
        }
      })
      .catch((err) => {
        history.push("/");
      })
      .finally(() => {
        setLoading(false);
      });
    if (localStorage.getItem("movies") !== null) {
      setData(JSON.parse(localStorage.getItem("movies")));
    }
  }, [history]);

  // Сохранение фильма
  const saveCard = (data) => {
    mainApi
      .addItem(data)
      .then((res) => {
        setSavedMovies((prevValue) => prevValue.concat(res));
      })
      .catch((err) => {
        return console.log(err);
      });
  };
  // Удаление фильма из сохраненных
  const removeCard = (data) => {
    const arr = savedMovies.filter((item) => item.id !== data.id);
    mainApi
      .removeItem(data._id)
      .then((res) => {
        setSavedMovies(arr);
      })
      .catch((err) => {
        return console.log(err);
      });
  };
  // Количество выводa карточек
  useEffect(() => {
    let size_1280 = window.matchMedia("screen and (min-width: 1280px)");
    let size_910 = window.matchMedia("screen and (max-width: 910px)");

    if (size_1280.matches) {
      setShowItem(16);
      setMoreItem(4);
    } else if (size_910.matches) {
      setShowItem(9);
      setMoreItem(3);
    } else {
      setShowItem(8);
      setMoreItem(4);
    }
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, [windowSize]);
  // Поиск
  const Search = () => {
    setLoading(true);
    if (localStorage.getItem("movies") === null) {
      moviesApi
        .getAllData()
        .then((res) => {
          // сохраняем загруженные данные в хранилище
          localStorage.setItem("movies", JSON.stringify(res))
          setData(JSON.parse(localStorage.getItem("movies")));
          if (location.pathname === "/movies") {
            setAllMovies(
              res.filter((movie) => {
                return movie.nameRU.indexOf(inputValue) > -1;
              })
            );
          } else if (location.pathname === "/saved-movies") {
            setSavedMovies(
              savedMovies.filter((movie) => {
                return movie.nameRU.indexOf(inputValue) > -1;
              })
            );
          }
          
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    } else {
      // setData(JSON.parse(localStorage.getItem("movies")));
      if (location.pathname === "/movies") {
        setAllMovies(
          data.filter((movie) => {
            return movie.nameRU.indexOf(inputValue) > -1;
          })
        );
      } else if (location.pathname === "/saved-movies") {
        setSavedMovies(
          savedMovies.filter((movie) => {
            return movie.nameRU.indexOf(inputValue) > -1;
          })
        );
      }
      setLoading(false);
    }
    return allMovies;
  };
  // Введенные данные в инпут
  const HandleChangeSearchForm = (event) => {
    setInputValue(event.target.value);
  };
  const handleShowMoreItems = () => {
    setShowItem((prevValue) => prevValue + moreItem);
  };
  // Фильтрация короткометражек
  const handleFilterShortItems = () => {
    if (!shortFilter) {
      setShortFilter(true);
      setShortMovies(
        allMovies.filter((movie) => {
          return movie.duration <= 40;
        })
      );
    } else {
      setShortFilter(false);
    }
  };
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Switch history={history}>
            <Route exact path="/">
              <Main loggedIn={loggedIn} />
            </Route>
            <Route path="/signin">
              <Login
              handleSubmit={handleSubmitAuth}
              modal={modal}
              responseStatus={responseStatus}
              />
            </Route>
            <Route path="/signup">
              <Register
                handleSubmit={handleSubmitReg}
                modal={modal}
                responseStatus={responseStatus}
              />
            </Route>
            <Route path="/saved-movies">
              <SavedMovies
                loading={loading}
                loggedIn={loggedIn}
                savedCards={savedMovies}
                search={Search}
                inputForm={HandleChangeSearchForm}
                inputValue={inputValue}
                searchResults={shortFilter ? shortMovies : savedMovies}
                showItem={showItem}
                moreItem={moreItem}
                handleFilterShortItems={handleFilterShortItems}
                removeCard={removeCard}
              />
            </Route>
            <Route path="/profile">
              <Profile profileEditFn={handleEditProfile} signOut={signOut} loggedIn={loggedIn} />
            </Route>
            <ProtectedRoute
              path="/movies"
              loading={loading}
              loggedIn={loggedIn}
              search={Search}
              inputForm={HandleChangeSearchForm}
              searchResults={shortFilter ? shortMovies : allMovies}
              inputValue={inputValue}
              showItem={showItem}
              moreItem={moreItem}
              handleShowMoreItems={handleShowMoreItems}
              handleFilterShortItems={handleFilterShortItems}
              savedCards={savedMovies}
              component={Movies}
              saveCard={saveCard}
              removeCard={removeCard}
            />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
