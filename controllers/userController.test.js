const userController = require("./userController");

describe('Endpoints', () => {

    it('get-all-transaction end point', async () => {
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "email": "jains01@pfw.edu",
          "password":"root"
          
        })
  
      };
      const res = userController.loginController(req).then(data => {
        expect(data).toBeDefined()
        //console.log(data);
        //expect(data.entity.name).toEqual('Koen van Gilst')
      })
  
      // expect(res).toHaveLength(0);
      // expect(res.type).toEqual(expect.stringContaining('json'));
      // expect(res.body).toEqual("");
    });
    

    
  });
