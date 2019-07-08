import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({    
    firstName:DS.attr('string'),
    lastName:DS.attr('string'),
    imageUrl:DS.attr('string'),
    age:DS.attr('number'),
    profession:DS.attr('string')
});
