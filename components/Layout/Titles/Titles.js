import {React} from 'react'

const Title = ({ value, span, subTitle }) => {
    return (
        <div className="themeTitle">
            <h4>{value}</h4>
            <h3><span>{span}</span> {subTitle}</h3>
        </div>
    )
}

export default Title;