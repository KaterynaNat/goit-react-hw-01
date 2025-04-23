import styles from "./BallanceTab.module.css";
// import { useSelector, useDispatch } from "react-redux";
// import { selectBalance } from "../../redux/";
// import { getCurrentUser } from "../../redux/";
// import { useEffect } from "react";

const BallanceTab = ({ balance }) => {
  // const dispatch = useDispatch();
  // const balance = useSelector(selectBalance);
  // useEffect(() => {
  //   dispatch(getCurrentUser());
  // }, [dispatch]);

  const formatted =
    balance?.toLocaleString("uk-UA", {
      minimumFractionDigits: 2,
    }) ?? "0.00";

  return (
    <div className={styles.container}>
      <p className={styles.title}>Your Balance</p>
      <p className={styles.balance}>₴ {formatted}</p>
    </div>
  );
};

export default BallanceTab;
