import { ISoaks } from "../interfaces/ISoaks";


function getData(): ISoaks {

    const data:ISoaks = [
        {name: 'Armor', value: 0},
        {name: 'Physical', value: 0},
        {name: 'Mental', value: 0},
        {name: 'Drain', value: 0},
    ]

    return data;
}

const SoaksProvider = () => {
    return getData()
};

export default SoaksProvider;
