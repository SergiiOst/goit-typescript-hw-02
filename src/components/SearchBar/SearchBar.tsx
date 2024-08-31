import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

type SearchValues = {
  query: string;
};

type Query = {
  setQuery: (query: string) => void;
};

const SearchBar = ({ setQuery }: Query) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values: SearchValues) => {
    const { query } = values;
    if (!query) {
      toast.error("Please enter your request");
      return;
    }
    setQuery(query);
  };

  return (
    <header>
      <Toaster position="top-right" />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.searchBar}>
          <Field
            className={s.searchInput}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images"
          />
          <button className={s.searchBtn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
