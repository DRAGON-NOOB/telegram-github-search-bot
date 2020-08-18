const token =1181192146:AAHhRdqMvoYMskOlyc42RoQ3TDE9KDQT83Y ;
const github = {
  version: '3.0.0',
  // optional
  debug: true,
  protocol: 'https',
  host: 'api.github.com',
  pathPrefix: '',
  timeout: 5000,
  headers: {
    'user-agent': 'Telegram Github Search Bot'
  }
};

export default {
  token,
  github
};
