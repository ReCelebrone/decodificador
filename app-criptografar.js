document.addEventListener('DOMContentLoaded', (event) => {
    // Verifica se a página foi recarregada
    if (performance.navigation.type === 1) {
        // Limpa o localStorage quando carrega a página
        localStorage.clear();

        // Redireciona para a tela inicial
        window.location.href = 'index.html';
    }

    const textoCriptografado = localStorage.getItem('textoCriptografado');
    const textoDescriptografado = localStorage.getItem('textoDescriptografado');
    const textoOriginal = localStorage.getItem('textoOriginal');
    
    if (textoCriptografado) {
        document.getElementById('outputText').innerText = textoCriptografado;
        document.getElementById('inputText').value = textoOriginal;
        document.getElementById('message').innerText = 'Texto criptografado carregado!';
    } else if (textoDescriptografado) {
        document.getElementById('outputText').innerText = textoDescriptografado;
        document.getElementById('inputText').value = textoOriginal;
        document.getElementById('message').innerText = 'Texto descriptografado carregado!';
    }
});

function copiarTexto() {
    const outputText = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        // Remove o alerta
        document.getElementById('outputText').innerText = '';
        document.getElementById('inputText').value = '';
        document.getElementById('message').innerText = 'Digite seu texto';
    });
}

function criptografar() {
    const inputText = document.getElementById('inputText').value;
    if (inputText) {
        const encryptedText = btoa(inputText); // Função para criptografia
        localStorage.setItem('textoCriptografado', encryptedText);
        localStorage.setItem('textoOriginal', inputText);
        document.getElementById('outputText').innerText = encryptedText;
        document.getElementById('message').innerText = 'Texto criptografado!';
    } else {
        document.getElementById('message').innerText = 'Digite um texto válido e tente criptografar.';
    }
}

function descriptografar() {
    const inputText = document.getElementById('inputText').value;
    if (inputText) {
        try {
            const decryptedText = atob(inputText); // Função para descriptografia
            document.getElementById('outputText').innerText = decryptedText;
            document.getElementById('message').innerText = 'Texto descriptografado!';
        } catch (e) {
            document.getElementById('message').innerText = 'Texto inválido para descriptografar.';
        }
    } else {
        document.getElementById('message').innerText = 'Digite um texto válido e tente descriptografar.';
    }
}