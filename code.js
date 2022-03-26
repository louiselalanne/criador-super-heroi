var cor = "";
onEvent("corSelecionar", "change", function( ) {
  cor = getProperty("corSelecionar", "value");
  console.log(cor);
  if (cor == "VermelhoEAzul") {
    setImageURL("Miniatura", "assets/Superman-01.png");
  }
  if (cor == "VermelhoEPreto") {
    setImageURL("Miniatura", "assets/Superman-02.png");
  }
  showElement("botaoVisualizar");
});
onEvent("botaoVisualizar", "click", function( ) {
  setScreen("telaVisualizacao");
  if (cor == "VermelhoEAzul") {
    setImageURL("Miniatura", "assets/Superman-01.png");
    setImageURL("imagemSuper", "assets/Superman-01.png");
  }
  if (cor == "VermelhoEPreto") {
    setImageURL("Miniatura", "assets/Superman-02.png");
    setImageURL("imagemSuper", "assets/Superman-02.png");
  }
  if (getProperty("radioO1", "checked")) {
    showElement("imagemO1");
  } else {
    hideElement("imagemO1");
  }
  if (getProperty("radioO2", "checked")) {
    showElement("imagemO2");
  } else {
    hideElement("imagemO2");
  }
  if (getProperty("radioSO", "checked")) {
    showElement("imagem03");
  } else {
    hideElement("imagem03");
  }
  if (getProperty("radio_button1", "checked")) {
    showElement("imageescudo");
  } else {
    hideElement("imageescudo");
  }
  if (getProperty("radio_button3", "checked")) {
    showElement("imagemMartelo");
  } else {
    hideElement("imagemMartelo");
  }
});
onEvent("botaoVoltar", "click", function( ) {
  setScreen("superHeroiCriador");
});
