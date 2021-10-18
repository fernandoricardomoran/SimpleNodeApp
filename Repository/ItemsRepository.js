module.exports = (function () {

    var getItems = async (req, res) => {
        var items = await new Promise((resolve, reject) => {
            setTimeout(() => {
                var arreglo = new Array(100).fill(null).map((value, index) => ({
                    itemId: index + 1,
                    value: `Valor ${index + 1}`,
                    booleanValue: Boolean(index % 2)
                }));
                resolve(arreglo);
            }, 200);
        });
        res.send(items);
    };

    var addItem = (req, res) => {

    };

    return {
        getItems
    };

})();