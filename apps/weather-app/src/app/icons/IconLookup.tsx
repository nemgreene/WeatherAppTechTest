import ClearDay from './ClearDay';
import ClearNight from './ClearNight';
import Cloudy from './Cloudy';
import PartlyCloudyDay from './PartlyCloudyDay';
import PartlyCloudyNight from './PartlyCloudyNight';
import Rain from './Rain';
import Snow from './Snow';

export default function IconLookup({ iconName }: { iconName: string }) {
  const dict: any = {
    snow: <Snow />,
    rain: <Rain />,
    fog: <Cloudy />,
    wind: <Cloudy />,
    cloudy: <Cloudy />,
    'partly-cloudy-day': <PartlyCloudyDay />,
    'partly-cloudy-night': <PartlyCloudyNight />,
    'clear-day': <ClearDay />,
    'clear-night': <ClearNight />,
    default: <Cloudy />,
  };

  return Object.keys(dict).includes(iconName) ? dict[iconName] : dict.default;
}
