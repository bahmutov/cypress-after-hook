context('spec b', () => {
  beforeEach(() => {
    console.log('spec-b file: beforeEach hook')
  })

  it('works', function () {
    expect(1).to.equal(1)
  })

  it('works 2', function () {
    expect(1).to.equal(1)
  })
})
