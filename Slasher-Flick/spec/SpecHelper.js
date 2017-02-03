describe('Slasher-flick', function(){

  it('should exist', function () {
    expect(slasher).toBeDefined();
  })
  it('should be a function', function () {
    expect(slasher).toEqual(jasmine.any(Function));
  })

  it('should return the remaining elements of an array after chopping off n elements from the head.', function(){
    expect(slasher([1, 2, 3], 2)).toEqual([3]);
    expect(slasher([1, 2, 3], 0)).toEqual([1, 2, 3]);
    expect(slasher([1, 2, 3], 9)).toEqual([]);
    expect(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5)).toEqual(["cheese", 4]);
  })

})
