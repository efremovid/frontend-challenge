import styles from "./styles.module.scss";
import Card from "../Card/Card";
import type { TCat } from "../../shared/types";

interface ICardsProps {
  cats: TCat[];
}

const Cards = ({ cats }: ICardsProps) => {
  console.log(cats);

  return (
    <div className={styles.container}>
      {cats.map((cat) => (
        <Card key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

export default Cards;
