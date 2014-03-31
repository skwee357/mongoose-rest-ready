require('chai').should();

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    restReadyPlugin = require('../');

var schema = {name: String};
var NotRestReadySchema = new Schema(schema);
var RestReadySchema = new Schema(schema);
RestReadySchema.plugin(restReadyPlugin);

var NotRestReadyModel = mongoose.model('NotRestReady', NotRestReadySchema);
var RestReadyModel = mongoose.model('RestReady', RestReadySchema);


describe('mongoose-rest-ready', function () {

    it('should be not rest ready and have _id property and not have id property', function notRestReadyTest(done) {
        var s = new NotRestReadyModel({name: 'Bob'});
        var json = s.toJSON();

        json.should.have.property('_id');
        json.should.not.have.property('id');
        done();
    });

    it('should be rest ready and have id property and not have _id property', function restReadyTest(done) {
        var s = new RestReadyModel({name: 'Bob'});
        var json = s.toJSON();

        json.should.have.property('id');
        json.should.not.have.property('_id');
        json.should.not.have.property('__v');
        done();
    });
});