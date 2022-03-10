import { Container, Row, Col } from 'react-bootstrap';
import styles from './Homepage.module.css'
import Title from '../common/Titles/Titles'


const WorkFlow = () => {
    return (
        <>
            <div className={styles.workflowWrapper}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.themeTitleCenter}>
                                <Title
                                    value="Flow"
                                    span="our"
                                    subTitle="Work Flow"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}
export default WorkFlow;