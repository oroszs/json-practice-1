const fetchJson = async () => {
    const url = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';
    const response = await fetch(url);
    return await response.json();
}