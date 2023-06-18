

funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const valorporHora = document.getElementById('valorPorHora');
        valorporHora.value()
        const disenoInterfaz= document.getElementById('interfazHoras');
        disenoInterfaz.value()
        const HorasHTML= document.getElementById('interfazHTML');
        HorasHTML.value()
        document.getElementById('valorTotal') = (valorporHora*disenoInterfaz)/HorasHTML;
        
      })
};
funcionPredeterminada();


