document.addEventListener('DOMContentLoaded', (event) => {
    // Limpa o localStorage quando carrega a página
    localStorage.clear();

    // Reseta os campos de texto
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').innerText = '';
    document.getElementById('message').innerText = 'Digite seu texto';
});

function criptografar() {
    const inputText = document.getElementById('inputText').value;
    if (inputText) {
        const encryptedText = btoa(inputText); // Função para criptografia
        localStorage.setItem('textoCriptografado', encryptedText);
        localStorage.setItem('textoOriginal', inputText);
        document.getElementById('message').innerText = 'Texto criptografado e salvo!';
        window.location.href = 'index-criptografar.html'; // Redireciona para a segunda tela
    } else {
        document.getElementById('message').innerText = 'Digite um texto válido e tente criptografar.';
    }
}

function descriptografar() {
    const inputText = document.getElementById('inputText').value;
    if (inputText) {
        try {
            const decryptedText = atob(inputText); // Função para descriptografia
            localStorage.setItem('textoDescriptografado', decryptedText);
            localStorage.setItem('textoOriginal', inputText);
            document.getElementById('message').innerText = 'Texto descriptografado e salvo!';
            window.location.href = 'index-criptografar.html'; // Redireciona para a segunda tela
        } catch (e) {
            document.getElementById('message').innerText = 'Texto inválido para descriptografar.';
        }
    } else {
        document.getElementById('message').innerText = 'Digite um texto válido e tente descriptografar.';
    }
}

function copiarTexto() {
    const outputText = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        // Remove o alerta
        document.getElementById('outputText').innerText = '';
        document.getElementById('inputText').value = '';
        document.getElementById('message').innerText = 'Digite seu texto';
    });
}