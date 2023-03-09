import './styles/index.css';

const initMocks = async () => {
    if (typeof window !== 'undefined') {
        const { worker } = await import('./mocks/browser');
        await worker.start();
        return true;
    }
    return false;
}

const initMain = async () => {
    const isMock = await initMocks();
    if (isMock) {
        fetch('/api/products')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                document.getElementById('result').innerHTML = JSON.stringify(myJson);
            })
        const div = `
            <div class="bg-red color-primary">안녕하세요1</div>
            <div class="bg-blue color-secondary">안녕하세요2</div>
        `;
        document.getElementById('main').innerHTML = div;
    }

}

window.onload = () => {
    initMain();
}
