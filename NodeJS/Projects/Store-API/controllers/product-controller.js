
const Product = require('..\\models\\product-models')

// * Get All Task.
const getAllProductsStatic = async (req, res) => {

    const search = "ab"

    // * for sorting the data base on the value we have to pass key value pairs inside the find method
    // const products = await Product.find({
    //     // featured: true,
    //     // name: 'vase table'
    //     name: {
    //         // * looking for patterns using Regex Expression. 
    //         $regex: search,
    //         $options: 'i'
    //     }
    // })

    // * Sorted Data:
    // 1. name (ascending Order) (A-Z)
    // 2. -name (descending order) (Z-A)
    // 3. multiple sorting .sort("name price")
    // const products = await Product.find({}).sort('-name price')

    // // * Select Data
    // const products = await Product.find({}).select('name price')

    // * Limit
    const products = await Product.find({
        price: {
            $gt: 100
        }
    })
        .sort('name')
        .select('name price')
        .limit(10)
        .skip(1)

    res.status(200).json({
        products,
        nbHits: products.length
    })
}


// *Get Filtered Task.
const getAllProducts = async (req, res) => {
    const { featured, company, name, sort, fields, NumericFilter } = req.query
    const queryObject = {}


    // * ------------------------------
    // * Fetch Methods
    if (featured) {
        // Output:  { featured: 'true', nameFi: 'de-de' }
        queryObject.featured = featured == "true" ? true : false
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = {
            // * looking for patterns using Regex Expression. 
            $regex: name,
            $options: 'i'
        }
    }
    if (numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        };
        const regEx = /\b(<|>|>=|=|<|<=)\b/g;
        let filters = numericFilters.replace(
            regEx,
            (match) => `-${operatorMap[match]}-`
        );
        const options = ['price', 'rating'];
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-');
            if (options.includes(field)) {
                queryObject[field] = { [operator]: Number(value) };
            }
        });
    }
    let result = Product.find(queryObject)


    // * ------------------------------
    // * Sort Functionality 
    if (sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }
    else {
        result = result.sort('createAt')
    }


    // * ------------------------------
    // * select particular field.
    if (fields) {
        const fieldList = fields.split(',').join(' ')
        result = result.select(fieldList)
    }


    // * ------------------------------
    // * Limit | Page
    const page = Number(req.query.page) | 1
    const limit = Number(req.query.limit) | 10
    const skip = (page - 1) * limit
    //  23 Product | 4 page require | Limit 7 ==>  7 7 7 2
    if (limit) {
        result = result
            .skip(skip)
            .limit(limit)
    }

    const products = await result;
    res.status(200).json({ products, nbHits: products.length });


}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}