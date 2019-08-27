// requested failed noch abfragen

import * as React from 'react';
import LightItem from './LightItem';
import { GET_HUE_LIGHTS, CHANGE_HUE_LIGHTS } from '../webservice'

interface IState {
    requestFailed: boolean;
    data: any;
}

let hueLightsInit: any;
let hueLightsChange: any;

class Lights extends React.Component<{}, IState> {
    public state: IState = {
        requestFailed: false,
        data: undefined
    };

    public componentDidMount = async () => {
        hueLightsInit = await GET_HUE_LIGHTS();
        this.setState({ data: hueLightsInit.data })
    }

    public changeState = async (id: any, bodyData: any) => {
        hueLightsChange = await CHANGE_HUE_LIGHTS(id, bodyData);
        console.log(hueLightsChange.statusText)
        hueLightsInit = await GET_HUE_LIGHTS();
        this.setState({ data: hueLightsInit.data })
    }

    public handleToggle = (id: any, isOn: any) => {
        const bodyData = '{"on":' + !isOn + '}';
        this.changeState(id, bodyData);
    }

    public handleBrightness = (id: any, newValue: any) => {
        console.log(id)
        const bodyData = '{"bri":' + newValue + '}';
        this.changeState(id, bodyData);
    }

    public render() {
        const { data, requestFailed } = this.state

        if (requestFailed) {
            return <p>No Connection</p>
        }

        if (!data) {
            return <p>Loading...</p>;
        }

        if (data[0] !== undefined) {
            return <p>{data[0].error.description}</p>;
        }

        const lightItems: any[] = [];
        const toggleHandler = this.handleToggle;
        const brightnessHandler = this.handleBrightness

        Object.keys(data).forEach((id, index) => {
            const item = data[id];
            const light: any = <LightItem key={id} id={id} name={data[id].name}
                isOn={item.state.on} bri={item.state.bri}
                onToggleLight={toggleHandler}
                onBrightnessChanged={brightnessHandler}
            />
            lightItems.push(light);
        });
        return (
            < div >
                {lightItems}
            </div >
        );
    }
}

export default Lights;