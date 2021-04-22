import React from 'react'

export default function ListChildren(props) {
    function liTags(numOfLiTags) {
        let liTags = []
        for (let i = 0; i < numOfLiTags; i++) {
            liTags.push(<li key={i}>{props.content}</li>)
        }
        return liTags
    }

    return (
        <div>
            {liTags(this.props.liTags)}
        </div>
    )
}

ListChildren.defaultProps = {
    liTags: 4
}