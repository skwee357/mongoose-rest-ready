module.exports = function restReadyPlugin(schema, options) {
    if (!schema.options.toJSON) schema.options.toJSON = {};

    schema.options.toJSON.transform = function (doc, ret, opts) {
        ret.id = ret._id.toHexString();
        delete ret._id;
        delete ret.__v;
    };
};
