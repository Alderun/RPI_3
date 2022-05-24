window.onload = function() {
    document.addEventListener("visibilitychange", () => {
      const video = document.getElementById("my-video");
      console.log(document.hidden);
      return document.hidden ? video.pause() : video.play();
    });
}