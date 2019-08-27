import * as React from 'react';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Slider } from 'office-ui-fabric-react/lib/Slider';

// import converter from '../cie_rgb_converter'

/*
Examples
Convert CIE to RGB
var rgb = cie_to_rgb(0.6611, 0.2936)
Convert RGB to CIE
var cie = rgb_to_cie(255, 39, 60)
*/

interface IProps {
    onToggleLight: (id: any, isOn: any) => void,
    onBrightnessChanged: (id: any, item: any) => void,
    id: any,
    name: any,
    isOn: any,
    bri: any
}

const LightItem: React.FC<IProps> = ({ onToggleLight, onBrightnessChanged, id, name, isOn, bri }) => {

    return (
        <div className='items'>
            <div>
                <h4>{name}</h4>
                <Toggle className='item'
                    defaultChecked={isOn}
                   
                    onChange={() => onToggleLight(id, isOn)}
                />
            </div>


            <Slider
                min={0}
                max={255}
                step={1}
                value={bri}
                showValue={false}
                // onChange={(e, id) => onToggleLight(id, isOn)}

                onChange={(newValue: number) => onBrightnessChanged(id, newValue)}
            />



        </div>
    );
}
export default LightItem;