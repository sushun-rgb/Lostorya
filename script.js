function rollDice(faces) {
    // 1. Pega a quantidade do input
    const input = document.getElementById(`qty-d${faces}`);
    const quantidade = parseInt(input.value);
    
    if (isNaN(quantidade) || quantidade < 1) return;

    // 2. Rola os dados
    let resultados = [];
    for (let i = 0; i < quantidade; i++) {
        resultados.push(Math.floor(Math.random() * faces) + 1);
    }

    // 3. Identifica o maior
    const maior = Math.max(...resultados);

    // 4. Monta o HTML
    const display = document.getElementById('result-display');
    
    // Gera as caixinhas dos números
    const dadosHTML = resultados.map(num => {
        const classe = (num === maior) ? 'die-value best' : 'die-value';
        return `<span class="${classe}">${num}</span>`;
    }).join('');

    // Exibe no painel
    display.innerHTML = `
        <div style="color: #888; margin-bottom: 10px;">Lançamento: ${quantidade}d${faces}</div>
        <div class="dice-container">${dadosHTML}</div>
        <div class="best-label">RESULTADO FINAL: ${maior}</div>
    `;
}