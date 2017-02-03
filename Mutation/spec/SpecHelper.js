describe('Mutation', function(){

  it('should exist', function () {
    expect(mutation).toBeDefined();
  })
  it('should be a function', function () {
    expect(mutation).toEqual(jasmine.any(Function));
  })

  it('should return true if the letters from the second index are found in the first index', function(){
    expect(mutation(["hello", "hey"])).toBe(false);
    expect(mutation(["hello", "Hello"])).toBe(true);
    expect(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])).toBe(true);
    expect(mutation(["hello", "neo"])).toBe(false);
  })

})
