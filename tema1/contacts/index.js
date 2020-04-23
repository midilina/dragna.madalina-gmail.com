export function init() {
    window.addEventListener('DOMContentLoaded', onLoad);
}
function onLoad() {
    document.getElementById('form-add').addEventListener('submit', onSubmitAdd);
    document.getElementById('form-add').addEventListener('submit', onSubmitDelete);
    render();
}
function onSubmitAdd(event) {}

function onSubmitDelete(event) {}

function render() {}