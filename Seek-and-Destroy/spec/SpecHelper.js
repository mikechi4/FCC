describe('Mutation', function(){

  it('should exist', function () {
    expect(destroyer).toBeDefined();
  })
  it('should be a function', function () {
    expect(destroyer).toEqual(jasmine.any(Function));
  })

  it('should remove any args passed in arguments object from the passed in array', function(){
    expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
    expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).toEqual([1, 5, 1]);
    expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).toEqual([1]);
    expect(destroyer("tree", "hamburger", 53], "tree", 53)).toEqual(["hamburger"]);
  })

})
