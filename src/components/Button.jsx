import React from "react"

export default function Button({
    children,
    type="button",
    className="",
    bgColour = "bg-blue-600",
    textColor ="text-white",
    ...props
})
{
    return <button className={`px-4 py-2 rounded-lg ${bgColour} ${textColor} ${className}`} {...props}>{children}</button>
}