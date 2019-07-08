import Component from '@ember/component';

export default Component.extend({
    actions:{
        showDetail(person){
            document.console.log(person);
        }
    }
});
