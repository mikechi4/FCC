describe('getIndexToIns', function(){

  it('should exist', function () {
    expect(getIndexToIns).toBeDefined();
  })
  it('should be a function', function () {
    expect(getIndexToIns).toEqual(jasmine.any(Function));
  })

  it('should add num to the arr, sort it, and return the index of num', function(){
    expect(getIndexToIns([10, 20, 30, 40, 50], 35)).toBe(3);
    expect(getIndexToIns(getIndexToIns([10, 20, 30, 40, 50], 30))).toBe(2);
    expect(getIndexToIns(getIndexToIns([40, 60], 50))).toBe(1);
    expect(getIndexToIns(getIndexToIns([3, 10, 5], 3))).toBe(0);
  })

})
