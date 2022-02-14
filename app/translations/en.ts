const en = {
  actions: {
    unlock: 'Unlock',
    save: 'Save',
    cancel: 'Cancel',
    send: 'Send',
    ok: 'OK',
  },
  screens: {
    login: {
      title: 'Ronin Wallet',
      caption: 'Your Digital Passport',
      inputLabel: 'ENTER PASSWORD',
    },
    home: {
      card: {
        title: 'My Wallet',
      },
      buttons: {
        deposit: 'Deposit',
        send: 'Send',
        swap: 'Swap',
      },
    },
    transfer: {
      form: {
        from: 'FROM',
        to: 'TO',
        asset: 'ASSET',
        amount: 'AMOUT',
        available: 'AVAILABLE: {{balance}}',
        max: 'MAX',
      },
      send: {
        title: 'Successfully sent',
        desc: 'Your {{amount}} has been sent! \nThank you for using our service',
      },
    },
  },
};

export default en;
