
describe('Tema 1 ejercicios', function() {

  beforeEach(function(){
    spyOn(console, 'log');
  })
  
  describe('Tema 1 Ejercicio a)', function() {
    it('La variable \'name\' debe estar declarada ', function() {
      expect(name).toBeDefined()
    });

    it('La variable \'name\' debe estar declarada debe ser del tipo string', function() {
      expect(typeof name).toBe('string')
    });
  })

  describe('Tema 1 Ejercicio b)', function() {
    it('La variable \'age\' debe estar declarada ', function() {
      expect(age).toBeDefined()
    });

    it('La variable \'age\' debe estar declarada debe ser del tipo number', function() {
      expect(typeof age).toBe('number')
    });
  })
});