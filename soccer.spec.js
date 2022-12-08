describe('Test for the soccer game', () => {
    
    describe('Test the getTotalPoints Method', ()=>{

        it('Should return correct point total', () => {
            const points = getTotalPoints('wwdl')
            expect (points).toBe(7)

            expect(getTotalPoints('dddl')).toBe(3)
        })
    })

    describe('Test the orderTeams', ()=>{
        it('Should return the correct teams with points', () =>{
            const team1 = {
                name: 'Sounder',
                results: 'wwwwldl'
            }
            const team2 = {
                name: 'Galaxy',
                results: 'ldwdwlwl'
            }

            const expectedString = 
            `Sounder: 13
            Galaxy: 11`

            const result = orderTeams(team1, team2)
            expect(result).toContain("Sounder")
        })
    })
})