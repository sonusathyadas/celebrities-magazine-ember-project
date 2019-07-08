
import Inflector from 'ember-inflector';

export function initialize(/* application */) {
    const inflector = Inflector.inflector;

    // Tell the inflector that the plural of "person" is "persons"
    inflector.irregular('person', 'persons');

    // Tell the inflector that the plural of "advice" is "advice"
    //inflector.uncountable('advice');
}

export default {
    name: 'custom-inflector-rules',
    initialize
};
