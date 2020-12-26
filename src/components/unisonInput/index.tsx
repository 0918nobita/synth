import styles from './UnisonInput.css';

interface Props {
  unison: number;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UnisonInput: React.VFC<Props> = ({ unison, changeHandler }) => (
  <div>
    <div className={styles.text}>
      UNISON:&nbsp;
      <input
        className={styles.numberInput}
        type="number"
        value={unison}
        min="1"
        max="8"
        onChange={changeHandler}
      />
    </div>
  </div>
);
