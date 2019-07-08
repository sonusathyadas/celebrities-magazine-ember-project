import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        filterByProfession(param) {
            if (param !== '') {
                return this.store.query('person', { profession: param });
            } else {
                return this.store.findAll('person');
            }
        }
    }
});
