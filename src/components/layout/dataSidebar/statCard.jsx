import React from "react";


export const statCard = ({ title, value, change, color }) => {

    return (
        <>
            <article>
                <div>
                <h2 className="text-heading-md--font-weight: 600;">{title}</h2>
                {change && (
                    <p>
                        {change}
                    </p>
                )}
                </div>
                <p>
                    {value}
                </p>

            </article>
        </>
    )
}

