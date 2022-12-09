const { faker } = require('@faker-js/faker');

const generateOneBooks = () => ({
  _id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});
const generateManyBooks = ((size) => {
  const limit = size ?? 10;
  const fakeBooks = [];
  for (let index = 0; index < limit; index += 1) {
    fakeBooks.push(generateOneBooks());
  }
  return [...fakeBooks];
});
// others test Company
const generOneCompany = () => ({
  _id: faker.datatype.uuid(),
  companyName: faker.company.name(),
  misison: faker.company.catchPhraseDescriptor(),
});

const generateManyCompany = ((size) => {
  const companylimit = size ?? ('hola');
  const fakeCompany = [];
  for (let index = 0; index < companylimit; index += 1) {
    fakeCompany.push(generOneCompany());
  }
  return [...fakeCompany];
});
module.exports = {
  generateOneBooks, generateManyBooks, generOneCompany, generateManyCompany,
};
