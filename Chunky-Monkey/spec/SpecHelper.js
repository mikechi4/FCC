describe('chunky monkey ', function(){

  it('should exist', function () {
    expect(chunkArrayInGroups).toBeDefined();
  })
  it('should be a function', function () {
    expect(chunkArrayInGroups).toEqual(jasmine.any(Function));
  })

  it('Should split the passed in array into indices based on second argument', function(){
    expect(chunkArrayInGroups(["a", "b", "c", "d"], 2)).toEqual([["a", "b"], ["c", "d"]]);
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)).toEqual([[0, 1, 2], [3, 4, 5]]);
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)).toEqual([[0, 1], [2, 3], [4, 5], [6, 7], [8]]);
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)).toEqual([[0, 1, 2], [3, 4, 5]]);
  })

})
