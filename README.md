mongoose-rest-ready
===================

A plugin for [mongoosejs](http://mongoosejs.com/index.html) to turn document into REST API ready responses.
Removes the redundant `_id` and `__v` from JSON responses and instead exposes the `id` attribute that
is more common to REST API responses than `_id`.

Install
===================

Run `npm install mongoose-rest-ready` or add it as a dependency to you `package.json` and run `npm install`.

Usage
====

```javascript
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    restReadyPlugin = require('mongoose-rest-ready');

var schema = new Schema({
    ...
});

schema.plugin(restReadyPlugin);
```
And then use your schema as regular.

Test
====

Run `npm test` to run the test.

License
===

Licensed Under the MIT License (LICENSE file).


The MIT License (MIT)

Copyright (c) 2014 Dmitry Kudryavtsev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.