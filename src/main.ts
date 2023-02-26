import weatherData from './constants/weatherData'

const root = document.querySelector('#root') as HTMLElement

let iaPlaying: boolean = false;
let iaPaused: boolean = false;
let activeWeather: string = '';
let dataset: string | null = '';
let audio: HTMLAudioElement;

interface typeWeather {
  id: number
  name: string
  image: string
  sound: string
  icon: string
}

class Weather {
  id: number
  name: string
  image: string
  sound: string
  icon: string

  constructor(data: typeWeather) {
    this.id = data.id
    this.name = data.name
    this.image = data.image
    this.sound = data.sound
    this.icon = data.icon
  }

  clickWeather = (event: Event): void => {
    const target = event.target as HTMLElement
    let isPlayNewSound: boolean = false
    let datasetObj: Weather;

    if (target) {
      document.querySelectorAll('.icon_pause').forEach(icon => icon.setAttribute('style', 'visibility: hidden'))
      dataset = target.getAttribute('dataset');

      if (dataset) {
        datasetObj = JSON.parse(dataset)
        target.closest('.weather_list__item')?.querySelector('.icon_pause')?.setAttribute('style', 'visibility: visible');
        isPlayNewSound = (!iaPlaying && !iaPaused) || (activeWeather !== datasetObj.name);

        if (isPlayNewSound && datasetObj) {
          activeWeather = datasetObj.name;

          h1.textContent = 'Weather sounds ' + activeWeather;
          divWrapper.setAttribute('style', 'background-image: url(' + datasetObj.image + ')');
          audio.setAttribute('src', datasetObj.sound);
        }
      }

      iaPlaying = true;
      iaPaused = false;
      audio.play();
    }
  }

  clickPause = (event: Event): void => {
    event.stopPropagation();
    const target = event.target as HTMLElement
    if (target) {
      target.setAttribute('style', 'visibility: hidden')
    }
    iaPlaying = false;
    iaPaused = true;
    audio.pause();
  }

  addWeather(weather: typeWeather): void {
    const li = document.createElement('li')
    li.className = 'weather_list__item'
    li.setAttribute('style', 'background-image: url(' + weather.image + ')');
    li.setAttribute('dataset', JSON.stringify(weather));

    const img = document.createElement('img')
    img.src = weather.icon;
    img.width = 60;
    li.appendChild(img);

    const iconPause = document.createElement('i')
    iconPause.className = 'icon_pause';
    iconPause.setAttribute('style', 'visibility: hidden');
    iconPause.addEventListener('click', this.clickPause)

    li.appendChild(iconPause);
    li.addEventListener('click', this.clickWeather)

    ul.append(li);
  }
}

function onChangeRange(event: Event): void {
  const { target } = event
  let value: string = '';
  if (target) value = (target as HTMLButtonElement).value;
  audio.volume = Number(value);
}

const divWrapper = document.createElement('div') as HTMLDivElement;
divWrapper.className = 'wrapper';
root.append(divWrapper);

const h1 = document.createElement('h1') as HTMLElement;
h1.textContent = 'Weather sounds';
divWrapper.appendChild(h1);

const ul = document.createElement('ul') as HTMLElement;
ul.className = 'weather_list'
divWrapper.appendChild(ul);

const divRange = document.createElement('div') as HTMLElement;
divRange.className = 'range_volume'
const inputRange = document.createElement('input') as HTMLInputElement;
inputRange.type = 'range';
inputRange.step = '0.1';
inputRange.min = '0.1';
inputRange.max = '1';
inputRange.value = '0.5';
inputRange.addEventListener('input', onChangeRange)

divRange.appendChild(inputRange);
divWrapper.appendChild(divRange);

audio = document.createElement('audio') as HTMLAudioElement;
divWrapper.appendChild(audio);


weatherData.forEach(weather => {
  const _weather = new Weather(weather)
  _weather.addWeather(_weather)
})
