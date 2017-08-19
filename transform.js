const s = require('./component/Register/dropdown-data.json');
const fs = require('fs');

const province = s.province.map(i => i.name);

fs.writeFileSync('data.json', JSON.stringify(province));
