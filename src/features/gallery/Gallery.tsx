import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { FETCH_ALL_REQUEST, FilmAttributes, CommonAttributes } from './types';
import { RootState } from '../../app/rootReducers';
import { Card } from './Card';
import { DetailPage } from '../../common/DetailPage';
import { Error } from './Error';
import { Loading } from './Loading';

export const Gallery = (): ReactElement => {
  const {films, people, planets, species, starships, vehicles, isLoading, error} = useSelector((state: RootState) => state.films);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: FETCH_ALL_REQUEST
    });
  }, [dispatch]);

  const Films = () => {
    return (
      <>
        {films && films.data.map((film: FilmAttributes) => (
          <li key={film.created}>
            <Link to={{
              pathname: `films/${film.title}`,
              state: film
            }}>
              <Card category='films' name={film.title} />
            </Link>
          </li>
        ))}
      </>
    );
  };

  const People = () => {
    return (
      <>
        {people && people.data.map((human: CommonAttributes) => (
          <li key={human.created}>
            <Link to={{
              pathname: `people/${human.name}`,
              state: human
            }}>
              <Card category='people' name={human.name} />
            </Link>
          </li>
        ))}
      </>
    );
  };

  const Planets = () => {
    return (
      <>
        {planets && planets.data.map((planet: CommonAttributes) => (
          <li key={planet.created}>
            <Link to={{
              pathname: `planets/${planet.name}`,
              state: planet
            }}>
              <Card category='planets' name={planet.name} />
            </Link>
          </li>
        ))}
      </>
    );
  };

  const Species = () => {
    return (
      <>
        {species && species.data.map((specie: CommonAttributes) => (
          <li key={specie.created}>
            <Link to={{
              pathname: `species/${specie.name}`,
              state: specie
            }}>
              <Card category='species' name={specie.name} />
            </Link>
          </li>
        ))}
      </>
    );
  };

  const Starships = () => {
    return (
      <>
        {starships && starships.data.map((starship: CommonAttributes) => (
          <li key={starship.created}>
            <Link to={{
              pathname: `starships/${starship.name}`,
              state: starship
            }}>
              <Card category='starships' name={starship.name} />
            </Link>
          </li>
        ))}
      </>
    );
  };

  const Vehicles = () => {
    return (
      <>
        {vehicles && vehicles.data.map((vehicle: CommonAttributes) => (
          <li key={vehicle.created}>
            <Link to={{
              pathname: `vehicles/${vehicle.name}`,
              state: vehicle
            }}>
              <Card category='vehicles' name={vehicle.name} />
            </Link>
          </li>
        ))}
      </>
    );
  };

  return (
    <div className="gallery">
      {error ? <Error /> : null}
      {isLoading ? (
        <Loading />
      ) : (
        <ol>
          <Router>
            <Route exact path="/" component={Films} />
            <Route exact path="/films/:title" component={DetailPage} />
            <Route exact path="/" component={People} />
            <Route exact path="/people/:name" component={DetailPage} />
            <Route exact path="/" component={Planets} />
            <Route exact path="/planets/:name" component={DetailPage} />
            <Route exact path="/" component={Species} />
            <Route exact path="/species/:name" component={DetailPage} />
            <Route exact path="/" component={Starships} />
            <Route exact path="/starships/:name" component={DetailPage} />
            <Route exact path="/" component={Vehicles} />
            <Route exact path="/vehicles/:name" component={DetailPage} />
          </Router>
        </ol>)}
    </div>
  );
};