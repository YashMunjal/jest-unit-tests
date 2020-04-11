const cloneArray=require('./clonearray')

test('check clones',()=>{
    const array=[1,2,3]
    expect(cloneArray(array)).not.toBe(array)
    //will differ as the value is same but contagious location isn't
    expect(cloneArray(array)).toEqual(array)
})