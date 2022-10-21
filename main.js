function startClassification() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifier = ml5.soundClassifier(
    "https://teachablemachine.withgoogle.com/models.json",
    modelReady
  );
}

function modelReady() {
  classifier.classify(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML =
      "I can hear - " + results[0].label;
    document.getElementById("result_confidence").innerHTML =
      "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
    document.getElementById("result_label").style.color =
      "rgb(" +
      random_number_r +
      "," +
      random_number_g +
      "," +
      random_number_b +
      ")";
    document.getElementById("result_confidence").style.color =
      "rgb(" +
      random_number_r +
      "," +
      random_number_g +
      "," +
      random_number_b +
      ")";

    const dogSounds = "";
    const catSounds = "";
    const roarSounds = "";
    const cowSounds = "";

    if (results[0].label == "Bark") {
      dogSounds = "dog.gif";
      catSounds = "";
      roarSounds = "";
      cowSounds = "";
    } else if (results[0].label == "Meow") {
      dogSounds = "";
      catSounds = "334d1c255cec1ceee9c1ac8751f50855.gif";
      roarSounds = "";
      cowSounds = "";
    } else if (results[0].lavel == "Roar") {
      dogSounds = "";
      catSounds = "";
      roarSounds = "download.png";
      cowSounds = "";
    } else {
      dogSounds = "";
      catSounds = "";
      roarSounds = "";
      cowSounds = "giphy.gif";
    }
  }
}
