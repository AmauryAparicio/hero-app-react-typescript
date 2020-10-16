import React, { ChangeEvent, useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";
import HeroCard from "../heroes/HeroCard";
import useForm from "./../hooks/useForm";
import { iHeroes, iSearchForm } from "./../Interfaces";
import { parse } from "query-string";
import getHeroesByName from "./../selectors/getHeroesByName";

const SearchScreen = () => {
  const { push } = useHistory();
  const { search } = useLocation();

  const { q = "" } = parse(search);

  const [formValues, handleInputChange] = useForm<iSearchForm>({
    searchText: q as string,
  });

  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(q as string), [q]);

  const handleSearch: (e: ChangeEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault();
    push(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="Find your hero"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-block btn-outline-primary mt-1"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-info">
              <p className="m-0">Search a hero...</p>
            </div>
          ) : heroesFiltered.length >= 1 ? (
            (heroesFiltered as Array<iHeroes>).map((hero: iHeroes) => (
              <HeroCard key={hero.id} {...hero} />
            ))
          ) : (
            <div className="alert alert-danger">
              <p className="m-0">There is no hero with "{q}" name...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
