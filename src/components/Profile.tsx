import styles from "../styles/components/Profile.module.css";

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/carlos-cne.png" alt="Carlos Cabuloso" />
      <div>
        <strong>Carlos Queiroz</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
