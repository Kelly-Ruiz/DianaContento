import React from 'react'

function CrownIcon({color, className}) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path opacity="0.3" d="M16.5585 16H7.44152C6.58066 16 5.81638 15.4491 5.54415 14.6325L3.70711 9.12132C3.44617 8.3385 4.26195 7.63098 5 8L5.71067 8.35533C6.48064 8.74032 7.41059 8.58941 8.01931 7.98069L10.5858 5.41421C11.3668 4.63317 12.6332 4.63316 13.4142 5.41421L15.9807 7.98069C16.5894 8.58941 17.5194 8.74032 18.2893 8.35533L19 8C19.7381 7.63098 20.5538 8.3385 20.2929 9.12132L18.4558 14.6325C18.1836 15.4491 17.4193 16 16.5585 16Z" fill={color || "#000000"}></path>
                <path d="M6 19L18 19" stroke={color || "#000000"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M16.5585 16H7.44152C6.58066 16 5.81638 15.4491 5.54415 14.6325L3.70711 9.12132C3.44617 8.3385 4.26195 7.63098 5 8L5.71067 8.35533C6.48064 8.74032 7.41059 8.58941 8.01931 7.98069L10.5858 5.41421C11.3668 4.63317 12.6332 4.63316 13.4142 5.41421L15.9807 7.98069C16.5894 8.58941 17.5194 8.74032 18.2893 8.35533L19 8C19.7381 7.63098 20.5538 8.3385 20.2929 9.12132L18.4558 14.6325C18.1836 15.4491 17.4193 16 16.5585 16Z" stroke={color || "#000000"} stroke-width="2" stroke-linejoin="round"></path>
            </g>
        </svg>
    )
}

export default CrownIcon;