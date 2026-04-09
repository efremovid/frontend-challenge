import { useShallow } from "zustand/shallow";
import Cards from "../../components/Cards/Cards";
import styles from "./styles.module.scss";
import { useCatsStore } from "../../store/store";

const Favourites = () => {
  const likedCats = useCatsStore(
    useShallow((state) => state.cats.filter((cat) => cat.isLiked)),
  );

  return (
    <div>
      {likedCats.length > 0 ? (
        <Cards cats={likedCats} />
      ) : (
        <p className={styles.text}>Любимых котиков пока нет ...</p>
      )}
    </div>
  );
};

export default Favourites;
