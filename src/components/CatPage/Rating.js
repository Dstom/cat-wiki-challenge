import React from 'react'

export const Rating = ({ number }) => {
    return (
        <>
            {
                [1, 2, 3, 4, 5].map((index) => {
                    if (index > number) {
                        return <span key={index} className="rectangles-no"></span>
                    } else {
                        return <span  key={index} className="rectangles"></span>
                    }
                })

            }
        </>
    )
}
