function trocarImagem() {
    var imagem = document.getElementById("imagem");
    
    if (imagem.src.endsWith("https://a.imagem.app/bmMIwr.jpegimagem1.jpg")) {
      imagem.src = "https://a.imagem.app/bmMZkP.jpeg";
    } else {
      imagem.src = "https://a.imagem.app/bmMIwr.jpeg";
    }
  }