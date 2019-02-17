const keystone = require('keystone')
const Types = keystone.Field.Types

const Startseite = new keystone.List('Startseite')

Startseite.add({
    picture : { type: Types.CloudinaryImage },
    text : { type: Types.Html, wysiwyg: true, height: 300 },
    active : { type: Types.Boolean }
})

Startseite.defaultColumns = 'picture, active'
Startseite.register()