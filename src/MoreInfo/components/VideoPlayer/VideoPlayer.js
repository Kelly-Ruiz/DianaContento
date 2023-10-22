import React from 'react'

function VideoPlayer() {
  return (
    <div className='z-0'>
        <iframe width="1920"  className='w-full aspect-video'
        src="https://www.youtube.com/embed/9ZfN87gSjvI?si=_lVLbNxmfkREsxoZ" 
        title="Video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        />

      </div>
  )
}

export default VideoPlayer