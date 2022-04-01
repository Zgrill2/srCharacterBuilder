// This is intended to be a template
// Will likely use async, res, and useEffect to call a backend to fetch data if/when backend storage is implemented

function getData() {
    const data = {
        test: "test data"
    };
    return data;
}

const StubProvider = () => {
    return getData()
};

export default StubProvider;