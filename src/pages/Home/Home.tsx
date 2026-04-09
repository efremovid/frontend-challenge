import styles from "./styles.module.scss";
import { useEffect, useRef } from "react";
import { getCats } from "../../shared/api";
import { usePagination } from "../../hooks/usePagination";
import Cards from "../../components/Cards/Cards";
import { useCatsStore } from "../../store/store";
import Loader from "../../shared/Loader/Loader";

const Home = () => {
  const { isLoading, error, loadMore } = usePagination({
    fetchFunction: getCats,
    startPage: 1,
    limit: 15,
  });
  const cats = useCatsStore((state) => state.cats);

  const isInitialLoadingDone = useRef(false);

  useEffect(() => {
    if (!isInitialLoadingDone.current && cats.length === 0) {
      loadMore();
      isInitialLoadingDone.current = true;
    }
  }, []);

  return (
    <>
      {isLoading && cats.length === 0 ? (
        <Loader />
      ) : error ? (
        <div>{"ошибка"}</div>
      ) : (
        <div className={styles.container}>
          <Cards cats={cats} />
          <button onClick={loadMore}>... загружаем еще котиков ...</button>
        </div>
      )}
    </>
  );
};

export default Home;
