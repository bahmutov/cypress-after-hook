context('spec a', () => {
  beforeEach(() => {
    console.log('spec-a file: beforeEach hook')
  })

  it('works', function () {
    expect(1).to.equal(1)
  })

  it('works 2', function () {
    expect(1).to.equal(1)
  })
})
