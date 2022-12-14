import styles from './breadCrumb.module.scss'
import {
    Breadcrumb
} from 'react-bootstrap'

const BreadCrumb = ({spanValue, titleValue, activeBreadcrumb, breadCrumbItem}) => {
    return (
        <>
            <div className={styles.breadCrumbWrapper}>
                <div className={styles.breadCrumbRow}>
                    <h2 className={styles.pageTitle} data-aos="fade-up" data-aos-duration="1000">
                        <span>{spanValue} </span>
                        {titleValue}
                    </h2>
                    <Breadcrumb data-aos="fade-up" data-aos-duration="2000">
                        <Breadcrumb.Item href="/">{breadCrumbItem}</Breadcrumb.Item>
                        <Breadcrumb.Item active>{activeBreadcrumb}</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </>
    )
}

export default BreadCrumb;