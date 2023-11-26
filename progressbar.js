let progress = document.getElementById("progress-bar");

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = () => {
  let progressHeight = (window.pageYOffset/totalHeight) * 100;
  progress.style.height = progressHeight + "%";
}
