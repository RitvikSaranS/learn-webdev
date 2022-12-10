const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const newDate = format(new Date(), 'dd MM yyyy');
console.log(newDate);

console.log(uuid());