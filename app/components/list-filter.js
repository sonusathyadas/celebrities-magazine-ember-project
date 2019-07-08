import Component from '@ember/component';

export default Component.extend({

    init() {
        this._super(...arguments);
        this.filter('')
            .then((results) => this.set('results', results));
    },
    actions: {
        handleFilterEntry() {            
            let filterInputValue = this.value;            
            this.filter(filterInputValue)
                .then((filterResults) => this.set('results', filterResults));
        }
    }
});
