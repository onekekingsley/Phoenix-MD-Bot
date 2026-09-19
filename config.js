const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) {
  require('dotenv').config({
    path: './config.env'
  });
}

const toBool = (x) =>
  ['true', 'on', '1'].includes(String(x || '').toLowerCase());

const DATABASE_URL = process.env.DATABASE_URL || './database.db';

module.exports = {

  // =========================
  // 🤖 BOT CONFIGURATION
  // =========================

  SESSION_ID: process.env.SESSION_ID || "Phoenix~MeteorVelocity",

  STICKER_DATA:
    process.env.STICKER_DATA ||
    '🎯;Kingsley-MD',

  ALIVE_DATA:
    process.env.ALIVE_DATA ||
    '👋 Hello &sender!\n\n' +
    '🤖 *KINGSLEY-MD is online!*\n\n' +
    '📌 Type *menu* to see my commands.\n' +
    '🌍 Platform: &platform\n' +
    '⏱️ Runtime: &runtime',

  AUDIO_DATA:
    process.env.AUDIO_DATA ||
    'Kingsley-MD;Kingsley;',

  BOT_INFO:
    process.env.BOT_INFO ||
    'Kingsley-MD;Kingsley;237;',

  PREFIX: process.env.PREFIX || '.',

  // private = owner/sudo focused
  // public = commands available to permitted users/groups
  MODE: process.env.MODE || 'private',

  // Put your own WhatsApp number in config.env.
  // Example: SUDO=2376XXXXXXXX
  SUDO: process.env.SUDO || '',

  ELEVENLABS_API_KEY:
    process.env.ELEVENLABS_API_KEY || '',

  TIMEZONE:
    process.env.TIMEZONE || 'Africa/Douala',

  BOT_LANG:
    process.env.BOT_LANG || 'EN',

  START_MSG:
    toBool(process.env.START_MSG || 'true'),

  ERROR_MSG:
    toBool(process.env.ERROR_MSG || 'true'),


  // =========================
  // ☁️ HOSTING
  // =========================

  HEROKU_APP_NAME:
    process.env.HEROKU_APP_NAME || '',

  HEROKU_API_KEY:
    process.env.HEROKU_API_KEY || '',

  RENDER_NAME:
    process.env.RENDER_NAME || '',

  RENDER_API:
    process.env.RENDER_API || '',

  KOYEB_APP_NAME:
    process.env.KOYEB_APP_NAME || '',

  KOYEB_API_KEY:
    process.env.KOYEB_API_KEY || '',


  // =========================
  // ⚙️ AUTOMATION
  // =========================

  AUTO_ALWAYS_ONLINE:
    toBool(process.env.AUTO_ALWAYS_ONLINE || 'false'),

  AUTO_CALL_REJECT:
    toBool(process.env.AUTO_CALL_REJECT || 'false'),

  AUTO_CALL_REJECT_MSG:
    process.env.AUTO_CALL_REJECT_MSG ||
    '📵 Calls are currently not accepted. Please send a message instead.',

  AUTO_MSG_READ:
    toBool(process.env.AUTO_MSG_READ || 'false'),

  AUTO_MSG_REACT:
    toBool(process.env.AUTO_MSG_REACT || 'false'),


  // =========================
  // 👀 STATUS
  // =========================

  AUTO_STATUS_SAVER:
    toBool(process.env.AUTO_STATUS_SAVER || 'false'),

  AUTO_STATUS_VIEW:
    toBool(process.env.AUTO_STATUS_VIEW || 'false'),

  AUTO_STATUS_REPLY:
    toBool(process.env.AUTO_STATUS_REPLY || 'false'),

  AUTO_STATUS_REPLY_MSG:
    process.env.AUTO_STATUS_REPLY_MSG ||
    '👀 Nice status!',

  AUTO_STATUS_REACT:
    toBool(process.env.AUTO_STATUS_REACT || 'false'),

  AUTO_STATUS_REACT_EMOJIS:
    ['💎', '🤍', '🍀', '🎯', '🫶', '👀'],


  // =========================
  // 🗄️ DATABASE
  // =========================

  BASE_URL:
    'https://abhi-api.vercel.app/',

  BRANCH:
    'main',

  DATABASE:
    DATABASE_URL === './database.db'
      ? new Sequelize({
          dialect: 'sqlite',
          storage: DATABASE_URL,
          logging: false
        })
      : new Sequelize(DATABASE_URL, {
          dialect: 'postgres',
          logging: false,
          dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false
            }
          }
        })
};
