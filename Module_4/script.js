function upDate(previewPic) {
  let imageDiv = document.querySelector("#image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.innerText = previewPic.alt;
}

function unDo() {
  let imageDiv = document.querySelector("#image");
  imageDiv.style.backgroundImage = "";
  imageDiv.innerText = "Hover over an image below to display here.";
}

function ImageSetup() {
  const images = document.querySelectorAll(".preview");

  for (let i = 0; i < images.length; i++) {
    const img = images[i];

    img.setAttribute("tabindex", "0");
    img.addEventListener("mouseover", function () {
      upDate(this);
    });
    img.addEventListener("mouseout", function () {
      unDo();
    });
    img.addEventListener("focus", function () {
      upDate(this);
    });
    img.addEventListener("blur", function () {
      unDo();
    });

    console.log("Tab index ", i);
  }
}

window.addEventListener("load", function () {
  ImageSetup();
  console.log("Page loaded and ImageSetup works");
});
