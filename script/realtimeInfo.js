import { fetchWeather } from './weatherAPI.js';

const citySelect = document.querySelector('#citySelect');
const weatherBox = document.querySelector('#weather-box');

const cities = {
    gwangju: {
        name: '광주',
        latitude: 35.1595,
        longitude: 126.8526
    },
    ulsan: {
        name: '울산',
        latitude: 35.5384,
        longitude: 129.3114
    },
    pangyo: {
        name: '판교',
        latitude: 37.3947,
        longitude: 127.1112
    }
};

citySelect.addEventListener('change', async function () {
    const selectedCity = cities[citySelect.value];

    if (!selectedCity) {
        weatherBox.className = '';
        weatherBox.innerHTML = '도시를 선택하면 현재 날씨가 표시됩니다.';
        return;
    }

    weatherBox.className = 'loading';
    weatherBox.innerHTML = '실시간 날씨 로딩 중... ⏳';

    try {
        const weather = await fetchWeather(selectedCity.latitude, selectedCity.longitude);

        weatherBox.className = '';
        weatherBox.innerHTML = `
            <strong>🌏 ${selectedCity.name}의 실시간 날씨</strong>
            <span>🌡️ 현재 기온: ${weather.temperature}°C</span>
            <span>💧 현재 습도: ${weather.humidity}%</span>
        `;
    } catch (error) {
        weatherBox.className = 'error';
        weatherBox.innerHTML = '날씨 정보를 가져오지 못했습니다. 잠시 후 다시 시도해 주세요.';
    }
});
