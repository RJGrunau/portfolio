import MainLayout from '../components/layout-components/layout/layout';
import styles from '../styles/404.module.css'

const ErrorPage = () => {
    return ( 
        <MainLayout>
            <div className={styles.pageDiv}>
                <div>
                    <h1>WHOOPS</h1>
                    <h2>Looks like the page you are looking for isn't here or doesn't exist</h2>
                </div>
            </div>
        </MainLayout>
    );
}
 
export default ErrorPage;