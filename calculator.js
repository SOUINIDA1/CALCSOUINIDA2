let result = document.getElementById('result');

function appendToResult(value)
{result.value += value;}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = '3AWD T2AKD'
    }
}

function clearResult() {
    result.value = '';
}