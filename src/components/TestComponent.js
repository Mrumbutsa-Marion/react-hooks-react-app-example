import React from "react";

// no need to modify anything in here. The final test is looking for the returned JSX from this component
function TestComponent() {
  return (
    <div className="video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5TbUxGZtwGI"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        title="time video"
        allowFullScreen
      ></iframe>
      <iframe width="560" 
      height="315" 
      src="https://www.youtube.com/embed/JpM9hiQTlAk"
       title="YouTube video player" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowfullscreen>
       </iframe>
    </div>
  );
}

export default TestComponent;
