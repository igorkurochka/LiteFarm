import {
  barnColour,
  ceremonialSiteColour,
  creekColour,
  farmBoundColour,
  fenceColour,
  fieldColour,
  greenhouseColour,
  groundwaterColour,
  naturalAreaColour,
  residenceColour,
} from './styles.module.scss';
import waterValve from '../../assets/images/map/water-valve.png';
import waterValveHover from '../../assets/images/map/water-valve-hover.png';
import gate from '../../assets/images/map/gate.png';
import gateHover from '../../assets/images/map/gate-hover.png';

export const areaStyles = {
  barn: {
    colour: barnColour,
    dashScale: 2,
    dashLength: '14px',
  },
  ceremonial_area: {
    colour: ceremonialSiteColour,
    dashScale: 1.5,
    dashLength: '8px',
  },
  farm_bound: {
    colour: farmBoundColour,
    dashScale: 1,
    dashLength: '1px',
  },
  field: {
    colour: fieldColour,
    dashScale: 1,
    dashLength: '6px',
  },
  greenhouse: {
    colour: greenhouseColour,
    dashScale: 1,
    dashLength: '8px',
  },
  ground_water: {
    colour: groundwaterColour,
    dashScale: 0.7,
    dashLength: '6px',
  },
  natural_area: {
    colour: naturalAreaColour,
    dashScale: 0.7,
    dashLength: '12px',
  },
  residence: {
    colour: residenceColour,
    dashScale: 0,
    dashLength: '12px',
  },
};

export const lineStyles = {
  creek: {
    colour: creekColour,
    dashScale: 0.7,
    dashLength: '6px',
  },
  fence: {
    colour: fenceColour,
    dashScale: 1,
    dashLength: '6px',
  },
};

export const icons = {
  gate: gate,
  water_valve: waterValve,
};
export const hoverIcons = {
  gate: gateHover,
  water_valve: waterValveHover,
};
