const transactionController = require("./transactionController");


describe('Endpoints', () => {

  it('get-all-transaction end point', async () => {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "userid": "63894acb3932e96030c7fe8a",
        "frequency": "",
        "selectedDate": "",
        "type": ""
      })

    };
    const res = transactionController.getAllTransaction(req).then(data => {
      expect(data).toBeDefined()
      //console.log(data);
      //expect(data.entity.name).toEqual('Koen van Gilst')
    })

    // expect(res).toHaveLength(0);
    // expect(res.type).toEqual(expect.stringContaining('json'));
    // expect(res.body).toEqual("");
  });

});

describe('Endpoints', () => {

  it('editTransaction', async () => {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "_id": "63894acb3932e96030c7fe8a",
        "type": "salary"
      })

    };
    const res = transactionController.editTransaction(req).then(data => {
      expect(data).toBeDefined()
      //console.log(data);
      //expect(data.entity.name).toEqual('Koen van Gilst')
    })

    // expect(res).toHaveLength(0);
    // expect(res.type).toEqual(expect.stringContaining('json'));
    // expect(res.body).toEqual("");
  });


  it('deleteTransaction', async () => {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "_id": "63894acb3932e96030c7fe8a"

      })

    };
    const res = transactionController.deleteTransaction(req).then(data => {
      expect(data).toBeDefined()
      //console.log(data);
      //expect(data.entity.name).toEqual('Koen van Gilst')
    })

    // expect(res).toHaveLength(0);
    // expect(res.type).toEqual(expect.stringContaining('json'));
    // expect(res.body).toEqual("");
  });
  

});
