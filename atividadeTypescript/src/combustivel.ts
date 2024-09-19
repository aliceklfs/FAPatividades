const botao = document.getElementById("btn") as HTMLButtonElement;

botao.addEventListener("click", () => {
    const valorAlcool = (
        (document.getElementById("alcool") as HTMLInputElement));
    const valorGasolina = (
        (document.getElementById("gasolina") as HTMLInputElement)
    );

    const alcool:number = parseFloat(valorAlcool.value)
    const gasolina:number = parseFloat(valorGasolina.value)

    if (isNaN(alcool) || isNaN(gasolina) || alcool <= 0 || gasolina <= 0) {
        alert("Por favor, insira valores numéricos válidos maiores que zero.");
        return;
      }
    
      let resultado: string;
      const razao: number = alcool / gasolina;
    
        if (razao <= 0.7) {
          resultado = "Abasteça com álcool";
          alert("Abasteça com álcool");
        } else {
          resultado = "Abasteça com gasolina";
          alert("Abasteça com gasolina");
        }
        const resultadoDiv = document.getElementById("resultado") as HTMLDivElement;
        resultadoDiv.textContent = resultado;
});