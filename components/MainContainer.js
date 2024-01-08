import A from "./A";
import Head from "next/head";
import styles from '../styles/navbar.module.css'

const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords={"key" + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <div className={styles.navbar}>
                <A href={'/'} text="Главная" />
                <A href={'/users'} text="Пользователи" />
            </div>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;
