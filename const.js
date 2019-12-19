const env = require('./env')

let resUrl
let mp3FilePath
let dbHost
let dbUser
let dbPwd
if (env === 'dev') {
  // local 
  resUrl = 'http://localhost:2181'
  mp3FilePath = 'D:/Data/Resource/mp3'
  dbHost = 'localhost'
  dbUser = 'root'
  dbPwd = 'root'
} else if (env === 'prod') {
  // resUrl = 'http://106.15.231.180'
  // mp3FilePath = '/root/nginx/upload/mp3'
  // dbHost = '106.15.231.180'
  // dbUser = 'root'
  // dbPwd = 'Abcd123456.'
  // my server of aliyun
  resUrl = 'http://proudmodest.cn'
  mp3FilePath = '/root/nginx/upload/mp3'
  dbHost = '39.96.82.147'
  dbUser = 'root'
  dbPwd = 'Root1234.'
}

const category = [
  'Biomedicine',
  'BusinessandManagement',
  'ComputerScience',
  'EarthSciences',
  'Economics',
  'Engineering',
  'Education',
  'Environment',
  'Geography',
  'History',
  'Laws',
  'LifeSciences',
  'Literature',
  'SocialSciences',
  'MaterialsScience',
  'Mathematics',
  'MedicineAndPublicHealth',
  'Philosophy',
  'Physics',
  'PoliticalScienceAndInternationalRelations',
  'Psychology',
  'Statistics'
]

module.exports = {
  resUrl,
  category,
  mp3FilePath,
  dbHost,
  dbUser,
  dbPwd
}
