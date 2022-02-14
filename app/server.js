import { createServer, Response } from "miragejs";

export const profileMock = {
  currency: 'vnd',
  accounts: [
    {
      id: 1,
      name: 'My Wallet',
      account_number: 7300377738883334,
      default: 1,
    },
    {
      id: 2,
      name: 'My Second Wallet',
      account_number: 7300377738884445,
      default: 0,
    },
  ]
}

export const assetsMock =  [
  {
    id: 1,
    account_id: 1,
    balance: 1000,
    rate: 23046,
    currency: 'usd',
    default: 1,
  },
  {
    id: 2,
    account_id: 1,
    balance: 50,
    rate: 30639.44,
    currency: 'eur',
    default: 0,
  },
  {
    id: 3,
    account_id: 1,
    balance: 10000,
    rate: 210.3317,
    currency: 'yen',
    default: 0,
  },
]

if (window.server) {
  server.shutdown()
}

export const server = () => {
  window.server = createServer({
    routes() {
      this.post("./api/login", (_, request) => {
        const attrs = JSON.parse(request.requestBody);
        if(attrs.password !== 'P@ssword') {
          return new Response(400, undefined, { error: 'Wrong password. Please use "P@ssword" to login.' });
        }
        return {
          data: {
            ...profileMock,
          },
        }
      });
      this.get("./api/assets", () => {
        return {
          data: [
            ...assetsMock,
          ],
        }
      });
      this.post("./api/transfer", (_, request) => {
        const attrs = JSON.parse(request.requestBody);
        const assets = assetsMock.map(ast => ast.id === attrs.asset_id ? {...ast, balance: Number.parseFloat((ast.balance - (attrs.amount + attrs.fee).toString()).toFixed(2))} : ast);
        
        return {
          data: [
            ...assets
          ],
        }
      })
    },
  });
}