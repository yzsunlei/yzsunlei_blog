const OSS = require('ali-oss')
const ossConfig = require('./config')
const fs = require('fs');
const path = require('path');

let client = new OSS({
  region: ossConfig.alioss.region,
  accessKeyId: ossConfig.alioss.accessKeyId,
  accessKeySecret: ossConfig.alioss.accessKeySecret,
  bucket: ossConfig.alioss.bucket,
});


/**
 * 遍历指定目录下的所有文件
 * @param {*} dir 
 */
const getAllFile = (dir) => {
  return new Promise((resolve, reject) => {
    let res = []
    function traverse (dir) {
        fs.readdirSync(dir).forEach((file) => {
            const pathname = path.join(dir, file)
            if (fs.statSync(pathname).isDirectory()) {
                traverse(pathname)
            } else {
                res.push(pathname)
            }
        })
    }
    traverse(dir);
    resolve(res);
  });
}

/**
 * 上传指定目录下的所有文件
 * @param {*} sourceDir 
 * @param {*} targetDir 
 * @param {*} files 
 */
 const putOss = (sourceDir, targetDir, files) => {
  for (let i = 0; i < files.length; i++) {
    const source = files[i]
    const target = `${source}`.replace(sourceDir, targetDir)
    // console.log(target, source)
    client.put(target, source).then(res => {
      // console.log(res);
    }).catch(err => {
      console.error(err)
    })
  }
}

const sourceDir = 'docs/.vuepress/dist'
const targetDir = "softskill_notes"
getAllFile(sourceDir).then((files) => {
  putOss(sourceDir, targetDir, files);
})