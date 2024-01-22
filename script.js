
    let audio = document.getElementById("audio");
    let btn = document.getElementById("btn");
    let video = document.getElementById("video");
    let main = document.getElementById("main");
    let intervalId; 
    btn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        video.style.opacity=1;
        video.play();

        function changeLight() {
          // Generate random RGB values
          const red = Math.floor(Math.random() * 256);
          const green = Math.floor(Math.random() * 256);
          const blue = Math.floor(Math.random() * 256);

          // Apply the new background color
          document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }

        // Change light every 100 milliseconds
        intervalId = setInterval(changeLight, 100);

        // Initial light change
        changeLight();
      } else {
        audio.pause();

        video.pause();
      }
    });
    // Clear the interval when the audio is paused
    video.addEventListener("pause", () => {
      clearInterval(intervalId);
    });
