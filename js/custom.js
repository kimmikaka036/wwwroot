const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");




customBtn.addEventListener("click", function() {
  realFileBtn.click(); 
});

realFileBtn.addEventListener("change", function() {
  if (realFileBtn.value) { 

    var file = realFileBtn.files[0];
    var fr = new FileReader();
    fr.onload = function(){
      $("#result-text").text(fr.result);
      $("#border-result").removeAttr("hidden");
      sessionStorage.setItem("xml-data", fr.result);

    };
    fr.readAsText(file);
  } else {
    $("#result-text").text("No file chosen, yet.");
  }
});
 